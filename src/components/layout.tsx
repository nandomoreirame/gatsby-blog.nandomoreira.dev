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

const Layout = ({ children, ...props }: iLayoutProps) => {
  const data = useStaticQuery(graphql`
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
    <div {...props}>
      <Global styles={globalStyles} />
      <SiteHeader
        title={data.site.siteMetadata.siteName}
        desc={data.site.siteMetadata.siteDesc}
      />
      <main id="content">{children}</main>
      <SiteFooter
        title={data.site.siteMetadata.siteName}
        desc={data.site.siteMetadata.siteDesc}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
