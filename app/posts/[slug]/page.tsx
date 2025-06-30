'use server'
import { getPostBySlug } from '@/lib/post'
import { notFound } from 'next/navigation'
import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { ArrowLeftIcon } from 'lucide-react'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

interface ParamsProps {
  params: Promise<{ slug: string }>
}

const Post = async ({ params }: ParamsProps) => {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, publishedAt, author, description, image, category, tags } =
    metadata

  return (
    <section className='py-16 lg:py-24'>
      <div className='container'>
        <Link href='/posts' className='flex items-center space-x-2'>
          <ArrowLeftIcon className='size-5' />
          <span>Back to posts</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='text-muted-foreground mt-3 text-sm'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose dark:prose-invert mt-16'>
          <MDXRemote source={content} />
        </main>
      </div>
    </section>
  )
}

export default Post
