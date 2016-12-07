// @flow
import React from 'react'
import { style } from 'glamor'
import type { JSS } from '../types/flowtypes'

const mainStyles: JSS = style({
  display: 'flex',
  flexFlow: 'column wrap',
  minHeight: 'calc(100vh - 80px)',
})

const sectionStyles: JSS = style({
  margin: 'auto',
})

const linkStyles: JSS = style({
  marginRight: '0.75rem',
})

type Props = {
  links: Array<{label: string, url: number}>,
}

export default(props: Props) =>
  <main className={mainStyles} role="main">
    <section className={sectionStyles}>
      {props.links.map(link =>
        <a className={linkStyles} href={link.url} key={`${link.label}_link`}>{link.label}</a>,
      )}
    </section>
  </main>

