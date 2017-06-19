// @flow
import React, { PureComponent } from 'react'

type Props = {
  colorOuter: string,
  colorInner: string,
  dashOuter: string,
  dashInner: string,
  hasInner: boolean,
  isDisabled: boolean,
  opacity: number,
  size: number,
  strokeWidth: number,
}

type State = {
  isHorizontalGridVisible: boolean,
  isVerticalGridVisible: boolean,
}

const getHorizontalLineOuter = ({ colorOuter, dashOuter, size, strokeWidth }) => {
  const dy = size - (strokeWidth * 0.5)
  return `<line stroke='${colorOuter}' stroke-dasharray='${dashOuter}' x1='0' y1='${dy}' x2='${size}' y2='${dy}'/>`
}

const getHorizontalLineInner = ({ colorInner, dashInner, size, strokeWidth }) => {
  const dy = (size * 0.5) - (strokeWidth * 0.5)
  return `<line stroke='${colorInner}' stroke-dasharray='${dashInner}' x1='0' y1='${dy}' x2='${size}' y2='${dy}'/>`
}

const getVerticalLineOuter = ({ colorOuter, dashOuter, size, strokeWidth }) => {
  const dx = size - (strokeWidth * 0.5)
  return `<line stroke='${colorOuter}' stroke-dasharray='${dashOuter}' x1='${dx}' y1='0' x2='${dx}' y2='${size}'/>`
}

const getVerticalLineInner = ({ colorInner, dashInner, size, strokeWidth }) => {
  const dx = (size * 0.5) - (strokeWidth * 0.5)
  return `<line stroke='${colorInner}' stroke-dasharray='${dashInner}' x1='${dx}' y1='0' x2='${dx}' y2='${size}'/>`
}

const getBase64GridString = ({ size, lines }) => (
  `data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 ${size} ${size}'><g fill='none' stroke-miter-limit='10'>${lines}</g></svg>`
)

const getLines = props => (
  [
    ...(props.isHorizontalGridVisible && props.hasInner ? [getHorizontalLineInner(props)] : []),
    ...(props.isHorizontalGridVisible ? [getHorizontalLineOuter(props)] : []),
    ...(props.isVerticalGridVisible && props.hasInner ? [getVerticalLineInner(props)] : []),
    ...(props.isVerticalGridVisible ? [getVerticalLineOuter(props)] : []),
  ].join()
)

const getStyle = (props) => {
  const lines = getLines(props)
  if (props.isDisabled || !lines.length) { return null }
  return {
    backgroundImage: `url("${getBase64GridString({ size: props.size, lines })}")`,
    backgroundSize: `${props.size}px ${props.size}px`,
    opacity: props.opacity,
  }
}

export default (ComposedComponent: any) => (
  class extends PureComponent {
    props: Props
    state: State = {
      isHorizontalGridVisible: true,
      isVerticalGridVisible: true,
    }

    static defaultProps = {
      colorOuter: 'rgba(255, 0, 255, 1.0)',
      colorInner: 'rgba(255, 0, 255, 0.5)',
      dashOuter: '',
      dashInner: '2, 2',
      hasInner: true,
      isDisabled: false,
      opacity: 0.2,
      size: 16,
      strokeWidth: 1,
    }

    toggle = () => {
      this.setState({
        isHorizontalGridVisible: !this.state.isHorizontalGridVisible,
        isVerticalGridVisible: !this.state.isVerticalGridVisible,
      })
    }

    render() {
      const {
        colorOuter,
        colorInner,
        dashOuter,
        dashInner,
        hasInner,
        isDisabled,
        opacity,
        size,
        strokeWidth,
        ...props
      } = this.props

      return (
        <ComposedComponent
          {...props}
          {...this.state}
          style={getStyle({ ...this.props, ...this.state })}
          toggleGridOverlay={this.toggle}
        />
      )
    }
  }
)

