import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png"
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png"
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png"
import Image from "next/image"
import CheckCircle from "@/assets/icons/check-circle.svg"
import UpRightArrow from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"
import SectionHeader from "@/components/SectionHeader"
import Card from "@/components/Card"
const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
]

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digitial experiences."
        />
        {/* Section Content */}
        <div className="flex flex-col mt-10 gap-16 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:px-10 md:pt-12 lg:px-20 lg:pt-16 sticky "
              style={{
                top: `calc(64px + ${projectIndex * 50}px)`,
              }}
            >
              {/* Background noise image */}
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              />
              {/* lg:grid lg:grid-cols-2 */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/* lg:Left Column */}
                <div className="lg:pb-16">
                  {/* Project Company * year */}
                  <div className="text-sm tracking-widest inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
                    <span className="font-semibold uppercase ">
                      {project.company}
                    </span>
                    <span>&bull;</span>
                    <span className="font-semibold uppercase">
                      {project.year}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className=" font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>

                  {/* Seperator */}
                  <hr className="border border-white/10 mt-4 md:mt-4.5" />

                  {/* Project Results */}
                  <ul className="mt-4 md:mt-6 flex flex-col gap-4">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="text-sm md:text-base text-white/50 flex gap-2 items-center"
                      >
                        <span>
                          <CheckCircle className="inline-block size-5 md:size-6" />
                        </span>
                        {result.title}
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="inline-flex gap-2  bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 items-center justify-center rounded-xl font-semibold mt-8 md:mt-10">
                      <span> View Live Site</span>
                      <UpRightArrow className="size-4" />
                    </button>
                  </a>
                </div>

                {/* Lg: Right column */}
                <div className="relative  ">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-2 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none lg:object-cover"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
