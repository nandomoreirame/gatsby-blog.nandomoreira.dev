import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

export default {
  main: styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  link: styled(props => <Link {...props} />)`
    display: inline-block;
    margin: 0;
    opacity: 0.75;
    padding: 0.15rem 0.2rem;
    position: relative;
    text-transform: lowercase;
    font-size: 0.9rem;
    &:not(:last-child) {
      margin-right: 1rem;
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
      background-color: rgba(255, 250, 150, 0.4);
    }
    &:hover::after,
    &:focus::after,
    &:active::after,
    &[aria-current='page'] {
      top: 0;
      background-color: rgba(255, 250, 150, 0.8);
    }
  `,
};
