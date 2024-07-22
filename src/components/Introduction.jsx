import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Who Is Ellen Joe?
        </h2>
        {/* <p className="mt-4">
          Before I learned how to design icons myself, I always imagined that
          they were drawn by hand using the pen tool, some sort of fancy
          graphics tablet, and hours and hours spent manually fine-tuning bezier
          curves.
        </p>
        <p className="mt-4">
          But it turns out this isn’t how great icon designers work at all.
        </p>
        <p className="mt-4">
          In “Everything Starts as a Square”, you’ll learn the systems experts
          use to create pixel perfect icons, without relying on a steady hand.
        </p> */}
        <ul role="list" className="mt-8 space-y-3">
          {[
            "🎮 Character: Ellen Joe is a playable agent in the game Zenless Zone Zero.",
            "👥 Affiliation: She is a member of Victoria Housekeeping.",
            "🧩 Personality: Ellen Joe is described as a mysterious young girl who never talks about her past.",
            "⚔️ Combat Skills: She is calm, collected, and highly efficient in combat, specializing in Ice anomaly and slashing damage.",
            "🌟 Role: Ellen Joe is an S rank Agent who deals AOE and single target ice damage.",
            "✨ Special Abilities: She has a unique dodge and sprint mechanic called 'Roaming State' that enhances her ice damage capabilities.",
            "📅 Availability: Ellen Joe was available on a limited-time banner from July 4, 2024, to July 24, 2024, in the game's version 1.0.",
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        {/* <p className="mt-8">
          By the end of the book, you’ll have all the confidence you need to dig
          in and start creating beautiful icons that can hold their own against
          any of the sets you can find online.
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Get two free chapters straight to your inbox{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p> */}
      </Container>
<Container>
<div className="flex flex-col w-full h-full text-white bg-zinc-800 rounded-lg shadow-sm my-4">
  <div className="flex justify-between pl-2 w-full bg-zinc-600 rounded-t-lg h-15 font-bold leading-[60px]">
    <h3>Ellen Joe - Agent Information</h3>
  </div>
  <div className="flex flex-col sm:flex-row p-2 mt-1 w-full text-white">
    <section className="w-full sm:w-1/2 break-words mb-4 sm:mb-0">
      <div className="flex flex-col sm:flex-row w-full mb-3 sm:mb-0">
        <div className="flex items-center h-10 sm:h-16 text-sm leading-6 text-gray-400 w-full sm:w-[130px]">
          Faction
        </div>
        <div className="flex flex-wrap gap-1 justify-start items-center p-1 max-w-full sm:w-[calc(100%-130px)] font-bold min-h-[40px] sm:min-h-[57px]">
          <a href="/characters/?faction=Victoria Housekeeping Co." className="font-bold text-lime-400 whitespace-nowrap cursor-pointer focus:outline-0 transition-all duration-120 ease-in-out">
            <img src="https://static.dotgg.gg/zenless/factions/victoria-housekeeping-co.webp" alt="Faction: Victoria Housekeeping Co." className="object-contain inline-block mr-1 align-middle w-6 h-6 sm:w-8 sm:h-8 filter drop-shadow-md" />
            Victoria Housekeeping Co.
          </a>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full mb-3 sm:mb-0">
        <div className="flex items-center h-10 sm:h-16 text-sm leading-6 text-gray-400 w-full sm:w-[130px]">
          Attack
        </div>
        <div className="flex flex-wrap gap-1 justify-start items-center p-1 max-w-full sm:w-[calc(100%-130px)] font-bold min-h-[40px] sm:min-h-[57px]">
          <a href="/characters/?attack=Slash" className="font-bold text-lime-400 whitespace-nowrap cursor-pointer focus:outline-0 transition-all duration-120 ease-in-out">
            <img src="https://static.dotgg.gg/zenless/hittypes/slash.webp" alt="Attack: Slash" className="object-contain inline-block mr-1 align-middle w-6 h-6 sm:w-8 sm:h-8 filter drop-shadow-md" />
            Slash
          </a>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full mb-3 sm:mb-0">
        <div className="flex items-center h-10 sm:h-16 text-sm leading-6 text-gray-400 w-full sm:w-[130px]">
          Element
        </div>
        <div className="flex flex-wrap gap-1 justify-start items-center p-1 max-w-full sm:w-[calc(100%-130px)] font-bold min-h-[40px] sm:min-h-[57px]">
          <a href="/characters/?element=Ice" className="font-bold text-lime-400 whitespace-nowrap cursor-pointer focus:outline-0 transition-all duration-120 ease-in-out">
            <img src="https://static.dotgg.gg/zenless/elements/ice.webp" alt="Element: Ice" className="object-contain inline-block mr-1 align-middle w-6 h-6 sm:w-8 sm:h-8 filter drop-shadow-md" />
            Ice
          </a>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-1">
        <div className="flex items-center h-10 sm:h-16 text-sm leading-6 text-gray-400 w-full sm:w-[130px]">
          Tier Ratings
        </div>
        <div className="flex flex-row gap-1 justify-start sm:justify-around w-full text-xs leading-5">
          <div className="flex flex-col gap-1 w-16">
            <div className="w-full text-center text-lime-400 font-bold">
              Agents
            </div>
            <div className="w-full text-center bg-green-700 border border-solid border-stone-300 rounded-lg text-shadow-white">
              S
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full sm:w-1/2 break-words">
      <div className="flex flex-col sm:flex-row w-full mb-3 sm:mb-0">
        <div className="flex items-center h-10 sm:h-16 text-sm leading-6 text-gray-400 w-full sm:w-[130px]">
          Rarity
        </div>
        <div className="flex flex-wrap gap-1 justify-start items-center p-1 max-w-full sm:w-[calc(100%-130px)] font-bold min-h-[40px] sm:min-h-[57px]">
          <a href="/characters/?rarity=4" className="font-bold text-lime-400 whitespace-nowrap cursor-pointer focus:outline-0 transition-all duration-120 ease-in-out">
            <img src="https://static.dotgg.gg/zenless/icons/rarity4.webp" alt="Rarity: A" className="object-contain inline-block mr-1 align-middle w-6 h-6 sm:w-8 sm:h-8 filter drop-shadow-md" />
            A
          </a>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full mb-3 sm:mb-0">
        <div className="flex items-center h-10 sm:h-16 text-sm leading-6 text-gray-400 w-full sm:w-[130px]">
          Gender
        </div>
        <div className="flex flex-wrap gap-1 justify-start items-center p-1 max-w-full sm:w-[calc(100%-130px)] font-bold min-h-[40px] sm:min-h-[57px]">
          Female
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full">
        <div className="flex items-center h-10 sm:h-16 text-sm leading-6 text-gray-400 w-full sm:w-[130px]">
          Full Name
        </div>
        <div className="flex flex-wrap gap-1 justify-start items-center p-1 max-w-full sm:w-[calc(100%-130px)] font-bold min-h-[40px] sm:min-h-[57px]">
          Ellen Joe
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full">
        <div className="flex items-center h-10 sm:h-16 text-sm leading-6 text-gray-400 w-full sm:w-[130px]">
          Age
        </div>
        <div className="flex flex-wrap gap-1 justify-start items-center p-1 max-w-full sm:w-[calc(100%-130px)] font-bold min-h-[40px] sm:min-h-[57px]">
          A 17-year-old high school student
        </div>
      </div>
    </section>
  </div>
</div>
</Container>
    </section>
  )
}
