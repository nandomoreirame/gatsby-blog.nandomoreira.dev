import React from 'react';
import GatsbyImage from 'gatsby-image';

const ImageComponent = ({ node, ...props }) => {
  if (!node) return null;

  let image = <img src={node.publicURL} {...props} />;

  if (node.childImageSharp && node.childImageSharp.fluid) {
    image = <GatsbyImage fluid={node.childImageSharp.fluid} {...props} />;
  }

  if (node.childImageSharp && node.childImageSharp.fixed) {
    image = <GatsbyImage fixed={node.childImageSharp.fixed} {...props} />;
  }

  if (node.childImageSharp && node.childImageSharp.sizes) {
    image = <GatsbyImage sizes={node.childImageSharp.sizes} {...props} />;
  }

  return image;
};

export default ImageComponent;
