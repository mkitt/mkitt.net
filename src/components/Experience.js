// @flow
import React from 'react'
import type { ExperienceProps } from '../types/app.js.flow'
import { css, media } from '../styles/jss'
import Icon from './Icons'
import Copy from './Copy'
// import LinkExternal from './LinkExternal'
import Subheading from './Subheading'

const minBreak2 = '(min-width: 48em)'

// -------------------------------------
const collectionStyle = css(
  {
    display: 'flex',
    flexFlow: 'column wrap',
    marginLeft: -20,
  },
  media(minBreak2, {
    flexFlow: 'row wrap',
  }),
)

type CollectionProps = {
  children: React.Element<*>,
}

export const Experiences = ({ children, ...props }: CollectionProps) => (
  <div {...props} className={collectionStyle}>
    {children}
  </div>
)
// -------------------------------------

const style = css(
  {
    marginTop: 20,
    marginLeft: 20,
  },
  media(minBreak2, {
    flex: '1 calc(25% - 20px)',
  }),
)

const subheadingStyle = css({
  display: 'flex',
  alignItems: 'center',
})

const subheadingTextStyle = css({
  display: 'inline-block',
  fontSize: 20,
  marginLeft: 10,
})

const copyStyle = css({
  fontSize: 14,
  textIndent: 40,
  marginTop: 0,
})

export default (props: ExperienceProps) => (
  <div className={style}>
    <Subheading className={subheadingStyle}>
      <Icon kind={props.icon} />
      <span className={subheadingTextStyle}>{props.title}</span>
    </Subheading>
    <Copy className={copyStyle}>{props.dates}</Copy>
  </div>
)

