import { css } from './jss'

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
export const proseStyles = css({
  '& h1': {
    marginBottom: '2rem',
  },
  '& h2': {
    paddingTop: '1.125rem',
    borderBottom: '1px solid',
  },
  '& h2 ~ h2': {
    marginTop: '1.5rem',
  },
  '& h3': {
    position: 'relative',
    paddingTop: '1rem',
  },
  '& h4': {
    position: 'relative',
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

