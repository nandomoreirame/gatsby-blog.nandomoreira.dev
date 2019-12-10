import React from 'react'
import { css } from '@emotion/core'
import Brand from '@components/brand'
import Nav from '@components/nav'
import { Header } from '@styles'
import { iHeaderProps } from '@types'

const SiteHeader = ({ title, desc }: iHeaderProps) => (
  <Header.main>
    <Header.inner>
      <Brand title={title} desc={desc} />
      <Nav
        items={[
          {
            title: 'Sobre',
            link: 'https://nandomoreira.dev/sobre',
          },
          {
            title: 'Projetos',
            link: 'https://nandomoreira.dev/portfolio',
          },
          {
            title: 'Contato',
            link: 'https://nandomoreira.dev/contato',
          },
        ]}
      />
    </Header.inner>
  </Header.main>
)

export default SiteHeader
