// @flow
import React from 'react'
import { insertRule } from 'glamor'

type Props = {
  avatar: string,
  css: string,
  description: string,
  name: string,
  title: string,
  url: string,
}

insertRule(`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  html {
    font: normal 400 100% / 1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    position: relative;
    margin: 0;
    overflow-x: hidden;
    color: #333;
    background-color: #fff;
  }
  ::selection {
    color: #fff;
    text-shadow: none;
    background: #000;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 300;
    line-height: 1.25;
  }
  a {
    color: inherit;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
  @media print {
    *, *:before, *:after {
      background: transparent !important;
      color: #000 !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }
    html {
      font-size: 11px;
    }
    nav {
      display: none;
    }
    pre {
      white-space: pre-wrap !important;
    }
    pre, blockquote {
      page-break-inside: avoid;
    }
    img[alt="matthew kitt"] {
      display: none;
    }
    img {
      page-break-inside: avoid;
    }
    p, h2, h3 {
      orphans: 3;
      widows: 3;
    }
    h2, h3 {
      page-break-after: avoid;
    }
    main {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
    .markdown {
      max-width: none !important;
    }
    .markdown h1 {
      position: static !important;
      margin-bottom: 0 !important;
      font-size: 15px !important;
    }
    .markdown h2 {
      padding-top: 5px !important;
      font-size: 14px !important;
    }
    .markdown h2 ~ h2 {
      margin-top: 5px !important;
    }
    .markdown h3 {
      padding-top: 5px !important;
      padding-left: 0 !important;
      font-size: 13px !important;
    }
    .markdown h4 {
      font-size: 12px !important;
      padding-left: 0 !important;
    }
    .markdown #the-firm-graphics,
    .markdown #the-firm-graphics + h4,
    .markdown #the-firm-graphics + h4 + p,
    .markdown #the-firm-graphics + h4 + p + p,
    .markdown #the-firm-graphics + h4 + p + p + p {
      display: none !important;
    }
  }
`.replace(/\n/g, ''))

/* eslint-disable react/no-danger */
export default (props: Props) => (
  <head>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{props.title}</title>
    <meta name="application-name" content={props.name} />
    <meta name="subject" content={props.description} />
    <meta name="name" itemProp="name" content={props.name} />
    <meta name="image" itemProp="image" content={props.avatar} />
    <meta name="url" itemProp="url" content={props.url} />
    <meta name="description" itemProp="description" content={props.description} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={props.name} />
    <meta property="og:title" content={props.title} />
    <meta property="og:image" content={props.avatar} />
    <meta property="og:url" content={props.url} />
    <meta property="og:description" content={props.description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="referrer" content="always" />
    <meta name="robots" content="index, follow" />
    <link href="/favicon.svg" color="#111" rel="mask-icon" />
    <style dangerouslySetInnerHTML={{ __html: props.css }} />
  </head>
)
/* eslint-enable react/no-danger */

