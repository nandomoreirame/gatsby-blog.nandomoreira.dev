import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from '@components/image';
import Social from '@components/social';
import { AuthorBox } from '@styles';

/* eslint @typescript-eslint/no-use-before-define: "off"  */
const AuthorComponent = () => (
  <StaticQuery
    query={authorQuery}
    render={({ site, avatar }) => {
      const { author } = site.siteMetadata;

      return (
        <aside itemScope itemType="http://schema.org/Person" css={AuthorBox.aside}>
          <AuthorBox.inner>
            <meta itemProp="jobTitle" content="desenvolvedor front-end" />
            <meta itemProp="worksFor" content="Onedev.studio" />
            <Image node={avatar} alt={`Foto de ${author.name}`} itemProp="image" />
            <AuthorBox.bio>
              <h3>
                <a
                  href={author.site}
                  title={`ir ao site de ${author.name}`}
                  data-label={`ir ao site de ${author.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  itemProp="name"
                >
                  {author.name}
                </a>
              </h3>
              <p role="presentation" itemProp="description">
                {author.bio}
              </p>
              <Social items={author.social} />
            </AuthorBox.bio>
          </AuthorBox.inner>
        </aside>
      );
    }}
  />
);

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
`;

export default AuthorComponent;
