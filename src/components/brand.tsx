import React from 'react'
import { Link } from 'gatsby'
import { Header } from '@styles'

export default ({ title, desc }) => (
  <Link to="/" css={Header.brandStyles}>
    {title} {desc && <Header.desc>{desc}</Header.desc>}
  </Link>
)
