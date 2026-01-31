import { defineCollection, defineConfig, s } from 'velite'
import rehypeSlug from 'rehype-slug' // Import the plugin
import rehypePrettyCode from 'rehype-pretty-code' // 1. Import
import remarkGfm from 'remark-gfm'
import rehypeAutoLinkHeadings from 'rehype-autolink-headings'

const posts = defineCollection({
  name: 'Post', // The TypeScript type name generated
  pattern: 'blogs/**/*.{md,mdx}', // Where my raw md/mdx files live
  schema: s
    .object({
      title: s.string().max(99), // Tile, max 99 chars
      description: s.string(), // Manual SEO description
      tags: s.array(s.string()), // At least one tag required: ex: web, github
      image: s.image(), // Auto-optimizes image & provides dimensions/blur
      publishedAt: s.isodate(), // The original post date
      author: s.string(), // Validates YYYY-MM-DD format

      // Optional
      updatedAt: s.isodate().optional(), // ONLY add this if you edit the post later
      excerpt: s.excerpt({ length: 200 }).optional(), // Auto-generates a 200-char teaser For SEO, instead of writing manual description

      // Generated (Velite handles by default)
      body: s.mdx(), // Compiles MDX to executable code
      toc: s.toc(), // Generates Table of Contents array
      metadata: s.metadata(), // Used for readingTime and wordCount calculation - built in
      slug: s.slug('posts'), // Grabs filename if slug is missing in MDX, with "posts" it check if all slugs are unique or throw error at build
    })
    .transform(data => {
      // Clean up the slug: replace spaces with '-' and make lowercase
      const cleanSlug = data.slug.replace(/\s+/g, '-').toLowerCase()

      return {
        ...data,
        // Add a "Wordy" badge if the post is over 2000 words
        isLongRead: data.metadata.wordCount > 2000,
        slug: cleanSlug,
        url: `/blogs/${cleanSlug}`, //  Create the frontend URL
        readingTime: `${Math.ceil(data.metadata.readingTime)} min read`, // Reading time extracted from generated .metadata(): readingTime, wordCount
        // Create a structured data (JSON-LD) object for Google Search inside the post
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: data.title,
          image: data.image.src,
          datePublished: data.publishedAt, // Good for SEO
          author: data.author,
        },
      }
    }), // transform is the final data coming out of each raw mdx/s to .json format
})

// Change root for velite to look for content folder and the collection looks for pattern
// final folder: root + pattern
export default defineConfig({
  root: 'content',
  collections: { posts },
  // Where final json file and image ends up
  output: {
    data: '.velite', // Where JSON data and Types go (Default: .velite)
    assets: 'public/blogs', // default is /public/static // Where optimized images go (Default: public/static)
    base: '/blogs/', // The URL prefix for images (Default: /static/)
    name: '[name].[ext]', // <--- Remove [hash] in image here
    clean: true, // Remove old files before building again
  },
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      // THIS LINE IS THE KEY: It adds IDs to your <h2>, <h3>, etc.
      rehypeSlug,
      [rehypeAutoLinkHeadings, { behavior: 'wrap' }],
      [
        rehypePrettyCode,
        {
          theme: 'dracula',
        },
      ],
    ],
  },
})
