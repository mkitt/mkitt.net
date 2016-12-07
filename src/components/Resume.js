// @flow
import React from 'react'
import { insertRule, style } from 'glamor'
import { proseStyles } from '../css'
import type { JSS } from '../types/flowtypes'

insertRule(proseStyles)

const markdownStyles: JSS = style({
  position: 'relative',
  maxWidth: '45rem',
  padding: '3.125rem 1rem 1rem',
  margin: '0 auto',
})

type Props = {
  content: string,
}

/* eslint-disable react/no-danger */
export default(props: Props) =>
  <main role="main">
    <div
      className={markdownStyles}
      dangerouslySetInnerHTML={{ __html: props.content }}
    />
  </main>

/* eslint-enable react/no-danger */

