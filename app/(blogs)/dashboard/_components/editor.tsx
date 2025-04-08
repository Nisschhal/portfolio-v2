// components/TiptapEditor.tsx
"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import TaskItem from "@tiptap/extension-task-item"
import TaskList from "@tiptap/extension-task-list"
import Table from "@tiptap/extension-table"
import TableHeader from "@tiptap/extension-table-header"
import TableRow from "@tiptap/extension-table-row"
import TableCell from "@tiptap/extension-table-cell"
import Image from "@tiptap/extension-image"
import FontFamily from "@tiptap/extension-font-family"
import TextStyle from "@tiptap/extension-text-style"
import Text from "@tiptap/extension-text"
import Underline from "@tiptap/extension-underline"
import Highlight from "@tiptap/extension-highlight"
import { Color } from "@tiptap/extension-color"
import Link from "@tiptap/extension-link"
import TextAlign from "@tiptap/extension-text-align"
import { useEditorStore } from "@/app/store/use-editor-store"
import { useState, useCallback, useRef, useEffect } from "react"
import { FontSizeExtension } from "@/extensions/font-size"
import { LineHeightExtension } from "@/extensions/line-height"
import { Button } from "@/components/ui/button"
import Toolbar from "./toolbar"

const TiptapEditor = () => {
  const {
    setEditor,
    saveContent,
    getContent,
    viewMode,
    setViewMode,
    previewContent,
    setPreviewContent,
  } = useEditorStore()
  const [isDragging, setIsDragging] = useState(false)
  const [navLinks, setNavLinks] = useState<{ id: string; text: string }[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const editor = useEditor({
    onCreate({ editor }) {
      setEditor(editor)
      getContent(editor)
    },
    onUpdate({ editor }) {
      const json = editor.getJSON()
      json.content?.forEach((node, index) => {
        if (node.type === "heading")
          node.attrs = { ...node.attrs, id: `heading-${index}` }
      })
      const html = editor.getHTML()
      setPreviewContent(html)
      const headings = json.content?.filter((node) => node.type === "heading")
      setNavLinks(
        headings?.map((h, i) => ({
          id: `heading-${i}`,
          text: h.content?.[0]?.text || `Section ${i + 1}`,
        })) || []
      )
    },
    editorProps: {
      attributes: {
        class:
          "tiptap focus:outline-none bg-white border border-gray-300 rounded-md p-6 min-h-[600px] w-full prose max-w-none",
      },
    },
    extensions: [
      StarterKit,
      FontFamily,
      Text,
      TextStyle,
      TaskList,
      FontSizeExtension,
      LineHeightExtension,
      TaskItem.configure({ nested: true }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      Image.configure({ inline: true, allowBase64: true }),
      Underline,
      Highlight.configure({ multicolor: true }),
      Color,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: "<h1>My Blog Title</h1><p>Start writing your blog here...</p>",
  })

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      setIsDragging(false)
      const files = e.dataTransfer.files
      if (files && editor) {
        Array.from(files).forEach((file) => {
          if (file.type.startsWith("image/")) {
            const imageUrl = URL.createObjectURL(file)
            editor.chain().focus().setImage({ src: imageUrl }).run()
          }
        })
      }
    },
    [editor]
  )

  if (!editor) return null

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-4 gap-6">
      <div className="flex-1">
        <div className="mb-4 flex flex-wrap gap-2">
          <Toolbar />
          <div className="flex gap-2">
            <Button
              onClick={() => setViewMode("edit")}
              variant={viewMode === "edit" ? "default" : "outline"}
            >
              Edit
            </Button>
            <Button
              onClick={() => setViewMode("preview")}
              variant={viewMode === "preview" ? "default" : "outline"}
            >
              Preview
            </Button>
            <Button
              onClick={() => setViewMode("split")}
              variant={viewMode === "split" ? "default" : "outline"}
            >
              Split
            </Button>
            <Button
              onClick={() => saveContent(editor)}
              variant="default"
              className="bg-green-500 hover:bg-green-600"
            >
              Save
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          {(viewMode === "edit" || viewMode === "split") && (
            <div
              className={`flex-1 bg-gray-50 p-4 rounded-md ${
                isDragging ? "border-2 border-dashed border-blue-500" : ""
              }`}
              onDragOver={(e) => {
                e.preventDefault()
                setIsDragging(true)
              }}
              onDragLeave={(e) => {
                e.preventDefault()
                setIsDragging(false)
              }}
              onDrop={handleDrop}
            >
              <EditorContent editor={editor} />
            </div>
          )}
          {(viewMode === "preview" || viewMode === "split") && (
            <div className="flex-1 post-body bg-white p-6 rounded-md border border-gray-300">
              <div dangerouslySetInnerHTML={{ __html: previewContent }} />
            </div>
          )}
        </div>
      </div>
      {/* <nav className="w-full md:w-64 sticky top-4 self-start bg-gray-100 p-4 rounded-md">
        <h3 className="text-lg font-semibold mb-2">Navigation</h3>
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-blue-600 hover:underline"
                onClick={(e) => {
                  e.preventDefault()
                  document
                    .getElementById(link.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav> */}
    </div>
  )
}

export default TiptapEditor
