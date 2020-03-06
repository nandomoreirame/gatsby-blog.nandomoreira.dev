import React from 'react';

export interface LayoutInterface {
  children: any; // eslint-disable-line
}

export interface HeaderInterface {
  title?: string;
  desc?: string;
}

export interface SeoInterface {
  title: string;
  description?: string;
  lang?: string;
  meta?: object[];
}

interface GatsbyImageInterface {
  src: string;
  base64?: string;
  srcWebp?: string;
  srcSet?: string;
  srcSetWebp?: string;
  tracedSVG?: string;
}

interface GatsbyImageFluidInterface extends GatsbyImageInterface {
  maxHeight: number;
  maxWidth: number;
}

interface GatsbyImageFixedInterface extends GatsbyImageInterface {
  height: number;
  width: number;
}

export interface AuthorInterface {
  authorsPage?: boolean;
  featured?: boolean;
  name: string;
  path: string;
  bio: string;
  avatar: {
    image: GatsbyImageFluidInterface;
    full: GatsbyImageFluidInterface;
  };
}

export interface ArticleInterface {
  path: string;
  authors: AuthorInterface[];
  excerpt: string;
  body: string;
  id: string;
  hero: {
    full: GatsbyImageFluidInterface;
    preview: GatsbyImageFluidInterface;
    regular: GatsbyImageFluidInterface;
    seo: string;
  };
  timeToRead: number;
  date: string;
}

export type TemplateTypes = React.FC<{
  pageContext: {
    article: ArticleInterface;
    authors: AuthorInterface[];
    mailchimp: boolean;
    next: ArticleInterface[];
  };
  data: Data;
}>;
