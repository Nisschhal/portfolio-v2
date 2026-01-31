import StarIcon from '@/assets/icons/star.svg'
import { Fragment } from 'react'

const words = [
  'Performant',
  'Accessible',
  'Secure',
  'Interactive',
  'Scalable',
  'User Friendly',
  'Responsive',
  'Maintainable',
  'Search Optimized',
  'Usable',
  'Reliable',
]

export const TapeSection = () => {
  return (
    <div className='overflow-x-clip py-16 lg:py-24'>
      <div className='-mx-1 -rotate-3 bg-gradient-to-r from-emerald-300 to-sky-300'>
        {/* 2 flex is required for smooth move left animation */}
        {/* 1. to flex */}
        {/* 2. to take the original space with flex-none but make sure to add mr-4 or gap size */}
        {/* Masking the container */}
        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          {/* Main Container || Banner */}
          <div className='animate-move-left flex flex-none gap-4 py-3 pr-4 [animation-duration:30s]'>
            {/* Create two item of empty array 0 */}
            {[...new Array(2)].fill(0).map((item, index) => (
              <Fragment key={index}>
                {words.map(word => (
                  // flex-none for taking the minimum width of content
                  <div
                    key={word}
                    className='inline-flex flex-none items-center gap-4 text-gray-900'
                  >
                    <span className='text-sm font-extrabold tracking-wide uppercase'>
                      {word}
                    </span>
                    <StarIcon className='size-6 rotate-12' />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
