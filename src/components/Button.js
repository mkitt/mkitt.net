// @flow
import React from 'react'

type Props = {
  children: React.Element<*>,
}

export default ({ children, ...props }: Props) => (
  <button {...props} type="button">{children}</button>
)

