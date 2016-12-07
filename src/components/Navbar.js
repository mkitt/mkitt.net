// @flow
import React from 'react'
import { style } from 'glamor'
import type { JSS } from '../types/flowtypes'

const navStyles: JSS = style({
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  zIndex: 1,
  height: '3.125rem',
  padding: '1rem',
  fontFamily: 'Menlo, Monaco, Lucida Console, Bitstream Vera Sans Mono, Courier New, monospace',
  fontSize: '0.8125rem',
  textAlign: 'right',
  backgroundColor: '#fff',
})

export default() =>
  <nav className={navStyles}>
    <a href="/">mkitt.net</a>
  </nav>

