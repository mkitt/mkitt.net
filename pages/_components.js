// @flow
import React, { Component, Fragment } from 'react'
import styled, { hydrate, keyframes } from 'react-emotion'

export default undefined
type Props = {}
type ChildProps = {
  children: Node | number,
}

// -------------------------------------
// Styles

export const color = '#333'
const highlight = '#0074d9'
const easeInOutCubic = 'cubic-bezier(0.645, 0.045, 0.355, 1)'

const animateMark = keyframes({
  '0%': { transform: 'scale(0)' },
  '100%': { transform: 'scale(0.4)' },
})

export const cssGlobal = `
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 100%;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
    color: ${color};
    background-color: #fff;
  }
  ::selection {
    color: #fff;
    text-shadow: none;
    background: ${color};
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    line-height: 1.25;
  }
  a {
    color: inherit;
    background-color: transparent;
  }
`.replace(/\n/g, '').replace(', ', ',').replace(' {', '{')

// -------------------------------------
// Components

export class Layout extends Component<Props> {
  componentWillMount() {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-underscore-dangle
      hydrate(window.__NEXT_DATA__.ids)
    }
  }

  render() {
    return (
      <Fragment>
        <Fragment {...this.props} />
        <HomeLink />
      </Fragment>
    )
  }
}

// -------------------------------------

export const Main = styled.main({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: '60rem',
  minHeight: 'calc(100vh - 5rem)',
  marginRight: 'auto',
  marginLeft: 'auto',
  padding: '1rem',
  '& > *': {
    maxWidth: '39rem',
  },
})

// -------------------------------------

const Mark = () => (
  <svg width="5em" height="2.5em" viewBox="0 0 80 40">
    <g stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
      <path d="M77.5,40 C76.119338,40 75,38.880662 75,37.5 C75,36.119338 76.119338,35 77.5,35 C78.880662,35 80,36.119338 80,37.5 C80,38.880662 78.880662,40 77.5,40 Z" />
      <path d="M40,1 L49,1 L49,20.9960318 L54,13 L72,40 L61,40 L49,22.0715242 L49,40 L40,40 L40,1 Z M61,19.5 L55,10.4960318 L60,1 L71,1 L61,19.5 Z" />
      <path d="M0,40 L9,40 L9,22 L0,15 L0,40 Z M36,0 L18,14 L0,0 L0,11 L18,25 L27,18 L27,40 L36,40 L36,0 Z" />
    </g>
  </svg>
)

// -------------------------------------

const HomeElement = styled.a({
  position: 'fixed',
  bottom: 0,
  right: 0,
  padding: '1rem 0.25rem 0.25rem 1rem',
  fontSize: '1rem',
  transformOrigin: 'bottom right',
  animation: `0.25s ${easeInOutCubic} 2s 1 ${animateMark} both`,
  backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 15%, rgba(255,255,255,1) 100%)',
})

const HomeLink = () => (
  <HomeElement href="/">
    <Mark />
  </HomeElement>
)
// -------------------------------------

const TitleElement = styled.h1({
  display: 'inline-flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  maxWidth: '20rem',
  minWidth: '15rem',
  paddingBottom: '1.25rem',
  lineHeight: 1,
  fontSize: '1rem',
  borderBottom: '1px solid',
})

const TitleSpan = styled.span({
  display: 'inline-block',
  marginLeft: '3rem',
  fontSize: '1.25rem',
  fontWeight: 300,
})

export const Title = ({ children, ...props }: ChildProps) => (
  <TitleElement {...props}>
    <Mark />
    <TitleSpan>{children}</TitleSpan>
  </TitleElement>
)
// -------------------------------------

export const Copy = styled.p({
  marginBottom: '1rem',
  marginTop: 0,
  fontWeight: 300,
  ':first-of-type': {
    marginBottom: '2rem',
    marginTop: '3rem',
    fontSize: '1.125rem',
  },
})

// -------------------------------------

export const Link = styled.a({
  transition: 'color 0.4s',
  textDecoration: 'none',
  fontWeight: 500,
  '&:hover': {
    color: highlight,
  },
})
