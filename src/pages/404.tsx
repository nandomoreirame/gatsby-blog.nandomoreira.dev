import React from 'react'
import SEO from '@components/seo'
import { globalStyles, Layout } from '@styles'
import { Global } from '@emotion/core'

const NotFoundPage = () => (
  <>
    <Global styles={globalStyles} />
    <SEO
      title="Erro 404 - Página não encontrada"
      description="Você acabou de pegar uma rota que não existe... a que tristeza."
    />
    <Layout.error>
      <Layout.errorInner>
        <h1>404</h1>
        <p>Você acabou de pegar uma rota que não existe... a que tristeza.</p>
      </Layout.errorInner>
    </Layout.error>
  </>
)

export default NotFoundPage
