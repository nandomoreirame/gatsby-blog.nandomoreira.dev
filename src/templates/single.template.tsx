import React from 'react'
import { graphql } from 'gatsby'

import Layout from '@components/layout'
import AuthorBox from '@components/author'
import Comments from '@components/comments'
import SEO from '@components/seo'
import { Single } from '@styles'
import { Template } from '@types'

const SingleTemplate: Template = ({ pageContext, data }) => {
  const { frontmatter, html, timeToRead, fields } = data.markdownRemark
  const { path, image, title, description, date, excerpt } = frontmatter
  const { author } = data.site.siteMetadata
  const { readingTime } = fields

  const imageUrl = image.publicURL
  const imageAlt = image.name.replace(/(\-)/g, ' ')
  const minutes = timeToRead.toFixed()
  const words = readingTime.words

  const discus = {
    shortname: author.social.disqus,
    config: {
      identifier: `${path}/`,
      title,
    },
  }

  return (
    <Layout>
      <SEO title={title} description={description || excerpt} />
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
              >
                {author.name}
              </a>
            </strong>
          </span>
          <span className="divider" />
          <span>
            Tempo de leitura:{' '}
            <strong role="timer">
              {minutes} minuto
              {`${minutes > 1 ? 's' : ''}`}
            </strong>{' '}
            - {words} palavras
          </span>
        </Single.meta>
      </Single.header>
      <Single.content dangerouslySetInnerHTML={{ __html: html }} />
      <Single.footer>
        <Single.meta>
          Publicado <strong>{date}</strong> por{' '}
          <strong>
            <a
              href={author.site}
              title={`ir ao site de ${author.name}`}
              data-label={`ir ao site de ${author.name}`}
              target="_blank"
            >
              {author.name}
            </a>
          </strong>
        </Single.meta>
      </Single.footer>
      <AuthorBox />
      <Comments shortname={discus.shortname} config={discus.config} />
    </Layout>
  )
}

export default SingleTemplate

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
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
`
