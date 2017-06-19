import React, { PropTypes } from 'react'
import Head from '../components/Head'
import Body from '../components/Body'

const Root = props => (
  <html lang="en">
    <Head {...props} />
    <Body {...props} >
      {props.children}
    </Body>
  </html>
)

Root.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Root

