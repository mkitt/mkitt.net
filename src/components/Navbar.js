// @flow
import React from 'react'
import { compose, hover } from 'glamor'
import {
  alignRight,
  bgcWhite,
  colorBlue,
  decorateNone,
  fixed,
  inlineBlock,
  transitionColor,
  zIndex1,
} from '../styles/jso'

const navStyles = compose(
  fixed,
  { top: 0, right: 0, left: 0 },
  zIndex1,
  { height: '3.125rem' },
  { padding: '1rem' },
  alignRight,
  bgcWhite,
)

const linkStyles = compose(
  inlineBlock,
  { fontFamily: 'Menlo, Monaco, Lucida Console, Bitstream Vera Sans Mono, Courier New, monospace' },
  { fontSize: '0.8125rem' },
  decorateNone,
  transitionColor,
  hover(colorBlue),
)

export default() =>
  <nav className={navStyles}>
    <a className={linkStyles} href="/">mkitt.net</a>
  </nav>

