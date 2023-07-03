const siteMetadata = {
  title: 'Dilip Kumar | Frontend Web Developer',
  author: 'Dilip Kumar',
  headerTitle: 'Dilip Kumar | Frontend Web Developer',
  footerTitle: 'Dilip Kumar | Frontend Web Developer',
  description:
    'Hi my name is Dilip Kumar Maurya and I am a Front End Web developer based in New Delhi, India. Right now I am working as Frontend Web Developer at Taknik Bharti.',
  snippets: 'Code snippets collected by Dilip',
  language: 'en-us',
  siteUrl: 'https://www.dilipmaurya.in',
  siteLogo: '/static/images/t.png',
  image: '/static/images/t.png',
  socialBanner: '/static/images/dilipmaurya.png',
  email: 'curiousdilip@gmail.com',
  github: 'https://github.com/curiousdilip',
  twitter: 'https://twitter.com/curiousdilip',
  facebook: 'https://facebook.com/curiousdilip',
  linkedin: 'https://www.linkedin.com/in/curiousdilip/',
  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: false, // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: false, // e.g. UA-000000-2 or G-XXXXXXX
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqus: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
  socialAccount: {
    twitter: 'curiousdilip',
  },
}

module.exports = siteMetadata
