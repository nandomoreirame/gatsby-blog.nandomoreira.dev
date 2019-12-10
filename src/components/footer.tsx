import React from 'react'
import Brand from '@components/brand'
import { Footer } from '@styles'

export default ({ title, desc }) => (
  <Footer.main>
    <Footer.inner>
      <div>
        <Brand title={title} desc={desc} />
      </div>
      <p>
        Desenvolvido em{' '}
        <span itemScope itemType="https://schema.org/PostalAddress">
          Curitiba-PR, Brasil
        </span>{' '}
        com o <span data-tooltip="Feito com o coração">♥️</span> por{' '}
        <strong>Fernando Moreira</strong>, usando{' '}
        <a
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip="Desenvolvido usando React com Gatsby"
        >
          Gatsby
        </a>{' '}
        e hospedado no{' '}
        <a
          href="https://netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip="Hospedado no Netlify"
        >
          Netlify
        </a>
        . Veja o código no{' '}
        <a
          href="https://github.com/nandomoreirame/blog.nandomoreira.dev"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip="Veja o código no Github"
        >
          Github
        </a>
        .
      </p>
    </Footer.inner>
  </Footer.main>
)
