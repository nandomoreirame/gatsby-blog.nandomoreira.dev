/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Global } from '@emotion/core'

import SiteHeader from './header'
import SiteFooter from './footer'
import { globalStyles } from '@styles'
import { iLayoutProps } from '@types'

const Layout = ({ children }: iLayoutProps) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          siteName
          siteDesc
        }
      }
    }
  `)

  return (
    <>
      <Global styles={globalStyles} />
      <SiteHeader
        title={site.siteMetadata.siteName}
        desc={site.siteMetadata.siteDesc}
      />
      <main id="content">{children}</main>
      <SiteFooter
        title={site.siteMetadata.siteName}
        desc={site.siteMetadata.siteDesc}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
