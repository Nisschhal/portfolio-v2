import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png"
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png"
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png"
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png"
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png"
import Card from "@/components/Card"
import SectionHeader from "@/components/SectionHeader"
import Image from "next/image"
import { Fragment } from "react"

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
]

export const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say  about Me"
          description="Don't just take my word for it - see what others have to say about my work."
        />
        {/* Section Content */}
        <div className="flex mt-12 lg:mt-20 overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]  py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none  animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((item, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md md:p-8 hover:-rotate-4 transition duration-300 "
                  >
                    {/* Testimonial Author */}
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="flex items-center justify-center size-14 bg-gray-700 rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className=""
                        />
                      </div>

                      {/* Name & Position */}
                      <div className="">
                        <p className=" font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-white/40">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <p className="text-sm md:text-base mt-4 md:mt-6">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
