import React, { PropTypes } from 'react'
import Navbar from './Navbar'

const Body = props =>
  <body>
    {props.children}
    <Navbar />
  </body>

Body.propTypes = {
  children: PropTypes.node,
}

export default Body

