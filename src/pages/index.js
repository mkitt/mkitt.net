import React, { Component, Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import {
  HeadingRenderer,
  HomeLink,
  Link,
  MainLanding,
  ParagraphLanding,
  TitleWithMark,
} from '../components'

const headings = [TitleWithMark]

const components = {
  heading: (props) => <HeadingRenderer headings={headings} {...props} />,
  link: (props) => <Link {...props} />,
  linkReference: (props) => <Link {...props} />,
  paragraph: (props) => <ParagraphLanding {...props} />,
  root: (props) => <MainLanding {...props} />,
}

class Index extends Component {
  static async getInitialProps({ query }) {
    return { source: query.source }
  }

  render() {
    const { source } = this.props
    return (
      <Fragment>
        <ReactMarkdown renderers={components} skipHtml source={source} />
        <HomeLink />
      </Fragment>
    )
  }
}

export default Index
