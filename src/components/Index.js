import React, { PropTypes } from 'react'
import { style } from 'glamor'

const mainStyles = style({
  display: 'flex',
  flexFlow: 'column wrap',
  minHeight: '100vh',
})

const sectionStyles = style({
  margin: 'auto',
})

const linkStyles = style({
  marginRight: '0.5rem',
})

const Index = props =>
  <main className={mainStyles} role="main">
    <section className={sectionStyles}>
      {props.links.map(link =>
        <a className={linkStyles} href={link.url} key={`${link.label}_link`}>{link.label}</a>,
      )}
    </section>
  </main>

export default Index

Index.propTypes = {
  links: PropTypes.arrayOf(React.PropTypes.object),
}

