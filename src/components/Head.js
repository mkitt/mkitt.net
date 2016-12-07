// @flow
import React from 'react'

type Props = {
  avatar: string,
  css: string,
  description: string,
  name: string,
  title: string,
  url: string,
}

/* eslint-disable react/no-danger */
export default (props: Props) =>
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
    <style dangerouslySetInnerHTML={{ __html: props.css }} />
  </head>
/* eslint-enable react/no-danger */

