import React, { Component } from 'react';
import { GradientDarkgreenGreen } from '@vx/gradient';

class Chart extends Component {
  state = {
    width: 0,
    height: 0
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

  render() {
    const { width, height } = this.state;

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
        <g transform="translate(40,20)">
          <g className="x axis" transform="translate(0,450)">
            <g className="tick" transform="translate(25.5,0)" style={{opacity: 1}}><line y2="6" x2="0"></line>
              <text dy=".71em" y="9" x="0" style={{textAnchor: 'middle'}}>A</text>
            </g>
            <g className="tick" transform="translate(59.5,0)" style={{opacity: 1}}><line y2="6" x2="0"></line>
              <text dy=".71em" y="9" x="0" style={{textAnchor: 'middle'}}>B</text>
            </g>
            <g className="tick" transform="translate(93.5,0)" style={{opacity: 1}}><line y2="6" x2="0"></line>
              <text dy=".71em" y="9" x="0" style={{textAnchor: 'middle'}}>C</text>
            </g>
            <g className="tick" transform="translate(127.5,0)" style={{opacity: 1}}><line y2="6" x2="0"></line>
              <text dy=".71em" y="9" x="0" style={{textAnchor: 'middle'}}>D</text>
            </g>
            <g className="tick" transform="translate(161.5,0)" style={{opacity: 1}}><line y2="6" x2="0"></line>
              <text dy=".71em" y="9" x="0" style={{textAnchor: 'middle'}}>E</text>
            </g>
            <g className="tick" transform="translate(195.5,0)" style={{opacity: 1}}><line y2="6" x2="0"></line>
              <text dy=".71em" y="9" x="0" style={{textAnchor: 'middle'}}>F</text>
            </g>
            <g className="tick" transform="translate(229.5,0)" style={{opacity: 1}}><line y2="6" x2="0"></line>
              <text dy=".71em" y="9" x="0" style={{textAnchor: 'middle'}}>G</text>
            </g>
          </g>
          <g className="y axis">
            <g className="tick" transform="translate(0,600)" style={{opacity: 1}}><line x2="-6" y2="0"></line>
              <text dy=".32em" x="-9" y="0" style={{textAnchor: 'end'}}>0</text>
            </g>
            <g className="tick" transform="translate(0,414.57250826641473)" style={{opacity: 1}}><line x2="-6" y2="0"></line>
              <text dy=".32em" x="-9" y="0" style={{textAnchor: 'end'}}>1</text>
            </g>
            <g className="tick" transform="translate(0,379.14501653282946)" style={{opacity: 1}}><line x2="-6" y2="0"></line>
              <text dy=".32em" x="-9" y="0" style={{textAnchor: 'end'}}>2</text>
            </g>
            <g className="tick" transform="translate(0,343.71752479924425)" style={{opacity: 1}}><line x2="-6" y2="0"></line>
              <text dy=".32em" x="-9" y="0" style={{textAnchor: 'end'}}>3</text>
            </g>
            <g className="tick" transform="translate(0,308.290033065659)" style={{opacity: 1}}><line x2="-6" y2="0"></line>
              <text dy=".32em" x="-9" y="0" style={{textAnchor: 'end'}}>4</text>
            </g>
            <g className="tick" transform="translate(0,272.86254133207365)" style={{opacity: 1}}><line x2="-6" y2="0"></line>
              <text dy=".32em" x="-9" y="0" style={{textAnchor: 'end'}}>5</text>
            </g>
            <g className="tick" transform="translate(0,237.43504959848843)" style={{opacity: 1}}><line x2="-6" y2="0"></line>
              <text dy=".32em" x="-9" y="0" style={{textAnchor: 'end'}}>6</text>
            </g>
            <g className="tick" transform="translate(0,202.0075578649031)" style={{opacity: 1}}><line x2="-6" y2="0"></line>
              <text dy=".32em" x="-9" y="0" style={{textAnchor: 'end'}}>7</text>
            </g>
            <g className="tick" transform="translate(0,166.5800661313179)" style={{opacity: 1}}><line x2="-6" y2="0"></line>
              <text dy=".32em" x="-9" y="0" style={{textAnchor: 'end'}}>8</text>
            </g>
            <g className="tick" transform="translate(0,131.15257439773262)" style={{opacity: 1}}><line x2="-6" y2="0"></line>
              <text dy=".32em" x="-9" y="0" style={{textAnchor: 'end'}}>9</text>
            </g>
            <g className="tick" transform="translate(0,95.72508266414734)" style={{opacity: 1}}><line x2="-6" y2="0"></line>
              <text dy=".32em" x="-9" y="0" style={{textAnchor: 'end'}}>10</text>
            </g>
            <g className="tick" transform="translate(0,60.297590930562116)" style={{opacity: 1}}><line x2="-6" y2="0"></line>
              <text dy=".32em" x="-9" y="0" style={{textAnchor: 'end'}}>11</text>
            </g>
            <g className="tick" transform="translate(0,24.87009919697684)" style={{opacity: 1}}><line x2="-6" y2="0"></line>
              <text dy=".32em" x="-9" y="0" style={{textAnchor: 'end'}}>12</text>
            </g>
            <g className="tick" transform="translate(0,-10.5573925366)" style={{opacity: 1}}><line x2="-6" y2="0"></line>
              <text dy=".32em" x="-9" y="0" style={{textAnchor: 'end'}}>13</text>
            </g>
          </g>
          <rect className="bar" x="10" width="31" y="160.66367501180912" height="289.3363249881909"></rect>
          <rect className="bar" x="44" width="31" y="397.1421823334908" height="52.85781766650922"></rect>
          <rect className="bar" x="78" width="31" y="351.4407179971658" height="98.55928200283421"></rect>
          <rect className="bar" x="112" width="31" y="299.3268776570619" height="150.6731223429381"></rect>
          <rect className="bar" x="146" width="31" y="0" height="450"></rect>
          <rect className="bar" x="180" width="31" y="368.94189891355694" height="81.05810108644306"></rect>
          <rect className="bar" x="214" width="31" y="378.61360415682566" height="71.38639584317434"></rect>
        </g>
      </svg>
    );
  }
}

export default Chart;
