import React from 'react';
import { Link } from 'gatsby';
import { Header } from '@styles';

const BrandComponent = ({ title, desc }) => (
  <Link to="/" css={Header.brandStyles} role="link">
    {title} {desc && <Header.desc>{desc}</Header.desc>}
  </Link>
);

export default BrandComponent;
