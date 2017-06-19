// @flow
import React from 'react'

type Props = {
  children: React.Element<*>,
}

export default ({ children, ...props }: Props) => (
  <h3 {...props}>{children}</h3>
)

