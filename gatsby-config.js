require('dotenv').config();

const { resolve } = require('path');

const today = new Date();
const currentYear = today.getFullYear();
const siteUrl = `https://blog.nandomoreira.dev`;

const plugins = [
  {
    resolve: `gatsby-plugin-typescript`,
    options: {
      isTSX: true, // defaults to false
      jsxPragma: `jsx`, // defaults to "React"
      allExtensions: true, // defaults to false
    },
  },
  `gatsby-plugin-react-helmet`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-emotion`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1000,
            quality: 90,
            withWebp: true,
            linkImagesToOriginal: false,
            showCaptions: true,
          },
        },
        `gatsby-remark-reading-time`,
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            aliases: { sh: `bash`, js: `javascript` },
            showLineNumbers: true,
          },
        },
      ],
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: resolve(__dirname, 'content', 'blog'),
      name: `blog`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: resolve(__dirname, 'content', 'assets'),
      name: `assets`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: resolve(__dirname, 'content'),
      name: `content`,
    },
  },
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Montserrat:700,800', 'Nunito:400,600,700'],
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      /* eslint @typescript-eslint/camelcase: "off" */
      name: `blog do nando`,
      short_name: `bnando`,
      start_url: `/`,
      background_color: `#000`,
      theme_color: `#000`,
      display: `minimal-ui`,
      icon: `static/icon.png`,
    },
  },
  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: { siteUrl },
  },
  {
    resolve: `gatsby-plugin-page-creator`,
    options: {
      path: resolve(__dirname, `src/pages`),
    },
  },
  {
    resolve: `gatsby-plugin-sitemap`,
    options: {
      output: `/sitemap.xml`,
      exclude: [`/404`, `/404.html`],
    },
  },
];

if (process.env.CONTEXT === 'production') {
  const netlifyCache = {
    resolve: 'gatsby-plugin-netlify-cache',
    options: {
      cachePublic: true,
    },
  };

  const analytics = {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS_ID,
      head: false,
    },
  };

  plugins.push(`gatsby-plugin-netlify`);
  plugins.push(`gatsby-plugin-offline`);
  plugins.push(netlifyCache);
  plugins.push(analytics);
}

module.exports = {
  siteMetadata: {
    title: `Blog do Nando </`,
    siteName: `nandomoreira`,
    siteDesc: `~apenas mais um programador`,
    description: `~apenas mais um programador é um blog de um desenvolvedor front-end, minimalista e especialista em WordPress. | Desenvolvedor Front-end em Curitiba | Desenvolvedor WordPress em Curitiba | Desenvolvedor Web em Curitiba | Programador em Curitiba`,
    siteUrl,
    author: {
      name: `Fernando Moreira`,
      email: `hi@nandomoreira.dev`,
      site: `https://nandomoreira.dev`,
      bio: `${currentYear -
        1989} anos, minimalista, front-end e especialista em WordPress. Sempre em busca de um código bem escrito e de um bom café.`,
      phone: `5541984401163`,
      social: {
        twitter: `oseunando`,
        instagram: `oseunando`,
        behance: `umdevux`,
        github: `nandomoreirame`,
        dribbble: `umdevux`,
        facebook: `oseunando`,
        linkedin: `nandomoreirame`,
        codepen: `oseunando`,
        npm: `~nandomoreira.me`,
        paypal: `nandomoreira`,
        disqus: `fernandomoreira`,
      },
    },
  },
  plugins,
};
