// @flow
import React, { Component } from 'react'
import { Copy, Layout, Link, Main, Title } from './_components'

type Props = {
  statusCode: number,
  statusMessage: number,
}

type InitialProps = {
  err: { statusCode: number },
  res: { statusCode: number },
}

export default class extends Component<Props> {
  static async getInitialProps({ res, err }: InitialProps) {
    const errorCode = err && err.statusCode ? err.statusCode : 404
    const statusCode = res && res.statusCode ? res.statusCode : errorCode
    const statusMessage = statusCode === 404 ? 'Not Found.' : 'An unexpected error has occurred.'
    return { statusCode, statusMessage }
  }

  render() {
    return (
      <Layout>
        <Main>
          <Title>{this.props.statusCode}</Title>
          <Copy>{this.props.statusMessage}</Copy>
          <Copy>
            <Link href="https://mkitt.net" title="mkitt.net">mkitt.net</Link>
            <span> | </span>
            <Link href="https://github.com/mkitt" title="@mkitt">github/mkitt</Link>
            <span> | </span>
            <Link href="mailto:hello@mkitt.net" title="hello">hello@mkitt.net</Link>
          </Copy>
        </Main>
      </Layout>
    )
  }
}
