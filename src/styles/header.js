import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from './layout';
import theme from './theme';

export default {
  main: styled.header`
    display: block;
    margin: 0;
    padding: 2.5rem 0;
    position: relative;
    border-bottom: 1px solid ${theme.light.borderColor};
    &::before {
      content: '';
      display: block;
      background: ${theme.light.blackColor};
      position: absolute;
      height: 5px;
      top: 0;
      left: 0;
      right: 0;
    }
    @media (min-width: 720px) {
      padding: 4rem 0;
    }
  `,

  inner: styled(Layout.container)`
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: center;
    @media (min-width: 720px) {
      flex-direction: row;
      justify-content: space-between;
    }
  `,

  brandStyles: css`
    color: ${theme.light.textColor};
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.1;
    text-align: center;
    text-decoration: none;
    margin-top: 1.2rem;
    @media (min-width: 720px) {
      line-height: 1.4;
      font-size: 1.2rem;
      text-align: left;
      margin-top: 0;
    }
  `,

  desc: styled.small`
    display: block;
    font-size: 60%;
    font-style: italic;
    font-weight: 400;
    opacity: 0.6;
    color: ${theme.light.secondaryColor};
    position: relative;
    @media (min-width: 720px) {
      font-size: 70%;
      display: inline-block;
    }
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
  `,
};
