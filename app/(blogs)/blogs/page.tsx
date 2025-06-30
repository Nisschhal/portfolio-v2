import React from 'react'
import { PenSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { div } from 'motion/react-client'
import HeroSection from './_sections/HeroSection'
import BlogGrid from './_sections/Blogs'

const examplePosts = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    slug: 'getting-started-with-nextjs',
    excerpt:
      'Learn how to build high-performance React applications with Next.js',
    featuredImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    createdAt: new Date('2023-06-15'),
    author: {
      name: 'Admin User',
      image: null,
    },
    category: {
      name: 'Technology',
      slug: 'technology',
    },
  },
  {
    id: '2',
    title: 'Modern UI Design Principles',
    slug: 'modern-ui-design-principles',
    excerpt:
      'Explore the key principles behind effective and beautiful UI design',
    featuredImage: 'https://images.unsplash.com/photo-1559028012-481c04fa702d',
    createdAt: new Date('2023-06-10'),
    author: {
      name: 'Editor User',
      image: null,
    },
    category: {
      name: 'Design',
      slug: 'design',
    },
  },
  // Add more example posts here
]

// const Blogs = () => {
//   return (
//     <div className="container py-8">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold">All Blog Posts</h1>
//         <Button asChild>
//           <Link href="/blogs/create" className="flex items-center space-x-2">
//             <PenSquare className="w-4 h-4 mr-2" />
//             New Post
//           </Link>
//         </Button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {examplePosts.map((post) => (
//           <Link href={`/blogs/${post.slug}`} key={post.id} className="group">
//             <div className="border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md">
//               <div className="aspect-video w-full overflow-hidden bg-gray-100">
//                 {post.featuredImage ? (
//                   <img
//                     src={post.featuredImage}
//                     alt={post.title}
//                     className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
//                   />
//                 ) : (
//                   <div className="flex h-full items-center justify-center bg-secondary">
//                     <span className="text-secondary-foreground">No Image</span>
//                   </div>
//                 )}
//               </div>
//               <div className="p-4">
//                 {post.category && (
//                   <div className="mb-2">
//                     <span className="inline-block rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
//                       {post.category.name}
//                     </span>
//                   </div>
//                 )}
//                 <h2 className="line-clamp-2 text-xl font-semibold group-hover:text-primary transition-colors">
//                   {post.title}
//                 </h2>
//                 <p className="mt-2 line-clamp-3 text-muted-foreground">
//                   {post.excerpt}
//                 </p>
//                 <div className="mt-4 flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
//                       <span className="text-xs font-medium">
//                         {post.author.name.charAt(0)}
//                       </span>
//                     </div>
//                     <span className="text-sm">{post.author.name}</span>
//                   </div>
//                   <time className="text-xs text-muted-foreground">
//                     {new Date(post.createdAt).toLocaleDateString()}
//                   </time>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }

const Blogs = () => {
  // hero section
  // all posts and create post for admin with categories and search and filter for older/latest/viewd
  //

  return (
    <>
      <HeroSection />
      <BlogGrid />
    </>
  )
}
export default Blogs
