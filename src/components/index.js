import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'
import {
  Ello,
  Highwing,
  FactoryLabs,
  Mark,
  MuveHealth,
  ModeSet,
  TheFirmGraphics,
  Vangst,
} from './assets'

const noob = {}
const easeInOutCubic = 'cubic-bezier(0.645, 0.045, 0.355, 1)'

const animateMark = keyframes({
  '0%': { transform: 'scale(0)' },
  '100%': { transform: 'scale(0.4)' },
})

const useCss = ({ css }) => ({
  ...(css != null ? css : noob),
})

// -------------------------------------

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
    background-color: #fff;
    color: #333;
    margin: 0;
  }
  ::selection {
    background: #333;
    color: #fff;
    text-shadow: none;
  }
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.25;
    margin: 0;
  }
  a {
    color: inherit;
    background-color: transparent;
  }
  @media print {
    *, *::before, *::after {
      background: transparent !important;
      box-shadow: none !important;
      color: #000 !important;
      text-shadow: none !important;
    }
    html {
      font-size: 62.5% !important;
    }
    img {
      page-break-inside: avoid;
    }
    p, h2, h3 {
      orphans: 3;
      widows: 3;
    }
    h2, h3 {
      page-break-after: avoid;
    }
  }
`
  .replace(/\n/g, '')
  .replace(', ', ',')
  .replace(' {', '{')

// -------------------------------------

const HomeElement = styled.a({
  animation: `0.25s ${easeInOutCubic} 2s 1 ${animateMark} both`,
  backgroundImage:
    'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 15%, rgba(255,255,255,1) 100%)',
  bottom: 0,
  fontSize: '1rem',
  padding: '1rem 0.25rem 0.25rem 1rem',
  position: 'fixed',
  right: 0,
  transformOrigin: 'bottom right',
  '@media print': {
    display: 'none',
  },
})

export const HomeLink = () => (
  <HomeElement href="/">
    <Mark />
  </HomeElement>
)

// -------------------------------------

export const Title = styled.h1(
  {
    alignItems: 'baseline',
    borderBottom: '1px solid',
    display: 'inline-flex',
    fontSize: '1.25rem',
    fontWeight: 300,
    justifyContent: 'space-between',
    lineHeight: 1,
    minWidth: '15rem',
    paddingBottom: '1.25rem',
    width: '100%',
    '& > svg': {
      fontSize: '1rem',
    },
  },
  useCss,
)

const TitleText = styled.span({
  display: 'inline-block',
  marginLeft: '3rem',
})

export const TitleWithMark = ({ children, ...props }) => (
  <Title {...props}>
    <Mark />
    <TitleText>{children}</TitleText>
  </Title>
)

export const Heading = styled.h2(
  {
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    marginBottom: '1rem',
    marginTop: '2rem',
    '&:first-of-type': {
      marginTop: '3rem',
      marginBottom: 0,
    },
    '@media print': {
      '&:first-of-type': {
        marginTop: '2.5rem',
      },
    },
  },
  useCss,
)

const SubheadingMark = styled.span({
  background: 'transparent no-repeat top left',
  display: 'flex',
  fontSize: '1rem',
  height: '2rem',
  justifyContent: 'flex-start',
  width: '2rem',
  '@media(min-width: 64em)': {
    position: 'absolute',
    top: '0.125rem',
    left: '-3rem',
    justifyContent: 'flex-end',
  },
})

export const Subheading = styled.h3(
  {
    fontSize: '0.9375rem',
    fontWeight: 500,
    position: 'relative',
  },
  useCss,
)

const marks = [
  { icon: <Highwing />, id: 'highwing' },
  { icon: <MuveHealth />, id: 'muve-health' },
  { icon: <Ello />, id: 'ello' },
  { icon: <ModeSet />, id: 'mode-set' },
  { icon: <FactoryLabs />, id: 'factory-labs' },
  { icon: <TheFirmGraphics />, id: 'the-firm-graphics' },
  { icon: <Vangst />, id: 'vangst' },
]

export const SubheadingWithMark = ({ children, id, ...props }) => {
  const index = marks.findIndex((mark) => mark.id === id)
  return (
    <Subheading id={id} {...props}>
      {index > -1 && <SubheadingMark>{marks[index].icon}</SubheadingMark>}
      {children}
    </Subheading>
  )
}

export const TextHeading = styled.h4(
  {
    fontSize: '1.25rem',
    fontWeight: 800,
  },
  useCss,
)

const flatten = (text, child) =>
  typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text)

export const HeadingRenderer = (props) => {
  const { headings, level, children } = props
  const Comp = headings[level - 1] || TextHeading
  const kids = React.Children.toArray(children)
  const text = kids.reduce(flatten, '')
  const slug = text.toLowerCase().replace(/\W/g, '-')
  return <Comp as={`h${level}`} id={slug} {...props} />
}

// -------------------------------------

export const Link = styled.a(
  {
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'color 0.4s',
    '&:hover': {
      color: '#0074d9',
    },
  },
  useCss,
)

export const List = styled.ul(
  {
    margin: '0 0 1rem',
    padding: 0,
    listStyle: 'none',
  },
  useCss,
)

export const ListItem = styled.li(
  {
    fontSize: '0.875rem',
    fontWeight: 300,
  },
  useCss,
)

export const MainLanding = styled.main({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '43rem',
  minHeight: 'calc(100vh - 5rem)',
  padding: '1rem',
})

export const Paragraph = styled.p(
  {
    fontWeight: 300,
    marginBottom: '1rem',
    marginTop: 0,
  },
  useCss,
)

export const ParagraphLanding = styled(Paragraph)(
  {
    marginTop: '2rem',
    textAlign: 'right',
  },
  useCss,
)

export const Rule = styled.hr(
  {
    margin: '-1.5rem 0 1rem',
    fontSize: '1.25rem',
    border: 0,
    '&::before': {
      content: '"......"',
    },
  },
  useCss,
)
