// @flow
import React, { Component, Fragment } from 'react'
import styled, { hydrate, keyframes } from 'react-emotion'

export default undefined
type Props = {}

// -------------------------------------
// Styles

export const color = '#111'
const highlight = '#0074d9'
const easeInOutCubic = 'cubic-bezier(0.645, 0.045, 0.355, 1)'

const animateMark = keyframes({
  '0%': { transform: 'scale(0)' },
  '100%': { transform: 'scale(0.3)' },
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
`.replace(/\n|\s/g, '')

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
  maxWidth: '75rem',
  minHeight: 'calc(100vh - 1rem)',
  marginRight: 'auto',
  marginLeft: 'auto',
  padding: '1rem',
  '& > *': {
    maxWidth: '39rem',
  },
})

// -------------------------------------

const Mark = () => (
  <svg width={96} height={48} viewBox="0 0 30 15" >
    <g stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
      <path d="M30,13.2423 C30,13.7706333 29.5716667,14.1989667 29.0433333,14.1989667 C28.515,14.1989667 28.0866667,13.7706333 28.0866667,13.2423 C28.0866667,12.7139667 28.515,12.2856333 29.0433333,12.2856333 C29.5716667,12.2856333 30,12.7139667 30,13.2423" />
      <path d="M22.6569,0.483833333 L20.5219,3.61516667 L22.5999,6.4045 L26.7559,0.483833333 L22.6569,0.483833333 Z M14.7145667,0.483833333 L14.7145667,14.1761667 L18.0165667,14.1761667 L18.0165667,7.5415 L22.7989,14.1761667 L26.8695667,14.1761667 L19.9239,4.44083333 L18.0165667,7.1435 L18.0165667,0.483833333 L14.7145667,0.483833333 Z" />
      <path d="M13.4646,-6.66666667e-05 L6.74626667,5.32326667 L-6.66666666e-05,-6.66666667e-05 L-6.66666666e-05,4.1846 L6.74626667,9.53593333 L10.1339333,6.88893333 L10.1339333,14.1762667 L13.4646,14.1762667 L13.4646,-6.66666667e-05 Z M-6.66666666e-05,14.1762667 L3.38726667,14.1762667 L3.38726667,8.19826667 L-6.66666666e-05,5.5226 L-6.66666666e-05,14.1762667 Z" />
    </g>
  </svg>
)

// -------------------------------------

const HomeElement = styled.a({
  position: 'absolute',
  bottom: '0.5rem',
  right: '0.5rem',
  transformOrigin: 'bottom right',
  animation: `0.25s ${easeInOutCubic} 2s 1 ${animateMark} both`,
})

const HomeLink = () => (
  <HomeElement href="/">
    <Mark />
  </HomeElement>
)

// -------------------------------------

const TitleElement = styled.h1({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  maxWidth: '20rem',
  paddingBottom: '2rem',
  lineHeight: 1,
  fontSize: '1.25rem',
  fontWeight: 300,
  borderBottom: '1px solid',
})

type TitleProps = {
  children: Node | number,
}

export const Title = ({ children, ...props }: TitleProps) => (
  <TitleElement {...props}>
    <Mark />
    {children}
  </TitleElement>
)

// -------------------------------------

export const Copy = styled.p({
  marginBottom: '1rem',
  marginTop: 0,
  ':first-of-type': {
    marginBottom: '2rem',
    marginTop: '3rem',
    fontSize: '1.125rem',
  },
})

// -------------------------------------

export const Link = styled.a({
  transition: 'color 0.4s',
  '&:hover': {
    color: highlight,
  },
})
