// app/blogs/[id]/page.tsx
"use client"

import { useEffect, useState, useRef, use } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

interface Post {
  id: number
  title: string
  content: string
  createdAt: string
}

interface NavLink {
  id: string
  text: string
}

export default function BlogPostPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>
}) {
  const params = use(paramsPromise) // Unwrap the params Promise
  const [post, setPost] = useState<Post | null>(null)
  const [navLinks, setNavLinks] = useState<NavLink[]>([])
  const router = useRouter()
  const contentRef = useRef<HTMLDivElement>(null) // Ref to the article element
  const [isScrolling, setIsScrolling] = useState(false) // Prevent multiple clicks

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/get-content?id=${params.id}`)
        if (response.ok) {
          const data = await response.json()
          const postData = data.post

          // Parse content and ensure headings have IDs
          const parser = new DOMParser()
          const doc = parser.parseFromString(postData.content, "text/html")
          const headings = Array.from(
            doc.querySelectorAll("h1, h2, h3, h4, h5, h6")
          )
          headings.forEach((h, i) => {
            h.id = `heading-${i}` // Forcefully set IDs
          })
          const updatedContent = doc.body.innerHTML
          setPost({ ...postData, content: updatedContent })

          // Generate navigation links
          setNavLinks(
            headings.map((h, i) => ({
              id: `heading-${i}`,
              text: h.textContent || `Section ${i + 1}`,
            }))
          )
        } else {
          console.error("Failed to fetch post:", await response.text())
          router.push("/blogs")
        }
      } catch (error) {
        console.error("Error fetching post:", error)
        router.push("/blogs")
      }
    }
    fetchPost()
  }, [params.id, router])

  const smoothScrollTo = (targetY: number, duration: number) => {
    const startY = window.scrollY
    const distance = targetY - startY
    let startTime: number | null = null

    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1) // Cap at 1
      const ease = progress * (2 - progress) // Ease-in-out effect

      window.scrollTo(0, startY + distance * ease)

      if (progress < 1) {
        requestAnimationFrame(animation)
      } else {
        setIsScrolling(false) // Scroll complete
      }
    }

    requestAnimationFrame(animation)
  }

  const handleNavClick = (id: string) => {
    if (isScrolling) return // Prevent multiple clicks during scroll

    setIsScrolling(true)
    const element = document.getElementById(id)
    if (element) {
      const rect = element.getBoundingClientRect()
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const targetY = scrollTop + rect.top - 80 // Adjust for header offset (pt-20 = 80px)

      console.log(`Scrolling to ${id} at position ${targetY}`)
      smoothScrollTo(targetY, 1000) // 1s duration
    } else {
      console.error(`Element with ID ${id} not found in DOM`)
      setIsScrolling(false)
    }
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <main className="flex-1 bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <header className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <p className="text-sm text-gray-500">
              Published on{" "}
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </header>
          <article
            ref={contentRef}
            className="post-body prose prose-lg max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <footer className="mt-8">
            <Button
              onClick={() => router.push("/blogs")}
              variant="outline"
              className="text-gray-700 border-gray-300 hover:bg-gray-100"
            >
              Back to Blogs
            </Button>
          </footer>
        </main>

        {/* Sidebar Navigation */}
        {/* {navLinks.length > 0 && (
          <aside className="lg:w-64 w-full">
            <nav className="sticky top-24 bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Navigation
              </h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavClick(link.id)}
                      disabled={isScrolling} // Disable button during scroll
                      className="w-full text-left text-blue-600 hover:text-blue-800 hover:underline text-sm transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {link.text}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )} */}
      </div>
    </div>
  )
}
