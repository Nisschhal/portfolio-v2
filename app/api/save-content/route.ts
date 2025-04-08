// app/api/save-content/route.ts
import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

// export async function POST(req: NextRequest) {
//   const { content, title } = await req.json()
//   console.log(content, title)
//   try {
//     const newPost = await prisma.post.create({
//       data: {
//         title: title || "Untitled",
//         content: content, // Store the raw HTML string directly
//       },
//     })
//     console.log("saved to db..", newPost)
//     return NextResponse.json(newPost, { status: 200 })
//   } catch (error) {
//     console.error("Error saving content:", error)
//     return NextResponse.json(
//       { error: "Failed to save content" },
//       { status: 500 }
//     )
//   }
// }

export async function POST(req: NextRequest) {
  const { content, title } = await req.json()
  console.log("Received:", content, title)
  try {
    const newPost = await prisma.$transaction(async (tx) => {
      const post = await tx.post.create({
        data: {
          title: title || "Untitled",
          content: content,
        },
      })
      return post
    })
    console.log("Saved to db:", newPost)
    return NextResponse.json(newPost, { status: 200 })
  } catch (error) {
    console.error("Error saving content:", error)
    return NextResponse.json(
      { error: "Failed to save content" },
      { status: 500 }
    )
  }
}
