// @flow
import React from 'react'
import Navbar from './Navbar'

type Props = {
  children: React.Element<*>,
}

export default(props: Props) => (
  <body>
    {props.children}
    <Navbar />
  </body>
)
