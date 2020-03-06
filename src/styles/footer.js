import styled from '@emotion/styled';

export default {
  main: styled.footer`
    background-color: #fafafa;
    display: block;
    margin: 2.5rem auto 0;
    padding: 2.5rem 2rem;
    text-align: center;
    @media (min-width: 420px) {
      margin: 5rem auto 0;
      padding: 5rem 2rem;
    }
  `,

  inner: styled.footer`
    color: #9b9b9b;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    > div {
      align-items: center;
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
      a {
        line-height: 1.2;
        text-align: center;
      }
      a,
      small {
        display: block;
      }
    }
    p {
      font-size: 0.7rem;
      font-family: 'Montserrat', sans-serif;
      a {
        font-weight: 700;
      }
    }
  `,
};
