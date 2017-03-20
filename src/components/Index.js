// @flow
import React from 'react'
import { compose, hover } from 'glamor'
import {
  alignItemsCenter,
  colorBlue,
  decorateNone,
  flex,
  justifyCenter,
  transitionColor,
} from '../styles/jso'

const mainStyles = compose(
  flex,
  justifyCenter,
  alignItemsCenter,
  { minHeight: 'calc(100vh - 80px)' },
)

const linkStyles = compose(
  { marginRight: '0.75rem' },
  decorateNone,
  transitionColor,
  hover(colorBlue),
)

type Props = {
  links: Array<{label: string, url: number}>,
}

export default(props: Props) =>
  <main className={mainStyles} role="main">
    <section>
      {props.links.map(link =>
        <a className={linkStyles} href={link.url} key={`${link.label}_link`}>{link.label}</a>,
      )}
    </section>
  </main>

