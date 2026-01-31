# Nischal Portfolio

## Implementation Details

1. SVGR/webpack
   - install
   - copy paste the docs instruction in next.config.mjs
   - extend it to preserve default config: see code next.config.mjs file
2. Framer Motion: To handle animations

### Technologies Used

- svgr/webpack for svg customization
- framer-motion: npm install motion
- prettier for code formatting with prettier-plugin-tailwindcss
- mdx for markdown support and bloging

## MDX Implementation for Blog

- Install ` npm install next-mdx-remote`
  - Can be used for both local and remote mdx files
- Write the blog post in mdx format and save it to the content/posts folder
  - Read the mdx file via slug using fs module
  - Install `npm install gray-matter`
  - Extrac the frontmatter(metadata) and content(post) from the mdx file
- Install Tailwindcss/typography for styling mdx content
  `npm install -D @tailwindcss/typography`

## Implement velite for Blog's mdx Content Manager

- install velite, its stable and maintained then content layer
- define collection and config for your post structure in `velite.config.ts` in
  root
  - refer to my `velite.config.ts` i have commented all to better understand
  - Refer to my `velite.config.ts` file make sure to remove hash because velite
    engine yet can't figure out image url with hash
  - Also make sure image name doesn't clash with one another put the cover-slug
    or something to make image name unique by yourself
  - maybe in future, by the time you are using might resolve that issue
- once the json file is generated using `npx velite`
- Now is the time to Render it, but the `body` is in mdx format which is just
  long string js code
- To render that body we need helper or higher order MDX Engine to run that long
  complex js code of body
- Create `components/{blogs}/mdx-content.tsx` and copy paste the code
- Note: Don't forget to add `npm install rehype-slug -D` because without this it
  won't add ids to your headings which is required to higlight the table of
  content if you want that feature

  ```JS
    // 1. We import the "Runtime".
  // Think of this as the "Kitchen Tools" React uses to build HTML tags.
  import Image from 'next/image'
  import * as runtime from 'react/jsx-runtime'

  // Next.js image and custom React components that you want to use mdx or blog post body
  const sharedComponents = {
    // RULE: "Hijack" the standard HTML <img> tag and use Next.js <Image /> instead.
    // This makes standard Markdown ![]() syntax optimized for SEO and images automatically.
    img: (props: any) => (
      <Image width={1200} height={630} className='rounded-lg border' {...props} />
    ),
    Image,
    // Add other custom components you use (is your using in mdx):
    // Callout,
    // Card,
  }

  // 2. This is a "Helper Function".
  // 'code' is the long string of JavaScript from Velite.
  const useMDXComponent = (code: string) => {
    // 'new Function' takes a string and turns it into a real, runnable program.
    const fn = new Function(code)

    // We run the program and give it the "Kitchen Tools" (runtime).
    // It returns the finished React component.
    return fn({ ...runtime }).default
  }

  // 3. This is the actual React Component you will use in your pages.
  export const MDXContent = ({ code }: { code: string }) => {
    // We use our helper function above to get the "Component"
    const Component = useMDXComponent(code)

    // We return the component so it shows up on the screen
    return <Component />
  }
  ```

  - Now all the generated file will be in `.velite/index.t` and images in
    `public/static` or differnt name in public if you changed in config file
  - If you want to use Images in the body of MDX content then:
    - Either use `![Image Name](/static/image-name.jpg) this will be transformed
      into Next image from mdx component we configured
    - or
      ```JS
          <Image
          src='/blogs/carlos-muza-hpjSkU2UYSU-unsplash.jpg'
          width='718'
          height='404'
          alt='Image'
          sizes='100vw'
          />
      ```
      this will use default next Image

## The plugin System

- MDX is just a long text of string. If you use it in website it won't convert
  into html stucture, so we need a way to transfer that #heading ##heading and
  so on.
- Under the hood of velite there is a basic remark parser which converts the mdx
  into usable form of string, React Component that we used in useMDX function to
  get html structure.
- The process (Unified Assembly Line):
- You have: ## I am heading 2
- 1. Remarks Parsing(remark-parse) reads this text and then turns into Syntax
     Tree (specifically an MDAST - Markdown Abstract Syntax Tree), A JSON object
     which describes the logic to write this line.

     ```JSON
      {
        "type": "heading",
        "depth": 2,
        "children": [
          { "type": "text", "value": "I am heading 2" }
        ]
      }
     ```

     - At this point, it is just a JSON info about text being "heading" level 2.
       No HTML <h2>.

- 2. If there any remark-plugins then they would be applied in this phase. Such
     as 'remark-emoji' would conver the :rocket: to 🚀 if it was in the text.
- 3. Then comes Briding remark-rehype which translate the Markdown tree into an
     HTML tree (HAST - HTML Abstract Syntax Tree).
     ```JSON
      {
        "type": "element",
        "tagName": "h2",
        "properties": {},
        "children": [
          { "type": "text", "value": "I am heading 2" }
        ]
      }
     ```
  - Now it is an <h2> tag, but it’s still just a data object.
  - 4. If you have any rehype-plugins then it is applied here. Such as
       rehype-slug, which adds the id to heading.

    ```JSON
          {
        "type": "element",
        "tagName": "h2",
        "properties": {
          "id": "i-am-heading-2"
        },
        "children": [
          { "type": "text", "value": "I am heading 2" }
        ]
      }
    ```

    - This is the place where plugins such as "Shiki" would also add colors to
      your code blocks. Basically everything that can be done to html to
      beautify is done here.

  - 5. Compilation (MDX Engine) which transforms the HTML object and write the
       JS function string. Which can be parsed by runtime engine. That we did
       into `mdx-content.tsx` component. It looks something like this:

       ```JS
        // A simplified version of what's in your .velite folder
        function _createMdxContent(props) {
          const { components } = props;
          return runtime.jsx(components.h2 || "h2", {
            id: "i-am-heading-2",
            children: "I am heading 2"
          });
        }
       ```

       - It looks like React component, which works along side our custom/shared
         Components.
    - 6. Final (Execution) which is done by MDXContent that runs this function
         and turns them into Real DOM node with all infomation like id and so
         on. <h2 id="i-am-heading-2">I am heading 2</h2>

### Process:

1. Raw Text: ## Heading --> 2. Remark (MDAST): { type: "heading" } --> 3.
   Bridge: (Translating Markdown logic to HTML tags) --> 4. Rehype (HAST): {
   tagName: "h2", properties: { id: "heading" } } --> 5. Compiler:
   runtime.jsx("h2", { id: "heading" }) --> 6. DOM: <h2> on your screen.

#### Plugins I used:

- remark-gfm: to support GFM Github Flavour Markdown (autolink literals,
  footnotes, strikethrough, tables, tasklists).
- rehype-slug: adds ids to headings.
- rehype-autolink-headings: add links from headings back to themselves, helpful
  when you share links to point to specific heading [generates when user click
  the heading].
- rehype-pretty-code: Rehype plugin powered by the **shiki** syntax highlighter
  that provides beautiful code blocks for Markdown or MDX.
  [Rehype Pretty Code Docs](https://rehype-pretty.pages.dev/)
- @tailwindcss/typography: Because TailwindCSS resets every default css there is
  in html structure that every browser follows. So that it can apply its own
  design system/style with className.
  - So again with mdx transform html there is not css so either we put one line
    at a time in global.css or use existing: @tailwindcss/typography for html
    tags coming from mdx. Hence, className="prose" on mdx wrapper.

  - But rehype-pretty-code is untouched by tailwind/typography plugins,
    rehype-pretty-code just adds the wrapper title/label around tag which
    contains codes snippets, so we can target/select them in global.css to style
    as we want.

  - **Don't forget to delete the generated .velite and cached .next folder** to
    apply new changes of plugins.
