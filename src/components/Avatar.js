// @flow
import React from 'react'
import { css } from '../styles/jss'

type Props = {
  size: number,
}

const style = css({
  fontSize: 12,
  border: 0,
  outline: 0,
  borderRadius: '50%',
  overflow: 'hidden',
})

export default ({ size, ...props }: Props) => (
  <img
    alt="mkitt"
    className={style}
    src={`/assets/matthew-kitt-avatar-${size * 2}.jpg`}
    width={size}
    height={size}
    {...props}
  />
)

