import styled from '@emotion/styled'
import React, { Component, Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import {
  HeadingRenderer,
  HomeLink,
  Link,
  ParagraphWithIntro,
  TitleWithMark,
} from './_components'

const Main = styled.main({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '43rem',
  minHeight: 'calc(100vh - 5rem)',
  padding: '1rem',
})

const headings = [
  TitleWithMark,
]

const components = {
  heading: props => <HeadingRenderer headings={headings} {...props} />,
  link: props => <Link {...props} />,
  linkReference: props => <Link {...props} />,
  paragraph: props => <ParagraphWithIntro {...props} />,
  root: props => <Main {...props} />,
}

class Index extends Component {
  static async getInitialProps({ query }) {
    return { source: query.source }
  }

  render() {
    const { source } = this.props
    return (
      <Fragment>
        <ReactMarkdown
          renderers={components}
          skipHtml
          source={source}
        />
        <HomeLink />
      </Fragment>
    )
  }
}

export default Index
