import StarIcon from "@/assets/icons/star.svg"

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
]

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-300 -rotate-3 -mx-1">
        {/* Masking the container */}
        <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* Main Container || Banner */}
          <div className="flex gap-4  py-3">
            {words.map((word) => (
              // flex-none for taking the minimum width of content
              <div
                key={word}
                className="inline-flex items-center flex-none gap-4 text-gray-900"
              >
                <span className="uppercase text-sm font-extrabold tracking-wide">
                  {word}
                </span>
                <StarIcon className="size-6 rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
