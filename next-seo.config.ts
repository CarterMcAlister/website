import { DefaultSeoProps } from 'next-seo'
import { config } from './site.config'

const defaultSEOConfig: DefaultSeoProps = {
  title: config.title,
  // titleTemplate: `%s | ${config.title}`,
  defaultTitle: config.title,
  description: config.description,
  canonical: config.url,
  openGraph: {
    url: config.url,
    title: config.title,
    description: config.description,
    images: [
      {
        url: config.bannerImg,
        alt: config.bannerAlt,
      },
    ],
    site_name: config.title,
  },
  twitter: {
    cardType: 'summary_large_image',
  },
}

export default defaultSEOConfig
