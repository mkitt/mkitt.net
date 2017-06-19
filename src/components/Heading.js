// @flow
import React from 'react'
import { css } from '../styles/jss'

type Props = {
  children: React.Element<*>,
}

const stickyStyle = css({
  position: 'sticky',
  top: '0.75rem',
  zIndex: 20,
})

export default ({ children, ...props }: Props) => (
  <h2 className={stickyStyle} {...props}>{children}</h2>
)

