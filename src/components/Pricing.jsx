import clsx from 'clsx'

import { Button } from '@/components/Button'
import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import { YouTubeEmbed } from '@next/third-parties/google'


function Plan({ name, description, price, features, href, featured = false }) {
  return (
    <div
      className={clsx(
        'relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12',
        featured && 'bg-blue-600 sm:shadow-lg',
      )}
    >
      {featured && (
        <div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">
          <GridPattern x="50%" y="50%" />
        </div>
      )}
      <div className="relative flex flex-col">
        <h3
          className={clsx(
            'mt-7 text-lg font-semibold tracking-tight',
            featured ? 'text-white' : 'text-slate-900',
          )}
        >
          {name}
        </h3>
        <p
          className={clsx(
            'mt-2 text-lg tracking-tight',
            featured ? 'text-white' : 'text-slate-600',
          )}
        >
          {description}
        </p>
        <p className="order-first flex font-display font-bold">
          <span
            className={clsx(
              'text-[1.75rem] leading-tight',
              featured ? 'text-blue-200' : 'text-slate-500',
            )}
          >
            $
          </span>
          <span
            className={clsx(
              'ml-1 mt-1 text-7xl tracking-tight',
              featured ? 'text-white' : 'text-slate-900',
            )}
          >
            {price}
          </span>
        </p>
        <div className="order-last mt-8">
          <ul
            role="list"
            className={clsx(
              '-my-2 divide-y text-base tracking-tight',
              featured
                ? 'divide-white/10 text-white'
                : 'divide-slate-200 text-slate-900',
            )}
          >
            {features.map((feature) => (
              <li key={feature} className="flex py-2">
                <CheckIcon
                  className={clsx(
                    'h-8 w-8 flex-none',
                    featured ? 'fill-white' : 'fill-slate-600',
                  )}
                />
                <span className="ml-4">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button
          href={href}
          color={featured ? 'white' : 'slate'}
          className="mt-8"
          aria-label={`Get started with the ${name} plan for $${price}`}
        >
          Get started
        </Button>
      </div>
    </div>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-32"
    >
      <Container>
        {/* <SectionHeading number="4" id="pricing-title">
          Pricing
        </SectionHeading> */}
        <h2 className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Ellen Joe Animation
        </h2>
        {/* <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          “Everything Starts as a Square” is available in two different packages
          so you can pick the one that’s right for you.
        </p> */}
<div className="container mx-auto px-2 py-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        {/* <iframe src="https://www.youtube.com/embed/6iWNuzAFSpk?feature=oembed&enablejsapi=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
        <YouTubeEmbed videoid="6iWNuzAFSpk" />
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        {/* <iframe src="https://www.youtube.com/embed/6Sz3IBKkvQk?feature=oembed&enablejsapi=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
        <YouTubeEmbed videoid="6Sz3IBKkvQk" />
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        {/* <iframe src="https://www.youtube.com/embed/X1Yr-MfR7QQ?feature=oembed&enablejsapi=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
        <YouTubeEmbed videoid="X1Yr-MfR7QQ" />
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        {/* <iframe src="https://www.youtube.com/embed/Ad18EUtQhl0?feature=oembed&enablejsapi=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
        <YouTubeEmbed videoid="Ad18EUtQhl0" />
      </div>
    </div>
  </div>
</div>
      </Container>
      {/* <div className="mx-auto mt-16 max-w-5xl lg:px-6">
        <div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
          <Plan
            name="Essential"
            description="The perfect starting point if you’re on a budget."
            price="15"
            href="#"
            features={[
              'The 240-page ebook',
              'Figma icon templates',
              'Community access',
            ]}
          />
          <Plan
            featured
            name="Complete"
            description="Everything icon resource you could ever ask for."
            price="229"
            href="#"
            features={[
              'The 240-page ebook',
              'Figma icon templates',
              'Over an hour of screencasts',
              'Weekly icon teardowns',
              'Community access',
            ]}
          />
        </div>
      </div> */}
    </section>
  )
}
