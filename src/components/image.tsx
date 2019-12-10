import React from 'react'
import GatsbyImage from 'gatsby-image'

export default ({ node, ...props }) => {
  if (!node) return null

  // eslint-disable-next-line jsx-a11y/alt-text
  let image = <img src={node.publicURL} {...props} />

  if (node.childImageSharp && node.childImageSharp.fluid) {
    image = <GatsbyImage fluid={node.childImageSharp.fluid} {...props} />
  }

  if (node.childImageSharp && node.childImageSharp.fixed) {
    image = <GatsbyImage fixed={node.childImageSharp.fixed} {...props} />
  }

  if (node.childImageSharp && node.childImageSharp.sizes) {
    image = <GatsbyImage sizes={node.childImageSharp.sizes} {...props} />
  }

  return image
}
