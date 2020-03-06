import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Global } from '@emotion/core';
import { globalStyles } from '@styles';
import { LayoutInterface } from '@types';
import SiteHeader from './header';
import SiteFooter from './footer';

const LayoutComponent = ({ children }: LayoutInterface) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          siteName
          siteDesc
        }
      }
    }
  `);

  const { siteName, siteDesc } = site.siteMetadata;

  return (
    <Fragment>
      <Global styles={globalStyles} />
      <SiteHeader title={siteName} desc={siteDesc} />
      <main id="content">{children}</main>
      <SiteFooter title={siteName} desc={siteDesc} />
    </Fragment>
  );
};

export default LayoutComponent;
