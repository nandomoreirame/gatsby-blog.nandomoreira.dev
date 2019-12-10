import React from 'react'
import SEO from '@components/seo'
import { Layout } from '@styles'

const NotFoundPage = () => (
  <Layout.error>
    <div>
      <SEO
        title="404: Not found"
        description="You just hit a route that doesn&#39;t exist... the sadness."
      />
      <h1>404</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout.error>
)

export default NotFoundPage
