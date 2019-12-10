import React from 'react'

export interface iLayoutProps {
  children: any
  props: any
}

export interface iHeaderProps {
  title: string
  desc: string
}

interface iGatsbyImage {
  src: string
  base64?: string
  srcWebp?: string
  srcSet?: string
  srcSetWebp?: string
  tracedSVG?: string
}

interface iGatsbyImageFluid extends iGatsbyImage {
  maxHeight: number
  maxWidth: number
}

interface iGatsbyImageFixed extends iGatsbyImage {
  height: number
  width: number
}

export interface iAuthor {
  authorsPage?: boolean
  featured?: boolean
  name: string
  path: string
  bio: string
  avatar: {
    image: iGatsbyImageFluid
    full: iGatsbyImageFluid
  }
}

export interface iArticle {
  path: string
  authors: iAuthor[]
  excerpt: string
  body: string
  id: string
  hero: {
    full: iGatsbyImageFluid
    preview: iGatsbyImageFluid
    regular: iGatsbyImageFluid
    seo: string
  }
  timeToRead: number
  date: string
}

export type Template = React.FC<{
  pageContext: {
    article: iArticle
    authors: iAuthor[]
    mailchimp: boolean
    next: iArticle[]
  }
  data: Data
}>
