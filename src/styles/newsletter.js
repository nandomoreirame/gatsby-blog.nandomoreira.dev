import styled from '@emotion/styled';

export default {
  main: styled.aside`
    align-items: center;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 2.5rem 2rem;
    @media (min-width: 420px) {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
  `,

  inner: styled.div`
    text-align: center;
  `,

  iframe: styled.iframe`
    background-color: #fff;
    border: 1px solid #eee;
    height: 450px;
    width: 100%;
    @media (min-width: 420px) {
      width: 680px;
    }
  `,

  title: styled.h4`
    font-size: 1.6rem;
    margin: 0 auto 0.5rem;
    max-width: 560px;
    padding: 0 0.5rem;
    position: relative;
    display: inline-block;
    background-color: rgba(255, 250, 150, 0.4);
  `,

  description: styled.p`
    margin: 0 auto 1.6rem;
    font-size: 1.2rem;
    max-width: 560px;
  `,
};
