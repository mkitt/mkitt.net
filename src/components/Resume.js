import React, { PropTypes } from 'react'
import { insertRule, style } from 'glamor'
import { proseStyles } from '../css'

insertRule(proseStyles)

const markdownStyles = style({
  position: 'relative',
  maxWidth: '45rem',
  padding: '3.125rem 1rem 1rem',
  margin: '0 auto',
})

/* eslint-disable react/no-danger */
const Resume = props =>
  <main role="main">
    <div
      className={markdownStyles}
      dangerouslySetInnerHTML={{ __html: props.content }}
    />
  </main>

Resume.propTypes = {
  content: PropTypes.string,
}

export default Resume
/* eslint-enable react/no-danger */

