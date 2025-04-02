import Card from "@/components/Card"
import SectionHeader from "@/components/SectionHeader"
import StarIcon from "@/assets/icons/star.svg"
import Image from "next/image"
// Icons
import JavaScript from "@/assets/icons/square-js.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import CssIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import GithubIcon from "@/assets/icons/github.svg"
import NextIcon from "@/assets/icons/nextjs.svg"
import TailwindIcon from "@/assets/icons/tailwindcss.svg"
import GitIcon from "@/assets/icons/git.svg"
import FigmaIcon from "@/assets/icons/figma.svg"
import ChromeIcon from "@/assets/icons/chrome.svg"

// Image
import bookImage from "@/assets/images/book-cover.png"
import mapImage from "@/assets/images/map.png"
import smileImage from "@/assets/images/memoji-smile.png"

// Component
import TechIcon from "@/components/TechIcon"
import CardHeader from "@/components/CardHeader"
import Toolbox from "@/components/Toolbox"
const toolBoxItems = [
  { title: "JavaScript", iconType: JavaScript },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CssIcon },
  { title: "TypeScript", iconType: JavaScript },
  { title: "React", iconType: ReactIcon },
  { title: "Chrome", iconType: ChromeIcon },
  { title: "Next.js", iconType: NextIcon },
  { title: "Tailwind", iconType: TailwindIcon },
  { title: "Git", iconType: GitIcon },
  { title: "Github", iconType: GithubIcon },
  { title: "Figma", iconType: FigmaIcon },
]

const hobbies = [
  { title: "Reading", emoji: "📚" },
  { title: "UI/UX Design", emoji: "🎨" },
  { title: "Writing", emoji: "✍️" },
  { title: "Blogging", emoji: "📝" },
  { title: "Cooking", emoji: "🍳" },
  { title: "Fitness", emoji: "🏋️" },
  { title: "Travel", emoji: "🌍" },
  { title: "Music", emoji: "🎵" },
  { title: "Communication", emoji: "🗣️" },
  { title: "Community Work", emoji: "🤝" },
  { title: "Volunteering", emoji: "👥" },
  { title: "Meditation", emoji: "🧘" },
  { title: "Self-Improvement", emoji: "💪" },
  { title: "Spirituality", emoji: "🌟" },
  { title: "Entrepreneurship", emoji: "🚀" },
]

export const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse into My World"
          description="Learn more about who I am and what I do, and what I bring to the table."
        />

        <div className="mt-20 flex flex-col gap-8">
          {/* Book Card */}
          <Card className="h-80 ">
            {/* Card Header */}
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />
            {/* Card Content */}
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book Cover" />
            </div>
          </Card>
          {/* Tool Card */}
          <Card className="p-0 h-80">
            {/* Card Header */}
            <CardHeader
              title="My ToolKits"
              description="Explore the tools I use to bring ideas to life."
              className="px-8 pt-8"
            />
            {/* Card Content */}
            <div className=" ">
              {/* Tools */}
              <Toolbox items={toolBoxItems} className="mt-6" />
              <Toolbox
                items={toolBoxItems}
                className="mt-6"
                itemWrapperClassName="-translate-x-1/2"
              />
            </div>
          </Card>
          {/* Beyond Coding */}
          <Card>
            <CardHeader
              title="Beyond Coding"
              description="Explore my interests and hobbies beyond coding realm."
            />

            {/* Hobbies */}
            <div>
              {hobbies.map((hobby) => (
                <div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full  py-1.5"
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Map */}
          <Card>
            <Image src={mapImage} alt="Map" />
            <Image src={smileImage} alt="Smile" />
          </Card>
        </div>
      </div>
    </section>
  )
}
