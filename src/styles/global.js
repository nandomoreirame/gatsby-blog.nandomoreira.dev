import { css } from '@emotion/core'

const baseFontFamily = `Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Ubuntu, Roboto, Helvetica, 'Helvetica Neue', Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`

export default css`
  :root {
    --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
    --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
  }
  @font-face {
    font-family: ${baseFontFamily};
    font-weight: 400;
    font-style: normal;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    font-size: inherit;
  }
  :root {
    -moz-osx-font-smoothing: grayscale;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    cursor: default;
    font-family: sans-serif;
    font-size: 18px;
    line-height: 1.4;
    text-rendering: optimizeLegibility;
  }
  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
    width: 100%;
  }
  body {
    -moz-osx-font-smoothing: grayscale;
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-kerning: normal;
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    color: #4a4a4a;
    font-family: 'Nunito', ${baseFontFamily};
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-kerning: normal;
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    word-wrap: break-word;
  }
  a,
  button {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    position: relative;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 800;
    font-family: 'Montserrat', ${baseFontFamily};
  }
  h1 {
    font-size: 2rem;
    @media (min-width: 420px) {
      font-size: 3rem;
    }
  }
  h2 {
    font-size: 1.2rem;
    @media (min-width: 420px) {
      font-size: 2rem;
    }
  }
  h3 {
    font-size: 1rem;
    @media (min-width: 420px) {
      font-size: 1.8rem;
    }
  }
  h4 {
    font-size: 0.8rem;
    @media (min-width: 420px) {
      font-size: 1.6rem;
    }
  }
  h5,
  h6 {
    font-size: 0.8rem;
    @media (min-width: 420px) {
      font-size: 1.4rem;
    }
  }
  strong,
  b {
    font-weight: 700;
  }
  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }
  input,
  textarea,
  select,
  button {
    font-family: inherit;
  }
  .underline {
    text-decoration: underline;
  }
  button,
  input,
  select,
  textarea {
    color: inherit;
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
  }
  fieldset,
  button {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
  }
  table {
    border-collapse: separate;
    border-spacing: 0;
  }
  audio:not([controls]) {
    display: none;
  }
  input {
    &:focus,
    &:active {
      outline: none;
    }
    &[type='number'] {
      width: auto;
    }
  }
  hr {
    border: none;
    border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.1);
    display: block;
    margin: 2.5rem 0;
    width: 100%;
  }
  blockquote {
    padding: 1.5625rem 0 1.5625rem 5.375rem;
    margin: 3.125rem 0;
    font-weight: 400;
    display: block;
    position: relative;
    pointer-events: none;
    &:after {
      content: "''";
      font: italic 18.75rem Arial, Serif, Georgia, serif;
      color: rgba(0, 0, 0, 0.045);
      position: absolute;
      top: -3.75rem;
      left: -1.875rem;
      z-index: 0;
    }
    small {
      display: block;
      color: #898989;
      &::before {
        content: ' ⏤ ';
      }
    }
    p {
      font: italic 1.65rem/1.5 $font-family-base;
      color: rgba(0, 0, 0, 0.65);
      margin: 0;
      padding: 0;
      position: relative;
      font-size: 1.25rem;
      z-index: 1;
      pointer-events: all;
    }
  }
  code {
    background-color: hsla(0, 0%, 0%, 0.04);
    font-size: 0.8rem;
    border-radius: 0.4rem;
    font-family: 'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono',
      'Liberation Mono', Menlo, Courier, monospace;
    padding: 0.5rem 0;
  }
  pre code {
    background: none;
    line-height: 1.42;
  }
  code:before,
  code:after,
  tt:before,
  tt:after {
    letter-spacing: -0.2em;
    content: ' ';
  }
  pre code:before,
  pre code:after,
  pre tt:before,
  pre tt:after {
    content: '';
  }
  .gatsby-highlight {
    background-color: #1d1f21;
    border-radius: 0.4rem;
    max-width: 1000px;
    margin: 0.5rem auto;
    padding: 0.5rem 1rem;
    overflow: auto;
    pre[class*='language-'].line-numbers {
      padding: 0;
      padding-left: 2.8em;
      overflow: initial;
    }
  }
`
