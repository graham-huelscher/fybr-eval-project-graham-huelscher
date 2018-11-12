import React, { Component } from 'react';
import { GradientDarkgreenGreen } from '@vx/gradient';
import { getTrees, getSiteId } from '../model';
import { connect } from 'react-redux';
import { scaleBand, scaleLinear } from 'd3-scale'
import Axes from '../components/chart/Axes'
import Bars from '../components/chart/Bars'

class Chart extends Component {
  state = {
    width: 0,
    height: 0,
    xScale: scaleBand(),
    yScale: scaleLinear()
  };

  componentDidMount() {
    window.addEventListener('resize', this.setSize);

    this.setSize();
  }

  setSize = (event) => {
    const { width, height } = this.chart.getBoundingClientRect();

    this.setState((prevState) => {
      return {
        width,
        height
      };
    });
  }

  setRef = (node) => {
    this.chart = node;
  }

  maxCount = (data) => {
    let max = -1
    for (let range in data) {
      if (data[range] > max)
        max = data[range]
    }
    return max
  }

  render() {
    const { width, height } = this.state;
    const treesForSite = this.props.trees.filter(tree => tree.site_id === this.props.siteId)

    //create data object for use in bar chart and sort tree heights into appropriate ranges
    const data = {
      '0m - 10m': 0,
      '10m - 20m': 0,
      '20m - 30m': 0,
      '30m - 40m': 0,
      '40m - 50m': 0,
      '50m - 60m': 0,
      '60m - 70m': 0,
    }

    treesForSite.forEach(tree => {
      const h = tree.height
      if (h < 10 && h > 0)
        data['0m - 10m']++
      else if (h < 20 && h >= 10)
        data['10m - 20m']++
      else if (h < 30 && h >= 20)
        data['20m - 30m']++
      else if (h < 40 && h >= 30)
        data['30m - 40m']++
      else if (h < 50 && h >= 40)
        data['40m - 50m']++
      else if (h < 60 && h >= 50)
        data['50m - 60m']++
      else if (h < 70 && h >= 60)
        data['60m - 70m']++
    })

    //setup D3.js parameters for a bar chart
    const margins = { top: 50, right: 20, bottom: 50, left: 60 }
    const svgDimensions = { width: width, height: height }
    const maxValue = this.maxCount(data)
    const categories = Object.keys(data)

    const xScale = this.state.xScale
      .padding(0.5)
      .domain(categories)
      .range([margins.left, svgDimensions.width - margins.right])
    const yScale = this.state.yScale
      .domain([0, maxValue])
      .range([svgDimensions.height - margins.bottom, margins.top])

    /* This is a hack to first set the size based on percentage
       then query for the size so the chart can be scaled to the window size.
       The second render is caused by componentDidMount(). */
    if (width < 100 || height < 100) {
      return <svg ref={this.setRef} width={'100%'} height={'100%'}></svg>
    }

    return (
      <svg ref={this.setRef} width={'100%'} height={'100%'}>
        <GradientDarkgreenGreen id="gradient" />

        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill={`url(#gradient)`}
        />
        <Axes
          scales={{ xScale, yScale }}
          margins={margins}
          svgDimensions={svgDimensions}
        />
        <Bars
          scales={{ xScale, yScale }}
          margins={margins}
          data={data}
          maxValue={maxValue}
          svgDimensions={svgDimensions}
        />
      </svg>
    );
  }
}

function mapStateToProps(state) {
  return {
    trees: getTrees(state),
    siteId: state.sites.selected
  };
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
