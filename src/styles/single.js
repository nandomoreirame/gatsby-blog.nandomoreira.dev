import styled from '@emotion/styled';
import Layout from './layout';
import theme from './theme';

export default {
  header: styled(Layout.container)`
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    text-align: center;
    position: relative;
    @media (min-width: 480px) {
      margin-top: 5rem;
      margin-bottom: 2.5rem;
      padding-bottom: 2.5rem;
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 60px;
      height: 0.25rem;
      transform: translate3d(-50%, 0, 0);
      background: ${theme.light.borderColor};
    }
  `,

  title: styled.h1`
    display: block;
    font-size: 1.6rem;
    line-height: 1.1;
    @media (min-width: 420px) {
      font-size: 2.6rem;
    }
  `,

  meta: styled.small`
    display: block;
    margin: 0.5rem 0 0;
    font-style: italic;
    opacity: 0.75;
    margin-bottom: 10px;
    .divider {
      display: inline-block;
      margin: 0 0.5rem;
      &::before {
        content: '|';
      }
    }
  `,

  content: styled.div`
    display: block;
    p,
    h2,
    h3,
    h4,
    h5,
    h6,
    ul,
    ol,
    table,
    blockquote,
    .gatsby-resp-image-figure {
      display: block;
      margin-left: auto;
      margin-right: auto;
      max-width: 800px;
      padding-left: 1.2rem;
      padding-right: 1.2rem;
    }
    .gatsby-resp-image-figure {
      max-width: 1000px;
      text-align: center;
      padding: 0;
      margin-bottom: 2.5rem;
    }
    .gatsby-resp-image-figcaption {
      color: rgba(0, 0, 0, 0.5);
      display: inline-block;
      font-size: 75%;
      font-style: italic;
      margin-top: 1rem;
    }
    ul,
    ol {
      padding-left: 2.4rem;
      li {
        padding: 0;
      }
    }
    p {
      margin-bottom: 1.6rem;
      line-height: 1.7;
    }
    li,
    blockquote {
      p {
        padding: 0;
        margin: 0;
      }
    }
    a:not(.gatsby-resp-image-link) {
      text-decoration: none;
      position: relative;
      opacity: 0.75;
      text-decoration: underline;
      &::after {
        content: '';
        position: absolute;
        z-index: -1;
        top: 100%;
        left: -0.1px;
        right: -0.1px;
        bottom: 0;
        transition: top 0.12s ease-in-out;
        background-color: ${theme.light.highlightColor};
      }
      &:hover,
      &:focus,
      &:active {
        text-decoration: none;
        &::after {
          top: 0;
        }
      }
    }
  `,

  footer: styled(Layout.container)`
    border-top: 1px solid ${theme.light.borderColor};
    margin-top: 6rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  `,

  comments: styled.aside`
    padding: 2.5rem 0 0;
    margin: 2.5rem 0 5rem;
  `,

  commentsInner: styled(Layout.container)``,
};
