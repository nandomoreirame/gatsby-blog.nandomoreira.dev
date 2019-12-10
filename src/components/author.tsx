import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Image from '@components/image'
import Social from '@components/social'
import { AuthorBox } from '@styles'

const Author = () => (
  <StaticQuery
    query={authorQuery}
    render={({ site, avatar }) => {
      const { author } = site.siteMetadata

      return (
        <AuthorBox.aside>
          <AuthorBox.inner>
            <Image node={avatar} alt={`Foto de ${author.name}`} />
            <AuthorBox.bio>
              <h3>
                <a
                  href={author.site}
                  title={`ir ao site de ${author.name}`}
                  data-label={`ir ao site de ${author.name}`}
                  target="_blank"
                >
                  {author.name}
                </a>
              </h3>
              <p>{author.bio}</p>
              <Social items={author.social} />
            </AuthorBox.bio>
          </AuthorBox.inner>
        </AuthorBox.aside>
      )
    }}
  />
)

const authorQuery = graphql`
  query AuthorQuery {
    avatar: file(absolutePath: { regex: "/avatar.png/" }) {
      childImageSharp {
        fixed(width: 160, height: 160, quality: 90) {
          width
          height
          src
          srcSet
          srcWebp
          srcSetWebp
        }
      }
    }
    site {
      siteMetadata {
        author {
          bio
          email
          name
          phone
          site
          social {
            twitter
            instagram
            behance
            github
            dribbble
            facebook
            linkedin
            codepen
            npm
            paypal
          }
        }
      }
    }
  }
`

export default Author
