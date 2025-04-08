// // pages/api/get-content.ts (or app/api/get-content/route.ts for App Router)
// import { prisma } from "@/lib/prisma"
// import { NextResponse } from "next/server"

// export async function GET() {
//   try {
//     const post = await prisma.post.findMany()
//     return NextResponse.json({ content: post }, { status: 200 })
//   } catch (error) {
//     console.error("Error fetching content:", error)
//     return NextResponse.json(
//       { error: "Failed to fetch content" },
//       { status: 500 }
//     )
//   }
// }

// app/api/get-content/route.ts
import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 })
  }

  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(id) },
    })
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }
    return NextResponse.json({ post }, { status: 200 })
  } catch (error) {
    console.error("Error fetching post:", error)
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 })
  }
}
