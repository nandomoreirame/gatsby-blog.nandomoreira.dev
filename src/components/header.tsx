import React from 'react'
import { css } from '@emotion/core'
import Brand from '@components/brand'
import { Header } from '@styles'
import { iHeaderProps } from '@types'

const SiteHeader = ({ title, desc }: iHeaderProps) => (
  <Header.main>
    <Header.inner>
      <Brand title={title} desc={desc} />
    </Header.inner>
  </Header.main>
)

export default SiteHeader
