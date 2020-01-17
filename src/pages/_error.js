import React, { Component, Fragment } from 'react'
import {
  HomeLink,
  Link,
  MainLanding,
  ParagraphLanding,
  TitleWithMark,
} from '../components'

class NotFound extends Component {
  static async getInitialProps({ res, err }) {
    const errorCode = err && err.statusCode ? err.statusCode : 404
    const statusCode = res && res.statusCode ? res.statusCode : errorCode
    const statusMessage =
      statusCode === 404 ? 'Not Found.' : 'An unexpected error has occurred.'
    return { statusCode, statusMessage }
  }

  render() {
    const { statusCode, statusMessage } = this.props
    return (
      <Fragment>
        <MainLanding>
          <TitleWithMark>{`${statusCode} ${statusMessage}`}</TitleWithMark>
          <ParagraphLanding>
            <Link href="/" title="🏔">
              mkitt.net
            </Link>
            <span> | </span>
            <Link href="https://github.com/mkitt" title="@mkitt">
              github/mkitt
            </Link>
            <span> | </span>
            <Link href="mailto:hello@mkitt.net" title="👋">
              hello@mkitt.net
            </Link>
          </ParagraphLanding>
        </MainLanding>
        <HomeLink />
      </Fragment>
    )
  }
}

export default NotFound
