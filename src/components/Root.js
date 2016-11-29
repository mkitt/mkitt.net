import React, { PropTypes } from 'react'
import { insertRule } from 'glamor'
import { baseStyles } from '../css'
import Head from '../components/Head'
import Body from '../components/Body'

insertRule(baseStyles)

const Root = props =>
  <html lang="en">
    <Head {...props} />
    <Body {...props} >
      {props.children}
    </Body>
  </html>

Root.propTypes = {
  children: PropTypes.node,
}

export default Root

