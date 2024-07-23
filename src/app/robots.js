import { MetadataRoute } from 'next'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      disallow: [
        '/',
        '/agent-infomation',
        '/agent-skills',
        '/ellen-wallpapers',
        '/official-group',
        '/reddit-group',
        '/discord-group',
        '/fandom-wiki',
      ],
    },
    sitemap: 'https://ellenjoe.org/sitemap.xml',
  }
}