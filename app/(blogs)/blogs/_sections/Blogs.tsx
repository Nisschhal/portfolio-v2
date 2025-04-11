"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Card from "@/components/Card"

const blogPosts = [
  {
    id: 1,
    title: "Understanding React Server Components",
    excerpt:
      "A deep dive into RSC and why it's changing the way we build apps.",
    tags: ["React", "RSC"],
    category: "Frontend",
    image: "/images/rsc.jpg",
    date: "Apr 1, 2025",
    author: "Nischal Puri",
  },
  {
    id: 2,
    title: "Dockerizing a Node.js App the Right Way",
    excerpt:
      "Learn how to optimize and containerize your Node apps effectively.",
    tags: ["Docker", "Node.js"],
    category: "DevOps",
    image: "/images/docker.jpg",
    date: "Apr 5, 2025",
    author: "Nischal Puri",
  },
  {
    id: 3,
    title: "Next.js vs Remix: A Real-World Comparison",
    excerpt: "Comparing two modern React meta-frameworks head-to-head.",
    tags: ["Next.js", "Remix"],
    category: "Frontend",
    image: "/images/remix-vs-next.jpg",
    date: "Apr 9, 2025",
    author: "Nischal Puri",
  },
]

const categories = ["All", "Frontend", "Backend", "DevOps"]

export default function BlogGrid() {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="container py-16 lg:py-24 light:text-white">
      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <Input
          type="text"
          placeholder="Search through my learning logs, notes, and technical reflections..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2"
        />
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg border transition text-sm font-medium ${
                selectedCategory === cat
                  ? "bg-white text-black border-white"
                  : "bg-transparent border-white/20 text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="p-0 rounded-xs">
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover  "
            />
            <div className="p-2   ">
              <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
              <p className="text-white/70 mb-3 text-sm">{post.excerpt}</p>
              <div className="text-xs text-white/40 mb-2">
                <span>{post.date}</span> · <span>By {post.author}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} className="bg-white/10 text-white">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
