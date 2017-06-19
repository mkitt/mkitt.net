// @flow
import React from 'react'
import { css } from '../styles/jss'

type Props = {
  children: React.Element<*>,
  hasNavbar?: boolean,
}

const baseStyle = css({
  paddingBottom: 50,
})

const hasNavbarStyle = css(
  { ...baseStyle },
  { paddingTop: 50 },
)

const Main = ({ children, hasNavbar, ...props }: Props) => (
  <main {...props} className={hasNavbar ? hasNavbarStyle : baseStyle} role="main">
    {children}
  </main>
)

Main.defaultProps = {
  hasNavbar: false,
}

export default Main

