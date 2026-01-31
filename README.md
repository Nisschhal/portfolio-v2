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
