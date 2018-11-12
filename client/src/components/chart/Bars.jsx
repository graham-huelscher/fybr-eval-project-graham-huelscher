import React, { Component } from 'react'

export default class Bars extends Component {

  render() {
    const { scales, margins, data, svgDimensions } = this.props
    const { xScale, yScale } = scales
    const { height } = svgDimensions

    const ranges = Object.keys(data)

    const barsJSX = 
      ranges.map(range =>
        <rect
          key={range}
          x={xScale(range)}
          y={yScale(data[range])}
          height={height - margins.bottom - scales.yScale(data[range])}
          width={xScale.bandwidth()}
          style={{fillOpacity: .25, fill: '#DCDCDC'}}
        />
      )

    return (
      <g>{barsJSX}</g>
    )
  }
}