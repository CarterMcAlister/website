import { config } from './next-seo.config'

/** @type {import('next-sitemap').IConfig} */
const NextSitemapConfig = {
  siteUrl: config.url,
  generateRobotsTxt: true,
}

module.exports = NextSitemapConfig
