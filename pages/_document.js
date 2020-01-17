import React from 'react'
import Document, { Main, NextScript } from 'next/document'
import { cssGlobal } from './_components'

const description = 'User interface developer for web and mobile platforms.'
const icon = '/favicon.svg'
const image = '/apple-touch-icon.png'
const name = 'Matthew Kitt'
const url = 'https://mkitt.net'

const getTitle = pathname => {
  const path =
    pathname.includes('404') || pathname.includes('error') ? '404' : pathname
  return `mkitt | ${
    path === '/' ? ':wave:' : path.replace('/', ' ').replace(/\.[^/.]+$/, '')
  }`
}

class Doc extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const title = getTitle(ctx.pathname)
    return { ...initialProps, title }
  }

  render() {
    const { title } = this.props
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>{title}</title>
          <meta name="application-name" content={name} />
          <meta name="subject" content={description} />
          <meta name="name" itemProp="name" content={name} />
          <meta name="image" itemProp="image" content={image} />
          <meta name="url" itemProp="url" content={url} />
          <meta
            name="description"
            itemProp="description"
            content={description}
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={name} />
          <meta property="og:title" content={title} />
          <meta property="og:image" content={image} />
          <meta property="og:url" content={url} />
          <meta property="og:description" content={description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="referrer" content="always" />
          <meta name="robots" content="index, follow" />
          <link href={icon} color="#333" rel="mask-icon" />
          <link rel="prefetch" href="/" />
          <link rel="prefetch" href="/resume" />
          <link rel="prefetch" href="https://github.com/mkitt" />
          <style dangerouslySetInnerHTML={{ __html: cssGlobal }} />
        </head>
        <body>
          <Main />
          {process.env.NODE_ENV === 'development' && <NextScript />}
        </body>
      </html>
    )
  }
}

export default Doc
