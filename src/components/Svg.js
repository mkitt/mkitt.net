// @flow
import React from 'react'

type SvgProps = {
  children?: React.Element<*>,
  width?: number,
  height?: number,
  size?: number,
}

const Svg = ({ children, size, width, height, ...props }: SvgProps) => (
  <svg width={size || width} height={size || height} aria-hidden {...props}>
    {children}
  </svg>
)

Svg.defaultProps = {
  children: null,
  width: 30,
  height: 30,
  size: null,
}

export default Svg

