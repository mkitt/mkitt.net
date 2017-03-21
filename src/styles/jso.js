import { compose } from 'glamor'

export const absolute = { position: 'absolute' }
export const fixed = { position: 'fixed' }
export const relative = { position: 'relative' }
export const sticky = { position: 'sticky' }
export const zIndex1 = { zIndex: 1 }
export const zIndex2 = { zIndex: 2 }

export const flex = { display: 'flex' }
export const justifyCenter = { justifyContent: 'center' }
export const alignItemsCenter = { alignItems: 'center' }

export const inlineBlock = { display: 'inline-block' }

export const colorBlue = { color: '#0074d9' }
export const bgcWhite = { backgroundColor: '#fff' }
export const alignRight = { textAlign: 'right' }
export const decorateNone = { textDecoration: 'none' }
export const transitionColor = { transition: 'color 0.25s' }

// Markdown styles
const proseLinks = {
  fontWeight: 500,
  borderBottom: '1px dotted',
}
export const proseStyles = compose({
  '& h1': {
    marginTop: '1rem',
    marginBottom: '2rem',
    fontSize: '1.5rem',
    fontWeight: 700,
  },
  '& h2': {
    paddingTop: '1.125rem',
    borderBottom: '1px solid',
    fontWeight: 700,
    fontSize: '1.125rem',
  },
  '& h2 ~ h2': {
    marginTop: '1.5rem',
  },
  '& h3': {
    position: 'relative',
    paddingTop: '1rem',
    fontWeight: 700,
    fontSize: '1rem',
  },
  '& h4': {
    fontWeight: 400,
    fontSize: '0.875rem',
  },
  '& p': {
    padding: 0,
    margin: '1em 0',
    fontSize: '0.875rem',
  },
  '& ul': {
    padding: 0,
    margin: '1em 0 1em 1.2em',
    fontSize: '0.875rem',
    listStyleType: 'square',
  },
  '& a': {
    textDecoration: 'none',
    transition: 'color 0.25s',
    ':hover': {
      color: '#0074d9',
    },
  },
  '& p a': { ...proseLinks },
  '& li a': { ...proseLinks },
})

