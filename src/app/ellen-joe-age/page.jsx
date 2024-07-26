import Image from 'next/image';
import Link from 'next/link';
import { YouTubeEmbed } from '@next/third-parties/google'
import { Footer } from '@/components/Footer'
import coverImage1 from '@/images/ellen.jpg'
import coverImage2 from '@/images/cover.png'

export const metadata = {
  title: 'How Old Is Ellen Joe in Zenless Zone Zero? | Ellen Joe Age',
  description: 'Discover Ellen Joe\'s age in Zenless Zone Zero. Explore fan theories, character background, and official sources about Ellen Joe\'s age in this popular game.',
  canonical: 'https://ellenjoe.org/ellen-joe-age',
};

export default function EllenJoeAge() {
  return (
    <>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* 面包屑导航 */}
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
            Home
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">Ellen Joe Age</span>
        </nav>
        
        <h1 className="text-5xl font-bold mb-12 text-center text-gray-800">How Old Is Ellen Joe in Zenless Zone Zero?</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-700">Introduction to Ellen Joe's Age</h2>
          <p className="mb-6 text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">Ellen Joe's age is a topic of debate among fans of Zenless Zone Zero. While several sources suggest that Ellen Joe is likely 18 years old, she is depicted as a High School Student, which implies she could be around 17 years old. Ellen Joe is a playable character in Zenless Zone Zero and a member of Victoria Housekeeping.</p>
          <div className="flex justify-center">
            <Image src={coverImage1} alt="Ellen Joe from Zenless Zone Zero" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
        </section>
        
        <section className="mb-16 bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-700">Character Background and Age Speculation</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-600 max-w-2xl mx-auto">
            <li>Name: Ellen Joe</li>
            <li>Occupation: Maid at Victoria Housekeeping Co.</li>
            <li>Personality: Calm, collected, and efficient</li>
            <li>Background: Mysterious with no clear past</li>
            <li>Appearance: Child-like, flat chest, 4-5 heads tall, no curves</li>
          </ul>
          <p className="text-lg text-gray-600 text-center">The debate around Ellen Joe's age in Zenless Zone Zero continues, with fans speculating based on various factors.</p>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-700">Fan Theories about Ellen Joe's Age</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-600 max-w-2xl mx-auto">
            <li>Many fans speculate Ellen Joe is around 18 years old</li>
            <li>Some believe she is 17 based on her student status</li>
            <li>Living alone suggests she is at least 18</li>
            <li>Comparison to other young-looking characters supports the 18-year-old theory</li>
          </ul>
        </section>
        
        <section className="mb-16 bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-700">Official Sources and Ellen Joe's Age</h2>
          <p className="mb-6 text-lg text-gray-600 text-center">While official sources don't explicitly state Ellen Joe's age in Zenless Zone Zero, they provide valuable information:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 max-w-2xl mx-auto">
            <li>Official Site: Provides character details and background</li>
            <li>Wiki: Contains comprehensive information about Ellen Joe</li>
            <li>Reddit: Discussions and fan theories about her age</li>
            <li>YouTube: Videos discussing her age and character</li>
          </ul>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-700">Visual Description of Ellen Joe</h2>
          <p className="mb-6 text-lg text-gray-600 text-center">Ellen Joe's appearance in Zenless Zone Zero contributes to the age debate:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 max-w-2xl mx-auto">
            <li>Child-like appearance with a flat chest and no curves</li>
            <li>Height: 4-5 heads tall</li>
            <li>Often dressed in maid attire</li>
            <li>Mysterious and calm demeanor</li>
          </ul>
          <div className="flex justify-center">
            <Image src={coverImage2} alt="Full body image of Ellen Joe" width={300} height={600} className="rounded-lg shadow-lg" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-700">Related Videos about Ellen Joe's Age</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <YouTubeEmbed videoid="X1Yr-MfR7QQ" />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <YouTubeEmbed videoid="EBr-k4YldvY" />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <YouTubeEmbed videoid="gGKoLfgYsSo" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}