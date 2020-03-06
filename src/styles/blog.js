import styled from '@emotion/styled';
import Layout from './layout';

export default {
  list: styled.section``,

  pagination: styled(Layout.container)`
    margin: 2.5rem auto;
    padding: 1.2rem 0;
    text-align: center;
    a {
      color: #1e1e1e;
      display: block;
      font-family: 'Montserrat', sans-serif;
      font-size: 2rem;
      font-weight: 700;
      margin: 0 0 1.2rem;
      text-transform: lowercase;
      @media (min-width: 420px) {
        display: inline-block;
        margin: 0 1.2rem 0;
      }
    }
    @media (min-width: 420px) {
      margin: 5rem auto;
      padding: 1.2rem 0;
      align-items: center;
      display: flex;
      justify-content: center;
      text-align: left;
    }
  `,
};
