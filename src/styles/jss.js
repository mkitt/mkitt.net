// @flow
import { css } from 'glamor'

type JSO = {
  [key: string]: string | number | null,
}

export { css }

export const combine = (...styles: Array<string>) =>
  styles.join(' ')

export const media = (query: string, ...styles: Array<JSO>) =>
  css({ [`@media ${query}`]: styles })

export const parent = (selector: string, ...styles: Array<JSO>) =>
  css({ [`${selector} &`]: styles })

export const modifier = (selector: string, ...styles: Array<JSO>) =>
  css({ [`&${selector}`]: styles })

export const select = (selector: string, ...styles: Array<JSO>) =>
  css({ [selector]: styles })

export const hover = (...styles: Array<JSO>) =>
  select(':hover', ...styles)

export const before = (...styles: Array<JSO>) =>
  select('::before', ...styles)

export const after = (...styles: Array<JSO>) =>
  select('::after', ...styles)

