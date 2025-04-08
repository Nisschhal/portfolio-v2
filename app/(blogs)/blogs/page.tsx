"use client"

import { useEffect, useState } from "react"

interface Post {
  id: number
  title: string
  content: string
  authorId: number | null
  published: boolean
  createdAt?: string // Add if your schema includes this
}

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch("/api/get-content")
        if (response.ok) {
          const data = await response.json()
          console.log("Fetched posts:", data)
          setPosts(data.content || []) // Adjust based on your API response structure
        } else {
          console.error("Failed to fetch content:", await response.text())
        }
      } catch (error) {
        console.error("Error fetching content:", error)
      }
    }

    fetchContent()
  }, [])

  return (
    <div className="  top-20 bg-white p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Blog Posts</h1>
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts available</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post.id}>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <div
                className="prose post-body text-gray-800"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <hr className="my-4 border-gray-300" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BlogPage
