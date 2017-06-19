// @flow
import React from 'react'
import Navbar from './Navbar'
import DevTool from './DevTool'

type Props = {
  children: React.Element<*>,
}

export default(props: Props) => (
  <body>
    {props.children}
    <Navbar />
    <DevTool />
  </body>
)

