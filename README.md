# Nischal Portfolio

## Implementation Details

1. SVGR/webpack
   - install
   - copy paste the docs instruction in next.config.mjs
   - extend it to preserve default config: see code next.config.mjs file
2. Framer Motion: To handle animations

### Technologies Used

- svgr/webpack for svg customization
- framer-motion: npm install motion
- prettier for code formatting with prettier-plugin-tailwindcss
- mdx for markdown support and bloging

## MDX Implementation for Blog

- Install ` npm install next-mdx-remote`
  - Can be used for both local and remote mdx files
- Write the blog post in mdx format and save it to the content/posts folder
  - Read the mdx file via slug using fs module
  - Install `npm install gray-matter`
  - Extrac the frontmatter(metadata) and content(post) from the mdx file
- Install Tailwindcss/typography for styling mdx content
  `npm install -D @tailwindcss/typography`
