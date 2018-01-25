// @flow
import React from 'react'
import Copy from '../components/Copy'
import Heading from '../components/Heading'
import Main from '../components/Main'
import Section from '../components/Section'
import Subheading from '../components/Subheading'
import { css, hover } from '../styles/jss'
import { colorBlue } from '../styles/jso'
import { MKIcon } from '../components/Icons'

const subheadingStyle = css({
  fontSize: 18,
})

const introStyle = css({
  maxWidth: 620,
  fontSize: 18,
  marginTop: 48,
  marginBottom: 24,
})

const copyStyle = css({
  maxWidth: 620,
  marginBottom: '0.5em',
  marginTop: 0,
})

const linkStyle = css(
  {
    transitionDuration: '0.4s',
    transitionProperty: 'color',
  },
  hover(colorBlue),
)

export default() => (
  <Main hasNavbar >
    <Section>
      <MKIcon width={120} height={60} />
      <Heading>Matthew Kitt</Heading>
      <Subheading className={subheadingStyle}>@mkitt</Subheading>
      <Copy className={introStyle}>
        Web and mobile app developer specializing in modular design systems,
        front-end architecture, product development &amp; team management.
      </Copy>
      <Copy className={copyStyle}>
        <span>&raquo; </span>
        <a className={linkStyle} href="https://github.com/mkitt">GitHub Profile</a>
      </Copy>
      <Copy className={copyStyle}>
        <span>&raquo; </span>
        <a className={linkStyle} href="mailto: hello@mkitt.net">hello@mkitt.net</a>
      </Copy>
    </Section>
  </Main>
)
