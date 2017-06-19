// @flow
import React from 'react'
import { css, hover, media, modifier } from '../styles/jss'
import type { ProjectProps } from '../types/app.js.flow'
import Icon, { OpenInBrowserIcon, GitHubIcon } from './Icons'
import Copy from './Copy'
import LinkExternal from './LinkExternal'
import Subheading from './Subheading'

type ContainerProps = {
  children: React.Element<*>,
}

const minBreak2 = '(min-width: 48em)'

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  paddingRight: 10,
  paddingLeft: 10,
}

// -------------------------------------
const headerStyle = css({
  ...containerStyle,
  height: 64,
})

const Header = ({ children, ...props }: ContainerProps) => (
  <header {...props} className={headerStyle}>
    {children}
  </header>
)
// -------------------------------------
const bannerStyle = css(
  {
    position: 'relative',
    backgroundColor: '#999',
    height: 160,
    borderTop: '1px solid #999',
    borderBottom: '1px solid #999',
  },
  media(minBreak2, {
    height: 280,
  }),
)

const assetStyle = css({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
  backgroundRepeat: 'no-repeat',
})

const imgStyle = css(
  { ...assetStyle },
  {
    pointerEvents: 'none',
    transition: 'opacity 0.4s',
    opacity: 1,
  },
)

const Banner = ({ assets }: ProjectProps) => (
  <div className={bannerStyle}>
    <div className={`${imgStyle}`} style={{ backgroundImage: `url(${assets.img})` }} />
  </div>
)
// -------------------------------------
const contentStyle = css({
  ...containerStyle,
  fontSize: 14,
})

const Content = ({ children, ...props }: ContainerProps) => (
  <div {...props} className={contentStyle}>
    {children}
  </div>
)
// -------------------------------------
const footerStyle = css({
  ...containerStyle,
  height: 32,
  marginTop: 'auto',
  display: 'flex',
})

const Footer = ({ children, ...props }: ContainerProps) => (
  <footer {...props} className={footerStyle}>
    {children}
  </footer>
)
// -------------------------------------

const footerLinkStyle = css(
  { transition: 'color 0.25s' },
  hover({ color: '#0074d9' }),
)

type FooterLinkProps = {
  children: React.Element<*>,
  href: string,
}

const FooterLink = ({ children, href, ...props }: FooterLinkProps) => (
  <LinkExternal {...props} href={href} className={footerLinkStyle}>
    {children}
  </LinkExternal>
)
// -------------------------------------
const collectionStyle = css(
  {
    display: 'flex',
    flexWrap: 'wrap',
  },
  media(minBreak2, {
    marginLeft: -20,
  }),
)

type CollectionProps = {
  children: React.Element<*>,
}

const Projects = ({ children, ...props }: CollectionProps) => (
  <div {...props} className={collectionStyle}>
    {children}
  </div>
)
// -------------------------------------
const projectStyle = css(
  {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: 120,
    marginTop: 20,
    color: '#333',
    border: '1px solid #999',
  },
)

const smProjectStyle = css(
  { minHeight: 120 },
  media(minBreak2,
    { width: 'calc(25% - 20px)', marginLeft: 20 },
    modifier(':nth-child(odd)', { borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomRightRadius: 10 }),
    modifier(':nth-child(even)', { borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10 }),
    modifier(':nth-child(4n+3)', { borderTopLeftRadius: 0 }),
    modifier(':nth-child(4n+2)', { borderTopRightRadius: 0 }),
    modifier(':nth-last-child(-n+4)', { borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }),
  ),
)
const mdProjectStyle = css(
  { minHeight: 240 },
  media(minBreak2,
    {
      width: 'calc(50% - 20px)',
      minHeight: 480,
      marginLeft: 20,
    },
    modifier(':nth-child(odd)', { borderTopRightRadius: 10, borderBottomRightRadius: 10 }),
    modifier(':nth-child(even)', { borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }),
    modifier(':nth-child(-n+2)', { borderTopRightRadius: 0, borderTopLeftRadius: 0 }),
    modifier(':nth-last-child(-n+2)', { borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }),
  ),
)

const Project = (props: ProjectProps) => (
  <article className={`${projectStyle} ${props.assets ? mdProjectStyle : smProjectStyle}`}>
    <Header>
      {props.icon && <Icon kind={props.icon} style={{ marginRight: 10 }} />}
      {props.title && <Subheading>{props.title}</Subheading>}
    </Header>
    { props.assets && <Banner {...props} /> }
    <Content>
      {props.description && <Copy>{props.description}</Copy>}
    </Content>
    <Footer>
      { props.repoUrl &&
        <FooterLink href={props.repoUrl} title="View source">
          <GitHubIcon size={20} />
        </FooterLink>
      }
      { props.url &&
        <FooterLink
          href={props.url}
          style={props.repoUrl ? { marginLeft: 10 } : null}
          title="View project"
        >
          <OpenInBrowserIcon size={20} />
        </FooterLink>
      }
    </Footer>
  </article>
)

Project.defaultProps = {
  description: null,
  id: null,
  repoUrl: null,
  title: null,
  url: null,
}
// -------------------------------------
export { Projects }
export default Project

