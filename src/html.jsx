import React from 'react'
import PropTypes from 'prop-types'

const noscriptStyle = `
  .gatsby-noscript {
    font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 16px;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: block;
    padding: 15px;
    background: #f00;
    color: #fff;
    z-index: 10000;
  }
`
export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          <style>{noscriptStyle}</style>
          <div className="gatsby-noscript">
            Este site funciona melhor com o JavaScript ativado. Por favor,
            ative-o.
          </div>
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
