import Link from 'next/link'
import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  'Getting started': {
    'Getting started': 1,
    'Intro to Figma': 15,
    'Setting up your first artboard': 20,
  },
  Fundamentals: {
    'Strokes and fills': 21,
    'End points': 22,
    'Bezier curves': 26,
    'Designing on a grid': 31,
    'Vector shapes': 45,
  },
  'Boolean operations': {
    'Combining shapes': 50,
    'Subtracting shapes': 57,
    'Intersecting shapes': 66,
    Flattening: 78,
  },
  'Optimizing for production': {
    'Preparing for SVG': 82,
    'Configuring your export settings': 88,
    'Minifying and removing metadata': 95,
  },
}

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        {/* <SectionHeading number="1" id="table-of-contents-title">
          Table of contents
        </SectionHeading> */}
        <h2 className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          How to Play Ellen Joe
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Ellen Joe has a variety of skills including Basic Attacks, Special Attacks, EX Special Attacks, Chain Attacks, and an Ultimate.
          Her skills are designed to maximize damage through Ice DMG and freezing mechanics.
        </p>
        {/* <Expandable>
          <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
            <ExpandableItems>
              {Object.entries(tableOfContents).map(([title, pages]) => (
                <li key={title}>
                  <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                    {title}
                  </h3>
                  <ol
                    role="list"
                    className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                  >
                    {Object.entries(pages).map(([title, pageNumber]) => (
                      <li
                        key={title}
                        className="flex justify-between py-3"
                        aria-label={`${title} on page ${pageNumber}`}
                      >
                        <span
                          className="font-medium text-slate-900"
                          aria-hidden="true"
                        >
                          {title}
                        </span>
                        <span
                          className="font-mono text-slate-400"
                          aria-hidden="true"
                        >
                          {pageNumber}
                        </span>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ExpandableItems>
          </ol>
          <ExpandableButton>See more</ExpandableButton>
        </Expandable> */}
      </Container>
<Container>
<div className="flex flex-col w-full h-full bg-zinc-800 text-white rounded-lg shadow-sm my-4">
  {/* <div className="flex justify-between bg-zinc-600 px-2 py-4 font-bold text-lg rounded-t-lg">
    Ellen Joe - Agent Skills
  </div> */}
  <div className="flex justify-between items-center bg-zinc-600 px-4 py-4 rounded-t-lg">
    <p className="font-bold text-lg">Ellen Joe - Agent Skills</p>
    <a href="/more_skills" className="text-sm text-blue-300 hover:text-blue-100 transition-colors duration-200">
      More Info
    </a>
  </div>
  <div className="flex flex-col p-2 space-y-2 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-2">
    <div className="bg-zinc-900 p-4 rounded">
      <h3 className="font-bold">Basic Attack: Saw Teeth Trimming</h3>
      <p className="text-xs text-gray-400">Type: Basic</p>
      <p className="text-xs text-gray-400 mt-2">
        Press <img src="https://static.dotgg.gg/zenless/icons/IconRoleSkillKeyNormal.webp" className="inline w-6 h-6" alt="Normal key" /> to activate:
        <br />Unleashes up to 3 attacks, dealing <span className="text-amber-400">Physical DMG</span>.
        <br />Press repeatedly or hold <img src="https://static.dotgg.gg/zenless/icons/IconRoleSkillKeyNormal.webp" className="inline w-6 h-6" alt="Normal key" /> during the 3rd attack to extend the skill duration.
      </p>
    </div>

    <div className="bg-zinc-900 p-4 rounded">
      <h3 className="font-bold">Special Attack: Drift</h3>
      <p className="text-xs text-gray-400">Type: Special</p>
      <p className="text-xs text-gray-400 mt-2">
        Press <img src="https://static.dotgg.gg/zenless/icons/IconRoleSkillKeySpecial.webp" className="inline w-6 h-6" alt="Special key" /> to activate:
        <br />Use a quick tail sweep attack in front, dealing <span className="text-teal-200">Ice DMG</span>.
        <br />Anti-Interrupt level is increased while using this skill.
      </p>
    </div>

    <div className="bg-zinc-900 p-4 rounded">
      <h3 className="font-bold">EX Special Attack: Tail Swipe</h3>
      <p className="text-xs text-gray-400">Type: Special</p>
      <p className="text-xs text-gray-400 mt-2">
        With enough Energy, press <img src="https://static.dotgg.gg/zenless/icons/IconRoleSkillKeySpecialReady.webp" className="inline w-6 h-6" alt="Special Ready key" /> to activate:
        <br />Perform a forceful tail whip attack that deals massive <span className="text-teal-200">Ice DMG</span>.
        <br />Gain 1 <span className="text-white">Flash Freeze Charge</span> upon striking an enemy.
        <br />After executing the move, you can directly follow up with the 3rd-hit of a <span className="text-white">Basic Attack</span>.
        <br />Character is invulnerable while using this skill.
      </p>
    </div>

    <div className="bg-zinc-900 p-4 rounded">
      <h3 className="font-bold">EX Special Attack: Sharknami</h3>
      <p className="text-xs text-gray-400">Type: Special</p>
      <p className="text-xs text-gray-400 mt-2">
        After activating <span className="text-white">EX Special Attack: Tail Swipe</span>, with enough Energy, press <img src="https://static.dotgg.gg/zenless/icons/IconRoleSkillKeySpecialReady.webp" className="inline w-6 h-6" alt="Special Ready key" /> to activate:
        <br />Unleash a series of powerful slashes forward, dealing massive <span className="text-teal-200">Ice DMG</span>.
        <br />Gain 1 <span className="text-white">Flash Freeze Charge</span> upon hitting an enemy.
        <br />After executing the move, you can directly follow up with the 3rd-hit of a <span className="text-white">Basic Attack</span>.
        <br />Character is invulnerable while using this skill.
      </p>
    </div>

    <div className="bg-zinc-900 p-4 rounded">
      <h3 className="font-bold">Ultimate: Endless Winter</h3>
      <p className="text-xs text-gray-400">Type: Chain</p>
      <p className="text-xs text-gray-400 mt-2">
        When Decibel Rating is at <span className="text-white">Maximum</span>, press <img src="https://static.dotgg.gg/zenless/icons/IconRoleSkillKeyUltimateReady.webp" className="inline w-6 h-6" alt="Ultimate Ready key" /> to activate:
        <br />Crash down from above and unleash an ice storm before a powerful scissor strike, dealing massive <span className="text-teal-200">Ice DMG</span>.
        <br />Character is invulnerable while using this skill.
      </p>
    </div>

    <div className="bg-zinc-900 p-4 rounded">
      <h3 className="font-bold">Defensive Assist: Wavefront Impact</h3>
      <p className="text-xs text-gray-400">Type: Assist</p>
      <p className="text-xs text-gray-400 mt-2">
        When the character on field is about to be attacked, press <img src="https://static.dotgg.gg/zenless/icons/IconRoleSkillKeySwitch.webp" className="inline w-6 h-6" alt="Switch key" /> to activate:
        <br />Parries the enemy's attack, dealing massive Daze.
        <br />Character is invulnerable while using this skill.
      </p>
    </div>
  </div>
</div>
</Container>
    </section>
  )
}
