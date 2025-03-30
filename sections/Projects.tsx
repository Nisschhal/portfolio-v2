import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png"
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png"
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png"
import Image from "next/image"
import CheckCircle from "@/assets/icons/check-circle.svg"
import UpRightArrow from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"
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
    <section className="pb-32">
      <div className="container">
        {/* flex to only select the text content */}
        <div className="flex justify-center">
          {/* Feature Title */}
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
            Real-world Results
          </p>
        </div>

        <h2 className="text-3xl font-serif text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center  text-white/60 mt-4">
          See how I have transformed concepts into engaging digitial
          experiences.
        </p>

        <div className="flex flex-col mt-10 gap-16">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl relative z-0
              bg-gray-800
              overflow-hidden px-8 pt-8 outline-2 outline-white/20"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              />
              <div className="text-sm tracking-widest inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
                <span className="font-semibold uppercase ">
                  {project.company}
                </span>
                <span>&bull;</span>
                <span className="font-semibold uppercase">{project.year}</span>
              </div>

              {/* Project Title */}
              <h3 className=" font-serif text-2xl mt-2">{project.title}</h3>

              {/* Seperator */}
              <hr className="border border-white/10 mt-4" />

              {/* Project Results */}
              <ul className="mt-4 flex flex-col gap-4">
                {project.results.map((result) => (
                  <li
                    key={result.title}
                    className="text-sm text-white/50 flex gap-2 items-center"
                  >
                    <span>
                      <CheckCircle className="inline-block size-5" />
                    </span>
                    {result.title}
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button className="inline-flex gap-2  bg-white text-gray-950 h-12 w-full items-center justify-center rounded-xl font-semibold mt-8">
                  <span> View Live Site</span>
                  <UpRightArrow className="size-4" />
                </button>
              </a>
              <Image
                src={project.image}
                alt={project.title}
                className="mt-8 -mb-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
