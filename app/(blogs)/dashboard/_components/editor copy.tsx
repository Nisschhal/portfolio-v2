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
      getContent(editor) // Load initial content
    },
    onUpdate({ editor }) {
      const json = editor.getJSON()
      json.content?.forEach((node, index) => {
        if (node.type === "heading") {
          node.attrs = { ...node.attrs, id: `heading-${index}` }
        }
      })
      const html = editor.getHTML()
      setPreviewContent(html) // Update live preview
      const headings = json.content?.filter((node) => node.type === "heading")
      const links = headings?.map((heading, index) => ({
        id: `heading-${index}`,
        text: heading.content?.[0]?.text || `Section ${index + 1}`,
      }))
      setNavLinks(links || [])
    },
    editorProps: {
      attributes: {
        style: "padding-left:56px; padding-right:56px;",
        class:
          "focus:outline-none print:border-0 bg-white border border-[#c7c7c7] rounded-sm flex flex-col min-h-[1054px] w-full pt-10 pr-14 pb-10 cursor-text",
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
        protocols: ["http", "https"],
      }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: "<h1>My Blog Title</h1><p>Start writing your blog here...</p>",
    immediatelyRender: false,
  })

  // Drag-and-drop for images
  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

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

  // Manual image upload
  const handleImageUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
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
    <div className="flex max-w-7xl mx-auto p-6 gap-6">
      {/* Main Content Area */}
      <div className="flex-1">
        {/* View Mode Controls */}
        <div className="mb-4 flex gap-2">
          <Button
            onClick={() => setViewMode("edit")}
            className={`px-4 py-2 ${
              viewMode === "edit" ? "bg-blue-600" : "bg-blue-500"
            } text-white rounded hover:bg-blue-600`}
          >
            Edit
          </Button>
          <Button
            onClick={() => setViewMode("preview")}
            className={`px-4 py-2 ${
              viewMode === "preview" ? "bg-blue-600" : "bg-blue-500"
            } text-white rounded hover:bg-blue-600`}
          >
            Preview
          </Button>
          <Button
            onClick={() => setViewMode("split")}
            className={`px-4 py-2 ${
              viewMode === "split" ? "bg-blue-600" : "bg-blue-500"
            } text-white rounded hover:bg-blue-600`}
          >
            Split
          </Button>
          <Button
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Images
          </Button>
          <input
            type="file"
            accept="image/*"
            multiple
            ref={fileInputRef}
            className="hidden"
            onChange={handleImageUpload}
          />
          <Button
            onClick={() => saveContent(editor)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Save
          </Button>
        </div>

        {/* Editor and Preview */}
        <div className="flex gap-6">
          {(viewMode === "edit" || viewMode === "split") && (
            <div
              className={`flex-1 overflow-x-auto bg-[#f9fbfd] px-4 print:p-0 print:bg-white print:overflow-visible ${
                isDragging ? "border-2 border-dashed border-blue-500" : ""
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <EditorContent editor={editor} className="prose max-w-none" />
            </div>
          )}
          {(viewMode === "preview" || viewMode === "split") && (
            <div className="flex-1 prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: previewContent }} />
            </div>
          )}
        </div>
      </div>

      {/* Right Navbar */}
      <nav className="w-64 sticky top-6 self-start bg-gray-100 p-4 rounded">
        <h3 className="text-lg font-semibold mb-2">Quick Navigation</h3>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id} className="mb-2">
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
      </nav>
    </div>
  )
}

export default TiptapEditor
