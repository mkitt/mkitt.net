// @flow
import React from 'react'
import { GridOverlay } from 'toolkitt'
import { css } from '../styles/jss'

const fixedStyle = css({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
})

const toolStyle = css(
  { ...fixedStyle },
  { zIndex: 3000, pointerEvents: 'none' },
)

export default () => (
  <div className={toolStyle} data-name="DevTool">
    <GridOverlay isDisabled size={40} />
  </div>
)

