import styled from '@emotion/styled';
import Layout from './layout';
import theme from './theme';

export default {
  item: styled.article`
    margin: 0;
    padding: 0;
    a {
      text-align: center;
      display: block;
      margin: 0;
      padding: 2.5rem 0;
      border-bottom: 1px solid ${theme.light.borderColor};
      transition: box-shadow 0.2s ease-in-out;
      @media (min-width: 420px) {
        padding: 5rem 0;
      }
      &::after {
        display: none;
      }
      &:hover,
      &:focus,
      &:active {
        background-color: #fff;
        /* box-shadow: 0 2px 43px -4px ${theme.light.borderColor}; */
      }
    }
  `,

  header: styled(Layout.container)`
    margin-bottom: 1.5rem;
  `,

  footer: styled(Layout.container)`
    display: block;
    margin-top: 1.5rem;
  `,

  title: styled.h1`
    color: #1e1e1e;
    font-size: 1.4rem;
    line-height: 1.2;
    margin: 0 0 1.6rem;
    @media (min-width: 420px) {
      font-size: 2.4rem;
    }
  `,

  image: styled.img`
    display: block;
    max-width: 100%;
    height: auto;
    width: 100%;
  `,

  meta: styled(Layout.container)`
    display: block;
    margin: 0.5rem 0 0;
    font-size: 0.8rem;
    font-style: italic;
    color: ${theme.light.textColor};
    opacity: 0.65;
    .divider {
      display: inline-block;
      margin: 0 0.5rem;
      &::before {
        content: '|';
      }
    }
  `,

  excerpt: styled(Layout.container)`
    color: #4a4a4a;
    line-height: 1.4;
    font-size: 1rem;
    @media (min-width: 420px) {
      line-height: 1.8;
      font-size: 1.2rem;
    }
  `,
};
