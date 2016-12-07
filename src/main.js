// @flow
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { renderStaticOptimized } from 'glamor/server'
import Root from './components/Root'
import Index from './components/Index'
import Resume from './components/Resume'

export default(locals: any, callback: Function) => {
  const props = { path: locals.path, ...locals.config }

  let view = <Index {...props} />

  if (locals.path === '/resume') {
    view = <Resume content={locals.config.resume} />
  }

  const { css } = renderStaticOptimized(() =>
    renderToStaticMarkup(<Root {...props}>{view}</Root>),
  )
  const html = renderToStaticMarkup(<Root {...props} css={css}>{view}</Root>)
  callback(null, `<!DOCTYPE html>${html}`)
}
