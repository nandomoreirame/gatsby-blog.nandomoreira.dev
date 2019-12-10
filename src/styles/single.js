import styled from '@emotion/styled'
import Layout from './layout'

export default {
  header: styled(Layout.container)`
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    text-align: center;
    @media (min-width: 480px) {
      margin-top: 5rem;
      margin-bottom: 5rem;
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
    blockquote {
      display: block;
      margin-left: auto;
      margin-right: auto;
      max-width: 800px;
      padding-left: 1.2rem;
      padding-right: 1.2rem;
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
      &::after {
        content: '';
        position: absolute;
        z-index: -1;
        top: 70%;
        left: -0.1px;
        right: -0.1px;
        bottom: 0;
        transition: top 0.1s ease-in-out;
        background-color: rgba(255, 250, 150, 0.8);
      }
      &:hover::after,
      &:focus::after,
      &:active::after {
        top: 0;
      }
    }
  `,

  footer: styled(Layout.container)``,

  comments: styled.aside`
    padding: 2.5rem 0 0;
  `,

  commentsInner: styled(Layout.container)``,
}
