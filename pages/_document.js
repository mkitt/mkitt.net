// @flow
import React from 'react'
import Document, { Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'
import { color, cssGlobal } from './_components'

const isDevelopment = process.env.NODE_ENV === 'development'

const getTitle = (pathname) => {
  const path = pathname.includes('404') || pathname.includes('error') ? '404' : pathname
  return `mkitt | ${path === '/' ? ':wave:' : path.replace('/', ' ').replace(/\.[^/.]+$/, '')}`
}

type InitialProps = {
  pathname: string,
  renderPage: () => {
    html: {},
  },
}

type Props = {
  __NEXT_DATA__: {
    ids: ?Array<string>,
  },
  css: string,
  description?: string,
  icon?: string,
  ids: ?Array<string>,
  image?: string,
  name?: string,
  title: string,
  url?: string,
}

class App extends Document<Props> {
  static getInitialProps({ pathname, renderPage }: InitialProps) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    const title = getTitle(pathname)
    return { ...page, ...styles, title }
  }

  constructor(props: Props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids != null && __NEXT_DATA__ != null) {
      __NEXT_DATA__.ids = ids
    }
  }

  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>{this.props.title}</title>
          <meta name="application-name" content={this.props.name} />
          <meta name="subject" content={this.props.description} />
          <meta name="name" itemProp="name" content={this.props.name} />
          <meta name="image" itemProp="image" content={this.props.image} />
          <meta name="url" itemProp="url" content={this.props.url} />
          <meta name="description" itemProp="description" content={this.props.description} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={this.props.name} />
          <meta property="og:title" content={this.props.title} />
          <meta property="og:image" content={this.props.image} />
          <meta property="og:url" content={this.props.url} />
          <meta property="og:description" content={this.props.description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="referrer" content="always" />
          <meta name="robots" content="index, follow" />
          <link href={this.props.icon} color={color} rel="mask-icon" />
          { /* eslint-disable-next-line react/no-danger */ }
          <style dangerouslySetInnerHTML={{ __html: cssGlobal + this.props.css }} />
        </head>
        <body>
          <Main />
          { isDevelopment && <NextScript /> }
        </body>
      </html>
    )
  }
}

App.defaultProps = {
  description: 'User interface developer for web and mobile platforms.',
  icon: '/favicon.svg',
  image: '/apple-touch-icon.png',
  name: 'Matthew Kitt',
  url: 'https://mkitt.net',
}

export default App
