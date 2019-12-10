import styled from '@emotion/styled'

export default {
  container: styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  `,

  single: styled.main`
    padding: 0;
  `,

  error: styled.main`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    text-align: center;
    h1 {
      font-size: 9rem;
    }
    p {
      font-size: 1.2rem;
    }
  `,
}
