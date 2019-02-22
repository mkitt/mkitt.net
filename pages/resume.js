import styled from '@emotion/styled'
import React, { Component, Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import {
  Heading,
  HeadingRenderer,
  HomeLink,
  Link,
  List,
  ListItem,
  Paragraph,
  Rule,
  SubheadingWithMark,
  TitleWithMark,
} from './_components'

const Main = styled.main({
  position: 'relative',
  maxWidth: '52rem',
  marginRight: 'auto',
  marginLeft: 'auto',
  padding: '4rem 1rem 2rem',
  '@media print': {
    maxWidth: 'none',
    padding: '2rem 1rem 0 3.5rem',
  },
})

const StyledParagraph = styled(Paragraph)({
  fontSize: '0.875rem',
  '&:first-of-type': {
    fontSize: '1rem',
    marginTop: '1rem',
  },
  '&:first-of-type a': {
    fontWeight: 300,
  },
})

const headings = [
  TitleWithMark,
  Heading,
  SubheadingWithMark,
]

const components = {
  heading: props => <HeadingRenderer headings={headings} {...props} />,
  link: props => <Link {...props} />,
  linkReference: props => <Link {...props} />,
  list: List,
  listItem: ListItem,
  paragraph: props => <StyledParagraph {...props} />,
  root: props => <Main {...props} />,
  thematicBreak: props => <Rule {...props} />,
}

class Resume extends Component {
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

export default Resume
