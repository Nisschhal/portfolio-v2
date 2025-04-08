// "use client"
// import { cn } from "@/lib/utils"
// import { useEditorStore } from "@/app/store/use-editor-store"
// import { type Level } from "@tiptap/extension-heading"

// import {
//   AlignCenter,
//   AlignCenterIcon,
//   AlignJustifyIcon,
//   AlignLeftIcon,
//   AlignRight,
//   AlignRightIcon,
//   BoldIcon,
//   HighlighterIcon,
//   ImageIcon,
//   ItalicIcon,
//   Link2Icon,
//   List,
//   ListCollapseIcon,
//   ListIcon,
//   ListOrderedIcon,
//   ListTodoIcon,
//   LucideIcon,
//   MessageSquarePlusIcon,
//   MinusIcon,
//   PlusIcon,
//   PrinterIcon,
//   Redo2Icon,
//   RemoveFormattingIcon,
//   SearchIcon,
//   SpellCheck2Icon,
//   SpellCheckIcon,
//   UnderlineIcon,
//   Undo2Icon,
//   UploadIcon,
// } from "lucide-react"

// interface ToolBarButtonProps {
//   onClick?: () => void
//   isActive?: boolean
//   icon: LucideIcon
// }

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { ChevronDownIcon } from "lucide-react"
// // import { SelectSeparator } from "@/components/ui/select"
// import { Separator } from "@/components/ui/separator"
// import { useEffect, useState } from "react"
// import { CirclePicker, ColorResult, SketchPicker } from "react-color"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog"
// import { parse } from "path"
// // import { set } from "date-fns"

// const ListButton = () => {
//   const { editor } = useEditorStore()
//   const lists = [
//     {
//       name: "Bullet List",
//       icon: ListIcon,
//       isActive: editor?.isActive("bulletList"),
//       onClick: () => editor?.chain().focus().toggleBulletList().run(),
//     },
//     {
//       name: "Ordered List",
//       icon: ListOrderedIcon,
//       isActive: editor?.isActive("orderedList"),
//       onClick: () => editor?.chain().focus().toggleOrderedList().run(),
//     },
//   ]

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <button className="flex flex-col gap-x-2 p-2 rounded-sm hover:bg-neutral-200/80">
//           <ListIcon className="size-4" />
//         </button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="flex gap-2 flex-col">
//         {lists.map(({ name, icon: Icon, isActive, onClick }) => (
//           <DropdownMenuItem
//             key={name}
//             onClick={onClick}
//             className={cn(
//               "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
//               isActive && "bg-neutral-200/80"
//             )}
//           >
//             <Icon className="size-4" />
//             <span className="text-sm">{name}</span>
//           </DropdownMenuItem>
//         ))}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }

// // Color
// const TextColorButton = () => {
//   const { editor } = useEditorStore()
//   const [currentColor, setCurrentColor] = useState("#000")

//   const value = editor?.getAttributes("textStyle").color || "#000"

//   const onChange = (color: ColorResult) => {
//     setCurrentColor(color.hex)
//     editor?.chain().focus().setColor(color.hex).run()
//   }

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <button className="flex flex-col gap-x-2 p-2 rounded-sm hover:bg-neutral-200/80">
//           <span className="text-sm">A</span>
//           <span
//             className="h-0.5 w-4 "
//             style={{ backgroundColor: currentColor }}
//           ></span>
//         </button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent>
//         <DropdownMenuItem>
//           <SketchPicker color={currentColor} onChange={onChange} />
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }

// // HighLight Color
// const HightLightColorButton = () => {
//   const { editor } = useEditorStore()
//   const [currentColor, setCurrentColor] = useState("#fff")

//   const value = editor?.getAttributes("hightlight").color || currentColor

//   const onChange = (color: ColorResult) => {
//     setCurrentColor(color.hex)
//     editor?.chain().focus().setHighlight({ color: currentColor }).run()
//   }

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <button className="flex flex-col gap-x-2 p-2 rounded-sm hover:bg-neutral-200/80">
//           <HighlighterIcon className="size-4" />
//         </button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent>
//         <DropdownMenuItem>
//           <SketchPicker color={currentColor} onChange={onChange} />
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }
// // Align Button
// const AlignButton = () => {
//   const { editor } = useEditorStore()

//   const alignments = [
//     { label: "Align Left", value: "left", icon: AlignLeftIcon },
//     { label: "Align Center", value: "center", icon: AlignCenterIcon },
//     { label: "Align Right", value: "right", icon: AlignRightIcon },
//     { label: "Align Justify", value: "justify", icon: AlignJustifyIcon },
//   ]

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <button className="flex flex-col gap-x-2 p-2 rounded-sm hover:bg-neutral-200/80">
//           <AlignCenterIcon className="size-4" />
//         </button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="flex gap-2 flex-col">
//         {alignments.map(({ label, value, icon: Icon }) => (
//           <DropdownMenuItem
//             key={value}
//             onClick={() => editor?.chain().focus().setTextAlign(value).run()}
//             className={cn(
//               "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neurtal-200/80",
//               editor?.isActive({ textAlign: value }) && "bg-neutral-200/80"
//             )}
//           >
//             <Icon className="size-4" />
//             <span className="text-sm">{label}</span>
//           </DropdownMenuItem>
//         ))}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }
// // Line Height Button
// const LineHeightButton = () => {
//   const { editor } = useEditorStore()

//   const alignments = [
//     { label: "Default", value: "normal" },
//     { label: "Single", value: "1" },
//     { label: "1.15", value: "1.15" },
//     { label: "1.5", value: "1.5" },
//     { label: "Double", value: "2" },
//   ]

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <button className="flex flex-col gap-y-1 p-2 rounded-sm hover:bg-neutral-200/80">
//           <ListCollapseIcon className="size-4" />
//         </button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="flex gap-1 flex-col">
//         {alignments.map(({ label, value }) => (
//           <DropdownMenuItem
//             key={value}
//             onClick={() => editor?.chain().focus().setLineHeight(value).run()}
//             className={cn(
//               "flex gap-y-1  px-2 py-1 rounded-sm hover:bg-neurtal-200/80",
//               editor?.getAttributes("paragraph").lineHeight === value &&
//                 "bg-neutral-200/80"
//             )}
//           >
//             <span className="text-sm">{label}</span>
//           </DropdownMenuItem>
//         ))}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }

// // Link URL
// const InsertLinkButton = () => {
//   const { editor } = useEditorStore()
//   const [href, setHref] = useState(editor?.getAttributes("link").href || "")

//   const onChange = (value: string) => {
//     editor?.chain().extendMarkRange("link").setLink({ href }).run()
//     setHref("")
//   }

//   return (
//     <DropdownMenu
//       //  get the selected link href
//       onOpenChange={(open) => {
//         if (open) {
//           setHref(editor?.getAttributes("link").href || "")
//         }
//       }}
//     >
//       <DropdownMenuTrigger asChild>
//         <button className="flex flex-col gap-x-2 p-2 rounded-sm hover:bg-neutral-200/80">
//           <Link2Icon className="size-4" />
//         </button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="flex gap-2">
//         <Input
//           value={href}
//           onChange={(e) => {
//             setHref(e.target.value)
//           }}
//           placeholder="https://www.google.com"
//         />
//         <Button onClick={(e) => onChange(href)}>Apply</Button>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }

// // Image URL
// const ImageLinkButton = () => {
//   const { editor } = useEditorStore()
//   const [isDialogOpen, setIsDialogOpen] = useState(false)
//   const [imageUrl, setImageUrl] = useState("")

//   // function to set the image into the editor
//   const onChange = (src: string) => {
//     editor?.chain().setImage({ src }).run()
//   }

//   const onUpload = () => {
//     const input = document.createElement("input")
//     input.type = "file"
//     input.accept = "image/*"

//     input.onchange = (e) => {
//       const file = (e.target as HTMLInputElement).files?.[0] // get the target.file

//       // if there is a file
//       if (file) {
//         // get the image url from the file
//         const imageUrl = URL.createObjectURL(file)
//         // set the image url in editor
//         onChange(imageUrl)
//       }
//     }
//     // trigger the input
//     input.click()
//   }

//   const handleImageUrlSubmit = () => {
//     if (imageUrl) {
//       onChange(imageUrl)
//       setImageUrl("")
//       setIsDialogOpen(false)
//     }
//   }

//   return (
//     <>
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <button className="flex flex-col gap-x-2 p-2 rounded-sm hover:bg-neutral-200/80">
//             <ImageIcon className="size-4" />
//           </button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="flex flex-col gap-2">
//           <DropdownMenuItem onClick={onUpload}>
//             <UploadIcon className="size-4" />
//             Upload
//           </DropdownMenuItem>
//           <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>
//             <SearchIcon className="size-4" />
//             Paste image Url
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>

//       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//         <DialogContent className="sm:max-w-[425px]">
//           <DialogHeader>
//             <DialogTitle>Insert Image URL</DialogTitle>
//           </DialogHeader>
//           <div className="py-4">
//             <Input
//               value={imageUrl}
//               onChange={(e) => setImageUrl(e.target.value)}
//               placeholder="Insert image URL (e.g., https://example.com/image.jpg)"
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   handleImageUrlSubmit()
//                 }
//               }}
//             />
//           </div>
//           <DialogFooter>
//             <Button onClick={handleImageUrlSubmit}>Insert</Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </>
//   )
// }

// // Font Family button

// const FontFamilyButton = () => {
//   const { editor } = useEditorStore()
//   const [currentFont, setCurrentFont] = useState("Arial")

//   // list of available fonts
//   const fonts = [
//     { label: "Arial", value: "Arial" },
//     { label: "Times New Roman", value: "Times New Roman" },
//     { label: "Courier New", value: "Courier New" },
//     { label: "Georgia", value: "Georgia" },
//     { label: "Verdana", value: "Verdana" }, // typo fix
//   ]

//   // look out for any changes in editor settings
//   useEffect(() => {
//     if (!editor) return

//     const updateFontFamily = () => {
//       const font = editor.getAttributes("textStyle")?.fontFamily || "Arial"
//       setCurrentFont(font)
//     }

//     // Run once to initialize
//     updateFontFamily()

//     // Listen for editor changes
//     editor.on("transaction", updateFontFamily)

//     return () => {
//       editor.off("transaction", updateFontFamily)
//     }
//   }, [editor])

//   return (
//     <div className="p-2">
//       {" "}
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <button className="h-7 w-[120px] shrink-0 flex items-center justify-between rounded-sm hover:bg-neutral-200">
//             <span className="truncate" style={{ fontFamily: currentFont }}>
//               {currentFont}
//             </span>
//             <ChevronDownIcon className="ml-2 size-4 shrink-0" />
//           </button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
//           {fonts.map(({ label, value }) => (
//             <button
//               onClick={() => {
//                 editor?.chain().focus().setFontFamily(value).run()
//                 setCurrentFont(value) // Optional: optimistically update faster
//               }}
//               key={value}
//               className={cn(
//                 "flex items-center gap-x-2 px-2 py-2 rounded-sm hover:bg-neutral-200/80",
//                 currentFont === value && "bg-neutral-200/80"
//               )}
//               style={{ fontFamily: value }}
//             >
//               <span className="text-sm">{label}</span>
//             </button>
//           ))}
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   )
// }

// const FontSizeButton = () => {
//   const { editor } = useEditorStore()

//   const [currentFontSize, setCurrentFontSize] = useState(
//     editor?.getAttributes("textStyle")?.fontSize?.replace("px", "") || "16" // Fixed initial value logic
//   )
//   const [fontSize, setFontSize] = useState(currentFontSize)
//   const [inputValue, setInputValue] = useState(fontSize)
//   const [isEditing, setIsEditing] = useState(false)

//   // Update font size
//   const updateFontSize = (newSize: string) => {
//     const size = parseInt(newSize)
//     if (!isNaN(size)) {
//       editor?.chain().focus().setFontSize(`${size}px`).run()
//       setFontSize(newSize)
//       setCurrentFontSize(newSize) // Sync currentFontSize
//       setInputValue(newSize)
//       setIsEditing(false)
//     }
//   }

//   // Handle input change (fixed typo)
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(e.target.value)
//   }

//   // Handle input blur
//   const handleInputBlur = () => {
//     updateFontSize(inputValue)
//   }

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       e.preventDefault()
//       updateFontSize(inputValue)
//       editor?.commands.focus()
//     }
//   }

//   const increment = () => {
//     const newSize = parseInt(fontSize) + 1 // Use fontSize instead of currentFontSize
//     updateFontSize(newSize.toString())
//   }

//   const decrement = () => {
//     const newSize = parseInt(fontSize) - 1 // Use fontSize instead of currentFontSize
//     updateFontSize(newSize.toString())
//   }

//   const fontSizes = [
//     { label: "12px", value: "12px" },
//     { label: "14px", value: "14px" },
//     { label: "16px", value: "16px" },
//     { label: "18px", value: "18px" },
//     { label: "24px", value: "24px" },
//     { label: "32px", value: "32px" },
//   ]

//   // Sync with editor state
//   useEffect(() => {
//     if (!editor) return

//     const updateFontSizeFromEditor = () => {
//       const size =
//         editor.getAttributes("textStyle")?.fontSize?.replace("px", "") || "16"
//       setCurrentFontSize(size)
//       setFontSize(size)
//       setInputValue(size)
//     }

//     updateFontSizeFromEditor() // Initialize
//     editor.on("transaction", updateFontSizeFromEditor)

//     return () => {
//       editor.off("transaction", updateFontSizeFromEditor)
//     }
//   }, [editor])

//   return (
//     <div className="flex  items-center gap-x-1">
//       <button
//         onClick={decrement}
//         className="size-7  flex justify-center items-center rounded-sm hover:bg-neutral-200/80"
//       >
//         <MinusIcon className="h-4 w-4" />
//       </button>
//       {isEditing ? (
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange} // Fixed typo
//           onBlur={handleInputBlur}
//           onKeyDown={handleKeyDown}
//           className="h-7 w-10 text-sm text-center border border-neutral-400 rounded-sm bg-transparent focus:outline-none focus:ring-0"
//         />
//       ) : (
//         <button
//           onClick={() => {
//             setIsEditing(true)
//             setFontSize(currentFontSize)
//           }}
//           className="h-7 w-10 text-sm text-center border border-neutral-400 rounded-sm hover:bg-neutral-200/80"
//         >
//           {fontSize} {/* Display fontSize instead of currentFontSize */}
//         </button>
//       )}
//       <button className="size-7  flex justify-center items-center rounded-sm hover:bg-neutral-200/80">
//         <PlusIcon className="h-4 w-4" onClick={increment} />
//       </button>
//     </div>
//   )
// }
// const HeadingsButton = () => {
//   const { editor } = useEditorStore()
//   const [currentHeading, setCurrentHeading] = useState("Normal Text")

//   const headings = [
//     { label: "Normal Text", value: 0, fontSize: "16px" },
//     { label: "Heading 1", value: 1, fontSize: "32px" },
//     { label: "Heading 2", value: 2, fontSize: "24px" },
//     { label: "Heading 3", value: 3, fontSize: "20px" },
//     { label: "Heading 4", value: 4, fontSize: "18px" },
//     { label: "Heading 5", value: 5, fontSize: "16px" },
//   ]

//   // Effect to track active heading level
//   useEffect(() => {
//     if (!editor) return

//     const updateHeading = () => {
//       for (let i = 1; i <= 5; i++) {
//         if (editor.isActive("heading", { level: i })) {
//           setCurrentHeading(`Heading ${i}`)
//           return
//         }
//       }
//       setCurrentHeading("Normal Text")
//     }

//     updateHeading()
//     editor.on("transaction", updateHeading)

//     return () => {
//       editor.off("transaction", updateHeading)
//     }
//   }, [editor])

//   return (
//     <div className="p-2">
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <button className="h-7 w-[140px] flex items-center justify-between rounded-sm hover:bg-neutral-200">
//             <span className="truncate">{currentHeading}</span>
//             <ChevronDownIcon className="ml-2 size-4 shrink-0" />
//           </button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
//           {headings.map(({ label, value, fontSize }) => (
//             <button
//               key={value}
//               onClick={() => {
//                 if (value === 0) {
//                   editor?.chain().focus().setParagraph().run()
//                 } else {
//                   editor
//                     ?.chain()
//                     .focus()
//                     .toggleHeading({ level: value as Level })
//                     .run()
//                 }
//               }}
//               className={cn(
//                 "flex items-center gap-x-2 px-2 py-2 rounded-sm hover:bg-neutral-200/80",
//                 (value === 0 && !editor?.isActive("heading")) ||
//                   (editor?.isActive("heading", { level: value }) &&
//                     "bg-neutral-200/80")
//               )}
//             >
//               <span className="text-sm" style={{ fontSize }}>
//                 {label}
//               </span>
//             </button>
//           ))}
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   )
// }

// const ToolbarButton = ({
//   onClick,
//   isActive,
//   icon: Icon,
// }: ToolBarButtonProps) => {
//   return (
//     <button
//       onClick={onClick}
//       className={cn(
//         "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
//         isActive && "bg-neutral-200/80"
//       )}
//     >
//       <Icon className="size-4" />
//     </button>
//   )
// }

// const Toolbar = () => {
//   //
//   const { editor } = useEditorStore()
//   console.log("Tool bar editro ", editor)

//   // Tools Section
//   // Matrix of tools: 2D array
//   const sections: {
//     label: string
//     icon: LucideIcon
//     onClick: () => void
//     isActive?: boolean
//   }[][] = [
//     [
//       {
//         label: "Undo",
//         icon: Undo2Icon,
//         onClick: () => editor?.chain().focus().undo().run(),
//       },
//       {
//         label: "Redo",
//         icon: Redo2Icon,
//         onClick: () => editor?.chain().focus().redo().run(),
//       },
//       {
//         label: "Print",
//         icon: PrinterIcon,
//         onClick: () => window.print(),
//       },
//       {
//         label: "Spell Check",
//         icon: SpellCheckIcon,
//         onClick: () => {
//           // get spellcheck attribute
//           const current = editor?.view.dom.getAttribute("spellcheck")
//           // check and set attribute to true
//           editor?.view.dom.setAttribute(
//             "spellcheck",
//             current === "false" ? "true" : "false"
//           )
//         },
//       },
//     ],
//     [
//       {
//         label: "Bold",
//         icon: BoldIcon,
//         onClick: () => editor?.chain().focus().toggleBold().run(),
//       },
//       {
//         label: "Italic",
//         icon: ItalicIcon,
//         onClick: () => editor?.chain().focus().toggleItalic().run(),
//       },
//       {
//         label: "Underline",
//         icon: UnderlineIcon,
//         onClick: () => editor?.chain().focus().toggleUnderline().run(),
//       },
//     ],
//     [
//       {
//         label: "Comment",
//         icon: MessageSquarePlusIcon,
//         onClick: () => console.log("Todo: Comment"),
//       },
//       {
//         label: "List Todo",
//         icon: ListTodoIcon,
//         onClick: () => editor?.chain().focus().toggleTaskList().run(),
//       },
//       {
//         label: "Remove Formatting",
//         icon: RemoveFormattingIcon,
//         onClick: () => editor?.chain().focus().unsetAllMarks().run(),
//       },
//     ],
//   ]

//   return (
//     // Scroll on mobile
//     <div className="bg-[#f1f4f9] px-2.5 py-0.5 rounded-3xl min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto ">
//       {sections[0].map((item) => (
//         <ToolbarButton
//           key={item.label}
//           onClick={item.onClick}
//           isActive={item.isActive}
//           icon={item.icon}
//         />
//       ))}
//       <Separator orientation="vertical" className="h-6! w-1 bg-black border" />
//       {/* Font Family */}
//       <FontFamilyButton />
//       <Separator orientation="vertical" className="h-6! w-1 bg-black border" />

//       {/* TODO: Headings */}
//       <HeadingsButton />
//       <Separator orientation="vertical" className="h-6! w-1 bg-black border" />
//       {/* Font size */}
//       <FontSizeButton />
//       <Separator orientation="vertical" className="h-6! w-1 bg-black border" />

//       {sections[1].map((item) => (
//         <ToolbarButton
//           key={item.label}
//           onClick={item.onClick}
//           isActive={item.isActive}
//           icon={item.icon}
//         />
//       ))}
//       <Separator orientation="vertical" className="h-6! w-1 bg-black border" />

//       {/* TODO: Text color */}
//       <TextColorButton />
//       <HightLightColorButton />
//       <InsertLinkButton />

//       {/* TODO: Image */}
//       <ImageLinkButton />
//       {/* TODO: Text Alignment */}
//       <AlignButton />
//       {/* TODO: Line Height */}
//       <LineHeightButton />
//       {/* TODO: list */}
//       <ListButton />

//       {/* Comment | Todo List | UnFormat Style */}
//       {sections[2].map((item) => (
//         <ToolbarButton
//           key={item.label}
//           onClick={item.onClick}
//           isActive={item.isActive}
//           icon={item.icon}
//         />
//       ))}
//     </div>
//   )
// }

// export default Toolbar

;("use client")
import { cn } from "@/lib/utils"
import { useEditorStore } from "@/app/store/use-editor-store"
import { type Level } from "@tiptap/extension-heading"
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  HighlighterIcon,
  ImageIcon,
  ItalicIcon,
  Link2Icon,
  ListIcon,
  ListCollapseIcon,
  ListOrderedIcon,
  ListTodoIcon,
  LucideIcon,
  MenuIcon,
  MessageSquarePlusIcon,
  MinusIcon,
  PlusIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  SearchIcon,
  SpellCheckIcon,
  UnderlineIcon,
  Undo2Icon,
  UploadIcon,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useEffect, useState } from "react"
import { ColorResult, SketchPicker } from "react-color"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { u } from "motion/react-client"

interface ToolBarButtonProps {
  onClick?: () => void
  isActive?: boolean
  icon: LucideIcon
}
const ListButton = () => {
  const { editor } = useEditorStore()
  const lists = [
    {
      name: "Bullet List",
      icon: ListIcon,
      isActive: editor?.isActive("bulletList"),
      onClick: () => editor?.chain().focus().toggleBulletList().run(),
    },
    {
      name: "Ordered List",
      icon: ListOrderedIcon,
      isActive: editor?.isActive("orderedList"),
      onClick: () => editor?.chain().focus().toggleOrderedList().run(),
    },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex flex-col gap-x-2 p-2 rounded-sm hover:bg-neutral-200/80">
          <ListIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex gap-2 flex-col">
        {lists.map(({ name, icon: Icon, isActive, onClick }) => (
          <DropdownMenuItem
            key={name}
            onClick={onClick}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
              isActive && "bg-neutral-200/80"
            )}
          >
            <Icon className="size-4" />
            <span className="text-sm">{name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const TextColorButton = () => {
  const { editor } = useEditorStore()
  const [currentColor, setCurrentColor] = useState("#000")

  const value = editor?.getAttributes("textStyle").color || "#000"

  const onChange = (color: ColorResult) => {
    setCurrentColor(color.hex)
    editor?.chain().focus().setColor(color.hex).run()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex flex-col gap-x-2 p-2 rounded-sm hover:bg-neutral-200/80">
          <span className="text-sm">A</span>
          <span
            className="h-0.5 w-4"
            style={{ backgroundColor: currentColor }}
          ></span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <SketchPicker color={currentColor} onChange={onChange} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const HightLightColorButton = () => {
  const { editor } = useEditorStore()
  const [currentColor, setCurrentColor] = useState("#fff")

  const value = editor?.getAttributes("highlight").color || currentColor

  const onChange = (color: ColorResult) => {
    setCurrentColor(color.hex)
    editor?.chain().focus().setHighlight({ color: currentColor }).run()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex flex-col gap-x-2 p-2 rounded-sm hover:bg-neutral-200/80">
          <HighlighterIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <SketchPicker color={currentColor} onChange={onChange} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const AlignButton = () => {
  const { editor } = useEditorStore()

  const alignments = [
    { label: "Align Left", value: "left", icon: AlignLeftIcon },
    { label: "Align Center", value: "center", icon: AlignCenterIcon },
    { label: "Align Right", value: "right", icon: AlignRightIcon },
    { label: "Align Justify", value: "justify", icon: AlignJustifyIcon },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex flex-col gap-x-2 p-2 rounded-sm hover:bg-neutral-200/80">
          <AlignCenterIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex gap-2 flex-col">
        {alignments.map(({ label, value, icon: Icon }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => editor?.chain().focus().setTextAlign(value).run()}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
              editor?.isActive({ textAlign: value }) && "bg-neutral-200/80"
            )}
          >
            <Icon className="size-4" />
            <span className="text-sm">{label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const LineHeightButton = () => {
  const { editor } = useEditorStore()

  const alignments = [
    { label: "Default", value: "normal" },
    { label: "Single", value: "1" },
    { label: "1.15", value: "1.15" },
    { label: "1.5", value: "1.5" },
    { label: "Double", value: "2" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex flex-col gap-y-1 p-2 rounded-sm hover:bg-neutral-200/80">
          <ListCollapseIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex gap-1 flex-col">
        {alignments.map(({ label, value }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => editor?.chain().focus().setLineHeight(value).run()}
            className={cn(
              "flex gap-y-1 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
              editor?.getAttributes("paragraph").lineHeight === value &&
                "bg-neutral-200/80"
            )}
          >
            <span className="text-sm">{label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const InsertLinkButton = () => {
  const { editor } = useEditorStore()
  const [href, setHref] = useState(editor?.getAttributes("link").href || "")

  const onChange = (value: string) => {
    editor?.chain().extendMarkRange("link").setLink({ href }).run()
    setHref("")
  }

  return (
    <DropdownMenu
      onOpenChange={(open) => {
        if (open) {
          setHref(editor?.getAttributes("link").href || "")
        }
      }}
    >
      <DropdownMenuTrigger asChild>
        <button className="flex flex-col gap-x-2 p-2 rounded-sm hover:bg-neutral-200/80">
          <Link2Icon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex gap-2">
        <Input
          value={href}
          onChange={(e) => setHref(e.target.value)}
          placeholder="https://www.google.com"
        />
        <Button onClick={() => onChange(href)}>Apply</Button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const ImageLinkButton = () => {
  const { editor } = useEditorStore()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [imageUrl, setImageUrl] = useState("")

  const onChange = (src: string) => {
    editor?.chain().setImage({ src }).run()
  }

  const onUpload = () => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = "image/*"
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        const imageUrl = URL.createObjectURL(file)
        onChange(imageUrl)
      }
    }
    input.click()
  }

  const handleImageUrlSubmit = () => {
    if (imageUrl) {
      onChange(imageUrl)
      setImageUrl("")
      setIsDialogOpen(false)
    }
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex flex-col gap-x-2 p-2 rounded-sm hover:bg-neutral-200/80">
            <ImageIcon className="size-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col gap-2">
          <DropdownMenuItem onClick={onUpload}>
            <UploadIcon className="size-4" />
            Upload
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>
            <SearchIcon className="size-4" />
            Paste image Url
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Insert Image URL</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Insert image URL (e.g., https://example.com/image.jpg)"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleImageUrlSubmit()
              }}
            />
          </div>
          <DialogFooter>
            <Button onClick={handleImageUrlSubmit}>Insert</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

const FontFamilyButton = () => {
  const { editor } = useEditorStore()
  const [currentFont, setCurrentFont] = useState("Arial")

  const fonts = [
    { label: "Arial", value: "Arial" },
    { label: "Times New Roman", value: "Times New Roman" },
    { label: "Courier New", value: "Courier New" },
    { label: "Georgia", value: "Georgia" },
    { label: "Verdana", value: "Verdana" },
  ]

  useEffect(() => {
    if (!editor) return
    const updateFontFamily = () => {
      const font = editor.getAttributes("textStyle")?.fontFamily || "Arial"
      setCurrentFont(font)
    }
    updateFontFamily()
    editor.on("transaction", updateFontFamily)
    return () => {
      editor.off("transaction", updateFontFamily)
      return undefined
    }
  }, [editor])

  return (
    <div className="p-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="h-7 w-[120px] shrink-0 flex items-center justify-between rounded-sm hover:bg-neutral-200">
            <span className="truncate" style={{ fontFamily: currentFont }}>
              {currentFont}
            </span>
            <ChevronDownIcon className="ml-2 size-4 shrink-0" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
          {fonts.map(({ label, value }) => (
            <button
              onClick={() => {
                editor?.chain().focus().setFontFamily(value).run()
                setCurrentFont(value)
              }}
              key={value}
              className={cn(
                "flex items-center gap-x-2 px-2 py-2 rounded-sm hover:bg-neutral-200/80",
                currentFont === value && "bg-neutral-200/80"
              )}
              style={{ fontFamily: value }}
            >
              <span className="text-sm">{label}</span>
            </button>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

const FontSizeButton = () => {
  const { editor } = useEditorStore()
  const [currentFontSize, setCurrentFontSize] = useState(
    editor?.getAttributes("textStyle")?.fontSize?.replace("px", "") || "16"
  )
  const [fontSize, setFontSize] = useState(currentFontSize)
  const [inputValue, setInputValue] = useState(fontSize)
  const [isEditing, setIsEditing] = useState(false)

  const updateFontSize = (newSize: string) => {
    const size = parseInt(newSize)
    if (!isNaN(size)) {
      editor?.chain().focus().setFontSize(`${size}px`).run()
      setFontSize(newSize)
      setCurrentFontSize(newSize)
      setInputValue(newSize)
      setIsEditing(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value)

  const handleInputBlur = () => updateFontSize(inputValue)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      updateFontSize(inputValue)
      editor?.commands.focus()
    }
  }

  const increment = () => updateFontSize((parseInt(fontSize) + 1).toString())
  const decrement = () => updateFontSize((parseInt(fontSize) - 1).toString())

  useEffect(() => {
    if (!editor) return
    const updateFontSizeFromEditor = () => {
      const size =
        editor.getAttributes("textStyle")?.fontSize?.replace("px", "") || "16"
      setCurrentFontSize(size)
      setFontSize(size)
      setInputValue(size)
    }
    updateFontSizeFromEditor()
    editor.on("transaction", updateFontSizeFromEditor)
    return () => {
      editor.off("transaction", updateFontSizeFromEditor)
      return undefined
    }
  }, [editor])

  return (
    <div className="flex items-center gap-x-1">
      <button
        onClick={decrement}
        className="size-7 flex justify-center items-center rounded-sm hover:bg-neutral-200/80"
      >
        <MinusIcon className="h-4 w-4" />
      </button>
      {isEditing ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          className="h-7 w-10 text-sm text-center border border-neutral-400 rounded-sm bg-transparent focus:outline-none focus:ring-0"
        />
      ) : (
        <button
          onClick={() => {
            setIsEditing(true)
            setFontSize(currentFontSize)
          }}
          className="h-7 w-10 text-sm text-center border border-neutral-400 rounded-sm hover:bg-neutral-200/80"
        >
          {fontSize}
        </button>
      )}
      <button
        onClick={increment}
        className="size-7 flex justify-center items-center rounded-sm hover:bg-neutral-200/80"
      >
        <PlusIcon className="h-4 w-4" />
      </button>
    </div>
  )
}

const HeadingsButton = () => {
  const { editor } = useEditorStore()
  const [currentHeading, setCurrentHeading] = useState("Normal Text")

  const headings = [
    { label: "Normal Text", value: 0, fontSize: "16px" },
    { label: "Heading 1", value: 1, fontSize: "32px" },
    { label: "Heading 2", value: 2, fontSize: "24px" },
    { label: "Heading 3", value: 3, fontSize: "20px" },
    { label: "Heading 4", value: 4, fontSize: "18px" },
    { label: "Heading 5", value: 5, fontSize: "16px" },
  ]

  useEffect(() => {
    if (!editor) return
    const updateHeading = () => {
      for (let i = 1; i <= 5; i++) {
        if (editor.isActive("heading", { level: i })) {
          setCurrentHeading(`Heading ${i}`)
          return
        }
      }
      setCurrentHeading("Normal Text")
    }
    updateHeading()
    editor.on("transaction", updateHeading)
    return () => {
      editor.off("transaction", updateHeading)
      return undefined
    }
  }, [editor])

  return (
    <div className="p-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="h-7 w-[140px] flex items-center justify-between rounded-sm hover:bg-neutral-200">
            <span className="truncate">{currentHeading}</span>
            <ChevronDownIcon className="ml-2 size-4 shrink-0" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
          {headings.map(({ label, value, fontSize }) => (
            <button
              key={value}
              onClick={() => {
                if (value === 0) {
                  editor?.chain().focus().setParagraph().run()
                } else {
                  editor
                    ?.chain()
                    .focus()
                    .toggleHeading({ level: value as Level })
                    .run()
                }
              }}
              className={cn(
                "flex items-center gap-x-2 px-2 py-2 rounded-sm hover:bg-neutral-200/80",
                (value === 0 && !editor?.isActive("heading")) ||
                  (editor?.isActive("heading", { level: value }) &&
                    "bg-neutral-200/80")
              )}
            >
              <span className="text-sm" style={{ fontSize }}>
                {label}
              </span>
            </button>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

const ToolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: ToolBarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80"
      )}
    >
      <Icon className="size-4" />
    </button>
  )
}

const Toolbar = () => {
  const { editor } = useEditorStore()
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024) // Tailwind's 'lg' breakpoint
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const sections: {
    label: string
    icon: LucideIcon
    onClick: () => void
    isActive?: boolean
  }[][] = [
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "Redo",
        icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: "Print",
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
      {
        label: "Spell Check",
        icon: SpellCheckIcon,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck")
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "false" ? "true" : "false"
          )
        },
      },
    ],
    [
      {
        label: "Bold",
        icon: BoldIcon,
        onClick: () => editor?.chain().focus().toggleBold().run(),
        isActive: editor?.isActive("bold"),
      },
      {
        label: "Italic",
        icon: ItalicIcon,
        onClick: () => editor?.chain().focus().toggleItalic().run(),
        isActive: editor?.isActive("italic"),
      },
      {
        label: "Underline",
        icon: UnderlineIcon,
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
        isActive: editor?.isActive("underline"),
      },
    ],
    [
      {
        label: "Comment",
        icon: MessageSquarePlusIcon,
        onClick: () => console.log("Todo: Comment"),
      },
      {
        label: "List Todo",
        icon: ListTodoIcon,
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
        isActive: editor?.isActive("taskList"),
      },
      {
        label: "Remove Formatting",
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
      },
    ],
  ]

  return (
    <div className="bg-[#f1f4f9] px-2.5 py-0.5 rounded-3xl min-h-[40px] flex items-center gap-x-1">
      {isMobileOrTablet ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 rounded-sm hover:bg-neutral-200/80">
              <MenuIcon className="size-6" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 flex flex-col gap-2">
            {sections.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                {section.map((item) => (
                  <DropdownMenuItem
                    key={item.label}
                    onClick={item.onClick}
                    className={cn(
                      "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                      item.isActive && "bg-neutral-200/80"
                    )}
                  >
                    <item.icon className="size-4" />
                    <span className="text-sm">{item.label}</span>
                  </DropdownMenuItem>
                ))}
                {idx < sections.length - 1 && <Separator className="my-1" />}
              </div>
            ))}
            <Separator className="my-1" />
            <div className="flex flex-col gap-1 px-2">
              <FontFamilyButton />
              <HeadingsButton />
              <FontSizeButton />
              <TextColorButton />
              <HightLightColorButton />
              <InsertLinkButton />
              <ImageLinkButton />
              <AlignButton />
              <LineHeightButton />
              <ListButton />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>
          {sections[0].map((item) => (
            <ToolbarButton
              key={item.label}
              onClick={item.onClick}
              isActive={item.isActive}
              icon={item.icon}
            />
          ))}
          <Separator orientation="vertical" className="h-6 w-px bg-black" />
          <FontFamilyButton />
          <Separator orientation="vertical" className="h-6 w-px bg-black" />
          <HeadingsButton />
          <Separator orientation="vertical" className="h-6 w-px bg-black" />
          <FontSizeButton />
          <Separator orientation="vertical" className="h-6 w-px bg-black" />
          {sections[1].map((item) => (
            <ToolbarButton
              key={item.label}
              onClick={item.onClick}
              isActive={item.isActive}
              icon={item.icon}
            />
          ))}
          <Separator orientation="vertical" className="h-6 w-px bg-black" />
          <TextColorButton />
          <HightLightColorButton />
          <InsertLinkButton />
          <ImageLinkButton />
          <AlignButton />
          <LineHeightButton />
          <ListButton />
          <Separator orientation="vertical" className="h-6 w-px bg-black" />
          {sections[2].map((item) => (
            <ToolbarButton
              key={item.label}
              onClick={item.onClick}
              isActive={item.isActive}
              icon={item.icon}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default Toolbar
