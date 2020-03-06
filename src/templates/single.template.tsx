import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@components/layout';
import AuthorBox from '@components/author';
import Comments from '@components/comments';
import Newsletter from '@components/newsletter';
import SEO from '@components/seo';
import { Single } from '@styles';
import { TemplateTypes } from '@types';

const SingleTemplate: TemplateTypes = ({ data }) => {
  const { frontmatter, html, timeToRead, fields } = data.markdownRemark;
  const { path, image, title, description, date, datePublished, excerpt } = frontmatter;
  const { author, siteUrl } = data.site.siteMetadata;
  const { readingTime } = fields;

  const imageUrl = image.publicURL;
  const minutes = timeToRead.toFixed();
  const words = readingTime.words;

  const discus = {
    shortname: author.social.disqus,
    config: {
      identifier: `${path}/`,
      title,
    },
  };

  const schemaScript = `<script type="application/ld+json">{
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "${title}"
    },
    "headline": "${title}",
    "image": [
      "${siteUrl}${imageUrl}"
     ],
    "datePublished": "${datePublished}",
    "dateModified": "${datePublished}",
    "author": {
      "@type": "Person",
      "name": "${author.name}"
    },
     "publisher": {
      "@type": "Organization",
      "name": "Gatsby",
      "logo": {
        "@type": "ImageObject",
        "url": "${siteUrl}/gatsby.svg"
      }
    },
    "description": "${description || excerpt}"
  }</script>`;

  return (
    <Layout>
      <SEO title={title} description={description || excerpt} image={imageUrl} />
      <Single.header>
        <Single.title>{title}</Single.title>
        <Single.meta>
          <span>
            Publicado <strong>{date}</strong> por{' '}
            <strong>
              <a
                href={author.site}
                title={`ir ao site de ${author.name}`}
                data-label={`ir ao site de ${author.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {author.name}
              </a>
              .
            </strong>
          </span>
          <span className="divider" />
          <span>
            Tempo de leitura:{' '}
            <strong role="timer">
              {minutes} minuto
              {`${minutes > 1 ? 's' : ''}`}
            </strong>{' '}
            - {words} palavras.
          </span>
        </Single.meta>
      </Single.header>
      <Single.content dangerouslySetInnerHTML={{ __html: `${html}${schemaScript}` }} />
      <Single.footer>
        <Single.meta>
          Publicado <strong>{date}</strong> por{' '}
          <strong>
            <a
              href={author.site}
              title={`ir ao site de ${author.name}`}
              data-label={`ir ao site de ${author.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {author.name}
            </a>
            .
          </strong>
        </Single.meta>
      </Single.footer>
      <AuthorBox />
      <Comments shortname={discus.shortname} config={discus.config} />
      <Newsletter />
    </Layout>
  );
};

export default SingleTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        siteUrl
        author {
          name
          site
          social {
            disqus
          }
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 150)
      timeToRead
      frontmatter {
        category
        date(locale: "pt-br", fromNow: true)
        datePublished
        description
        path
        tags
        title
        image {
          publicURL
          name
        }
      }
      fields {
        readingTime {
          words
        }
      }
    }
  }
`;
