import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import discordImage from '@/images/resources/discord.svg'
import figmaImage from '@/images/resources/figma.svg'
import videoPlayerImage from '@/images/resources/video-player.svg'

const resources = [
  {
    title: 'Zenless Zone Zero HoYoLAB Discussions',
    description:
      'HoYoLAB is the official gaming community forum for HoYoverse games, including Zenless Zone Zero.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <a href="/official-group" target="_blank" rel="noopener noreferrer"><Image src={figmaImage} alt="" unoptimized /></a>
        </div>
      )
    },
  },
  {
    title: 'Zenless Zone Zero Official Subreddit',
    description:
      'The official subreddit for Zenless Zone Zero is r/ZZZ_Official, where you can find general questions, discussions, and updates about the game.',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={abstractBackgroundImage}
            alt=""
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          />
          <a href="/reddit-group" target="_blank" rel="noopener noreferrer"><Image
            className="relative"
            src={videoPlayerImage}
            alt=""
            unoptimized
          /></a>
        </div>
      )
    },
  },
  {
    title: 'Zenless Zone Zero Official Discord',
    description:
      "The official Discord server for Zenless Zone Zero, has a large community of 509,905 members. You can join the server to participate in discussions, get updates, and connect with other fans.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <a href="/discord-group" target="_blank" rel="noopener noreferrer"><Image src={discordImage} alt="" unoptimized /></a>
        </div>
      )
    },
  },
]

export function Resources() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        {/* <SectionHeading number="3" id="resources-title">
          Resources
        </SectionHeading> */}
        <h2 className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Community and Interest Groups about Ellen Joe
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Discover groups interested in Ellen Joe. Connect with Ellen Joe fans.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
