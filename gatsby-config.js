module.exports = {
  siteMetadata: {
    title: `Blog do nando />`,
    name: `blog.nandomoreira.dev`,
    siteUrl: `https://blog.nandomoreira.dev`,
    description: `30 anos, minimalista, front-end, especialista em WordPress. Sempre em busca de um código bem escrito e de um bom café.`,
    hero: {
      heading: `Bem-vindo ao blog do nando />`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/nandomoreirame`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/oseunando`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/oseunando`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/umdevux`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/nandomoreirame/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        authorsPath: "author",
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
