import styled from '@emotion/styled'
import React, { Component, Fragment } from 'react'
import {
  HomeLink,
  Link,
  Paragraph,
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


class NotFound extends Component {
  static async getInitialProps({ res, err }) {
    const errorCode = err && err.statusCode ? err.statusCode : 404
    const statusCode = res && res.statusCode ? res.statusCode : errorCode
    const statusMessage = statusCode === 404 ? 'Not Found.' : 'An unexpected error has occurred.'
    return { statusCode, statusMessage }
  }

  render() {
    const { statusCode, statusMessage } = this.props
    return (
      <Fragment>
        <Main>
          <TitleWithMark>
            {`${statusCode} ${statusMessage}`}
          </TitleWithMark>
          <Paragraph css={{ marginTop: '2rem' }}>
            <Link href="/" title="🏔">mkitt.net</Link>
            <span> | </span>
            <Link href="https://github.com/mkitt" title="@mkitt">github/mkitt</Link>
            <span> | </span>
            <Link href="mailto:hello@mkitt.net" title="👋">hello@mkitt.net</Link>
          </Paragraph>
        </Main>
        <HomeLink />
      </Fragment>
    )
  }
}

export default NotFound
