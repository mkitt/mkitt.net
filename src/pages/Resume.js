// @flow
import React from 'react'
import Main from '../components/Main'
import { before, css, media, select } from '../styles/jss'
import { absolute, proseStyles, relative, sticky, zIndex2 } from '../styles/jso'

const padLeftStyle = css(
  { paddingLeft: '2.5rem' },
)

const iconPositionStyle = css(
  absolute,
  { top: '1.25rem', left: 0 },
  { width: '1.875rem', height: '1.875rem' },
  { background: 'transparent no-repeat top left' },
  { content: '""' },
)

type Props = {
  content: string,
}

const markdownStyles = css(
  relative,
  {
    maxWidth: '45rem',
    paddingRight: 10,
    paddingLeft: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  media('(min-width: 45em)', {
    paddingRight: 0,
    paddingLeft: 0,
  }),
  select('& h1', sticky, { top: '0.75rem' }, zIndex2),
  select('& #ello', padLeftStyle),
  select('& #mode-set', padLeftStyle),
  select('& #factory-labs', padLeftStyle),
  select('& #the-firm-graphics', padLeftStyle),
  select('& #ello + h4', padLeftStyle),
  select('& #mode-set + h4', padLeftStyle),
  select('& #factory-labs + h4', padLeftStyle),
  select('& #the-firm-graphics + h4', padLeftStyle),
  /* eslint-disable quotes */
  select('& #ello', before(
    iconPositionStyle,
    { backgroundImage: `url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'><circle fill='#333' cx='15' cy='15' r='15'/><path fill='#fff' d='M15,24c-4.1,0-7.7-2.8-8.7-6.8c-0.1-0.5,0.2-0.9,0.6-1c0.5-0.1,0.9,0.2,1,0.6c0.8,3.2,3.7,5.5,7,5.5 c3.3,0,6.2-2.2,7-5.5c0.1-0.5,0.6-0.7,1-0.6c0.5,0.1,0.7,0.6,0.6,1C22.7,21.2,19.1,24,15,24z'/></svg>")` },
  )),
  select('& #mode-set', before(
    iconPositionStyle,
    { backgroundImage: `url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'><polygon fill='#333' points='22.5,3.4 22.5,8.2 21.2,9.5 21.2,6.7 17.9,9.8 11.9,1.2 11.9,9.8 5.8,0.8 5.8,8.2 4,10.2 4,20.1 6.8,24.2 6.8,19.6 13.1,28.7 13.1,22.1 14.8,20 14.8,30 21.2,23.9 21.2,18.9 22.5,17.7 22.5,20.4 26,17.2 26,0'/></svg>")` },
  )),
  select('& #factory-labs', before(
    iconPositionStyle,
    { backgroundImage: `url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'><path fill='#333' d='M28.3,0H11.2L10,0C5.4,0,1.7,3.8,1.7,8.4l0,0.6v2.8l17.2,0v0l0,0l1.1,0c4.6,0,8.4-3.7,8.4-8.4L28.3,0z'/><path fill='#333' d='M19.1,21.1c4.5,0,8.1-3.6,8.1-8.1l-16.2,0c-4.3,0-7.8,3.4-8.1,7.6l0,0.2c0,0.1,0,9.1,0,9.1h6.7l1.4,0c4.5,0,8.1-3.5,8.1-8 L19.1,21.1z'/></svg>")` },
  )),
  select('& #the-firm-graphics', before(
    iconPositionStyle,
    { backgroundImage: `url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'><path fill='#333' d='M0,15c0,8.3,6.7,15,15,15s15-6.7,15-15S23.3,0,15,0C6.7,0,0,6.7,0,15z M2.9,15C2.9,8.3,8.3,2.9,15,2.9 c6.7,0,12.1,5.4,12.1,12.1c0,6.7-5.4,12.1-12.1,12.1C8.3,27.1,2.9,21.7,2.9,15z'/><polygon fill='#333' points='8.4,12.2 5,15.6 14.1,24.8 19.4,24.8 20.2,24 13.3,17.1 25.1,17.1 25.1,12.2'/><polygon fill='#333' points='8.2,11.7 6.1,9.7 8.8,7 12,7 12.4,7.5 11.1,8.8 18.6,8.8 18.6,11.7'/><circle fill='#333' cx='5.3' cy='12.1' r='1.5'/></svg>")` },
  )),
  /* eslint-enable quotes */

)
/* eslint-disable react/no-danger */
export default(props: Props) => (
  <Main hasNavbar >
    <section
      className={`${proseStyles} ${markdownStyles} markdown`}
      dangerouslySetInnerHTML={{ __html: props.content }}
    />
  </Main>
)
/* eslint-enable react/no-danger */

