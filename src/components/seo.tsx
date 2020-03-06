/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { SeoInterface } from '@types';

function SEOComponent({ title, description, lang = 'pt-br', meta = [], image }: SeoInterface) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author {
              social {
                twitter
              }
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const { twitter } = site.siteMetadata.author.social;
  const ogImage = image || `/share.jpg`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `aplication-name`,
          content: site.siteMetadata.title,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:locale`,
          content: `pt_BR`,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.siteUrl}${ogImage}`,
        },
        {
          property: `og:title`,
          content: `${title} | ${site.siteMetadata.title}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image:src`,
          content: `${site.siteMetadata.siteUrl}${ogImage}`,
        },
        {
          name: `twitter:creator`,
          content: `@${twitter}`,
        },
        {
          name: `twitter:title`,
          content: `${title} | ${site.siteMetadata.title}`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          httpEquiv: `content-language`,
          content: `pt-br`,
        },
        {
          name: `robots`,
          content: `index,follow,noodp`,
        },
        {
          name: `country`,
          content: `Brazil`,
        },
        {
          name: `revisit-after`,
          content: `7 days`,
        },
        {
          rel: `author`,
          content: `${site.siteMetadata.siteUrl}/humans.txt`,
        },
        {
          rel: `index`,
          content: `${site.siteMetadata.siteUrl}/`,
        },
      ].concat(meta)}
    />
  );
}

export default SEOComponent;
