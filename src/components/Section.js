// @flow
import React from 'react'
import { css, media, select } from '../styles/jss'

const style = css(
  {
    maxWidth: 1200,
    paddingRight: 10,
    paddingLeft: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 96px)',
  },
  select('& + &', { marginTop: 96 }),
  media('(min-width: 75em)', {
    paddingRight: 0,
    paddingLeft: 0,
  }),
)

type Props = {
  children: React.Element<*>,
}

export default ({ children, ...props }: Props) => (
  <section {...props} className={style}>
    {children}
  </section>
)

