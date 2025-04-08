// app/store/use-editor-store.ts
import { create } from "zustand"
import type { Editor } from "@tiptap/react"

interface EditorState {
  editor: Editor | null
  setEditor: (editor: Editor) => void
  saveContent: (editor: Editor) => Promise<void>
  getContent: (editor: Editor) => Promise<void>
  viewMode: "edit" | "preview" | "split" // Manage editor/preview views
  setViewMode: (mode: "edit" | "preview" | "split") => void
  previewContent: string // Store live preview HTML
  setPreviewContent: (content: string) => void
}

export const useEditorStore = create<EditorState>((set) => ({
  editor: null,
  setEditor: (editor) => set({ editor }),

  saveContent: async (editor) => {
    if (!editor) return
    const htmlContent = editor.getHTML()
    console.log("Saving content:", htmlContent)
    try {
      const response = await fetch("/api/save-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: htmlContent, title: "title" }), // Customize title as needed
      })
      if (response.ok) {
        const data = await response.json()
        console.log("Content saved successfully, newPost:", data)
      } else {
        console.error("Failed to save content:", await response.text())
      }
    } catch (error) {
      console.error("Error saving content:", error)
    }
  },

  getContent: async (editor) => {
    if (!editor) return
    try {
      const response = await fetch("/api/get-content")
      if (response.ok) {
        const data = await response.json()
        editor.commands.setContent(data.content)
        set({ previewContent: data.content }) // Update preview on load
        console.log("Content loaded:", data.content)
      } else {
        console.error("Failed to fetch content:", await response.text())
      }
    } catch (error) {
      console.error("Error fetching content:", error)
    }
  },

  viewMode: "split", // Default to side-by-side edit/preview
  setViewMode: (mode) => set({ viewMode: mode }),

  previewContent: "", // Initial preview content
  setPreviewContent: (content) => set({ previewContent: content }),
}))
