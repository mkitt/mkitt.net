// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Readme } from './data.json'
import { Copy, Layout, Link, Main, Title } from './_components'

const components = {
  heading: (props: { children: Node, level: number }) => (
    props.level === 1 ?
      <Title {...props} /> :
      <ReactMarkdown.renderers.heading {...props} />
  ),
  link: Link,
  linkReference: Link,
  paragraph: Copy,
  root: Main,
}

export default () => (
  <Layout>
    <ReactMarkdown
      skipHtml
      renderers={components}
      source={Readme}
    />
  </Layout>
)
