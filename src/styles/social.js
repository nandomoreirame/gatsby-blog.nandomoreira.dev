import styled from '@emotion/styled'

export default {
  list: styled.ul`
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
  `,

  item: styled.li`
    display: inline-block;
    margin: 0 0 0.5rem;
    text-align: center;
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
    a {
      background-color: rgba(0, 0, 0, 0.1);
      transition: all 0.12s ease-in-out;
      display: inline-block;
      line-height: 1;
      padding: 0.5rem;
      border-radius: 0.25rem;

      &:hover,
      &:focus {
        background-color: rgba(0, 0, 0, 0.25);
      }
    }
  `,
}
