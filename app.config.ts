export default defineAppConfig({
  docus: {
    title: 'Wag3s',
    description: 'Streamline Your Finances and HR Management with Ease.',
    image: '/Users/admin/Documents/Perso/wag3s_docs/img/LogoWw.png',
    socials: {
      twitter: 'W3Wag3s',
      youtube: 'Wag3s',
      medium: 'wag3s',
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
