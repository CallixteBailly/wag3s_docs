export default defineAppConfig({
  docus: {
    title: 'Wag3s',
    description: 'The best place to start your documentation.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'nuxt_js',
      github: 'CallixteBailly/wag3s_docs',
      youtube: 'nuxt_js',
    },
    github: {
      dir: '',
      branch: 'main',
      repo: 'wag3s_docs',
      owner: 'CallixteBailly',
      edit: true
    },
    layout: 'default',
    aside: {
      level: 1,
      collapsed: true,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    footer: {
      credits: {
        icon: '',
        text: 'powered by Wag3s',
        href: '',
      },
      textLinks: [
        {
          text: '',
          href: '',
          target: '_blank',
          rel: 'noopener'
        }
      ],
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
