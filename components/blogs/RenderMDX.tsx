'use client'
import React from 'react'
import { MDXContent } from './Mdx-content'
import { Post } from '@/.velite'

const mdxComponents = {
  // Add any custom components here
}

const RenderMdx = ({ blog }: { blog: Post }) => {
  return (
    <div className='font-inter prose prose-blockquote:font-normal prose-blockquote:bg-accent/20 prose-blockquote:border-accent prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-li:marker:text-accent dark:prose-invert col-span-12 mx-auto w-full md:col-span-8 md:ml-auto'>
      <MDXContent code={blog.body} components={mdxComponents} />
    </div>
  )
}

export default RenderMdx
