import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import ellen4 from '@/images/screencasts/ellen4.webp'
import ellen2 from '@/images/screencasts/ellen2.webp'
import ellen1 from '@/images/screencasts/ellen1.webp'
import ellen3 from '@/images/screencasts/ellen3.webp'

// 
// 
// 
// 

const videos = [
  {
    title: 'Ellen Joe with red background',
    description:
      "High-definition desktop wallpaper of Ellen Joe from Zenless Zone Zero. It shows her in a lively pose against a bold red backdrop.",
    image: ellen1,
    runtime: { minutes: 16, seconds: 54 },
  },
  {
    title: 'Ellen Joe in urban setting with tags',
    description:
      "Detailed HD wallpaper featuring Ellen Joe from Zenless Zone Zero. She's set in a rich urban scene with colorful graffiti tags.",
    image: ellen2,
    runtime: { minutes: 9, seconds: 12 },
  },
  {
    title: 'Ellen Joe with dynamic pose and stylish background',
    description:
      "Striking HD desktop wallpaper of Ellen Joe from Zenless Zone Zero. It highlights her energetic pose and detailed design on a eye-catching, stylish background.",
    image: ellen3,
    runtime: { minutes: 23, seconds: 25 },
  },
  {
    title: 'Ellen Joe night rooftop wallpaper with cityscape',
    description:
      "Captivating HD wallpaper showing Ellen Joe from Zenless Zone Zero. She stands on a rooftop at night with a city skyline behind her.",
    image: ellen4,
    runtime: { minutes: 28, seconds: 44 },
  },
]

function PlayIcon(props) {
  return (
    <svg
      aria-hidden="true"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z" />
      <circle cx="8" cy="8" r="6.25" fill="none" />
    </svg>
  )
}

export function Screencasts() {
  return (
    <section
      id="screencasts"
      aria-labelledby="screencasts-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        {/* <SectionHeading number="2" id="screencasts-title">
          Screencasts
        </SectionHeading> */}
        <h2 className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Wallpapers of Ellen Joe
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
        Explore our collection of stunning Ellen Joe HD wallpapers to refresh your desktop's look.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4"
        >
          {videos.map((video) => (
            <li key={video.title} className="[counter-increment:video]">
              <div
                className="relative flex h-44 items-center justify-center rounded-2xl px-6 shadow-lg"
                style={{
                  backgroundImage:
                    'conic-gradient(from -49.8deg at 50% 50%, #7331FF 0deg, #00A3FF 59.07deg, #4E51FF 185.61deg, #39DBFF 284.23deg, #B84FF1 329.41deg, #7331FF 360deg)',
                }}
              >
                <div className="flex overflow-hidden rounded shadow-sm">
                  <a href="/ellen-wallpapers" target="_blank" rel="noopener noreferrer"><Image src={video.image} alt={video.description} unoptimized /></a>
                </div>
                {/* <div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-black/30 px-1.5 py-0.5 text-sm text-white [@supports(backdrop-filter:blur(0))]:bg-white/10 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
                  <PlayIcon className="h-4 w-4 fill-current stroke-current" />
                  <time
                    dateTime={`${video.runtime.minutes}m ${video.runtime.seconds}s`}
                    className="ml-2"
                  >
                    {`${video.runtime.minutes}:${video.runtime.seconds
                      .toString()
                      .padStart(2, '0')}`}
                  </time>
                </div> */}
              </div>
              {/* <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                {video.title}
              </h3> */}
              <p className="mt-2 text-sm text-slate-600">{video.description}</p>
            </li>
          ))}
        </ol>
        <div className="flex justify-center items-center my-8">
          <a href="/ellen-wallpapers" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out">
            Explore Wallpapers
          </a>
        </div>
      </Container>
    </section>
  )
}
