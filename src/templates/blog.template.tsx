import React from 'react'
import { Link, graphql } from 'gatsby'

import SEO from '@components/seo'
import Layout from '@components/layout'
import Article from '@components/article'
import { Blog, Single } from '@styles'
import { Template } from '@types'

const BlogTemplate: Template = ({ data, pageContext }) => {
  const { description, siteDesc } = data.site.siteMetadata
  const posts = data.postsResults.edges
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? '/' : `/page/${(currentPage - 1).toString()}`
  const nextPage = `/page/${(currentPage + 1).toString()}`

  const seo = {
    title: isFirst ? siteDesc : `${siteDesc} [Página ${currentPage}]`,
    description: isFirst
      ? description
      : `${description} [Página ${currentPage}]`,
  }

  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} />
      <Blog.list>
        {posts.map(({ node }) => (
          <Article node={node} key={node.id} />
        ))}

        <Blog.pagination role="nav">
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Página {currentPage - 1}
            </Link>
          )}

          {!isLast && (
            <Link to={nextPage} rel="next">
              Página {currentPage + 1} →
            </Link>
          )}
        </Blog.pagination>
      </Blog.list>
    </Layout>
  )
}

export default BlogTemplate

// filter: { frontmatter: { layout: { eq: "post" } } }
export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        description
        siteDesc
      }
    }
    postsResults: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
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
    }
  }
`
