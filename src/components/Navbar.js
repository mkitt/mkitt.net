import React from 'react'
import { style } from 'glamor'

const navStyles = style({
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

const Navbar = () =>
  <nav className={navStyles}>
    <a href="/">mkitt.net</a>
  </nav>

export default Navbar

