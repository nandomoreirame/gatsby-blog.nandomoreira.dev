import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Layout from './layout';

export default {
  aside: css`
    display: block;
    margin: 2rem auto 0;
    background-color: #fafafa;
    padding: 2rem;
  `,

  inner: styled(Layout.container)`
    display: block;
    text-align: center;
    .gatsby-image-wrapper {
      margin-bottom: 1.2rem;
    }

    @media (min-width: 420px) {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: left;
      .gatsby-image-wrapper {
        flex: 1 0 160px;
      }
    }
  `,

  bio: styled.div`
    display: block;
    padding: 0;
    margin-left: 0;
    h3 {
      margin: 0 0 0.5rem;
      font-size: 1.4rem;
    }
    p {
      margin-top: 0;
    }
    @media (min-width: 420px) {
      margin-left: 2rem;
    }
  `,
};
