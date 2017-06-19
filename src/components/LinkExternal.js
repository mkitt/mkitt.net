// @flow
import React from 'react'

type Props = {
  children: React.Element<*>,
  href: string,
}

export default ({ children, href, ...props }: Props) => (
  <a href={href} rel="noopener noreferrer" target="_blank" {...props}>
    {children}
  </a>
)

