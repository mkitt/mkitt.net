import React, { PropTypes } from 'react'

/* eslint-disable react/no-danger */
const Head = ({ avatar, css, description, name, title, url }) =>
  <head>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="application-name" content={name} />
    <meta name="subject" content={description} />
    <meta name="name" itemProp="name" content={name} />
    <meta name="image" itemProp="image" content={avatar} />
    <meta name="url" itemProp="url" content={url} />
    <meta name="description" itemProp="description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={name} />
    <meta property="og:title" content={title} />
    <meta property="og:image" content={avatar} />
    <meta property="og:url" content={url} />
    <meta property="og:description" content={description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="referrer" content="always" />
    <meta name="robots" content="index, follow" />
    <style dangerouslySetInnerHTML={{ __html: css }} />
  </head>
/* eslint-enable react/no-danger */

Head.propTypes = {
  avatar: PropTypes.string,
  css: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
}

export default Head

