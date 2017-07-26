import React from 'react';
import * as d3 from 'd3';
import Strike from './Strike';
import Tooltip from './Tooltip';
import world_map from './WRLD-EPS-02-0015.svg';

export default class Chart extends React.Component {
  state = {
    tooltip_visible: false,
    tooltip_text: [],
    tooltip_pos: {}
  };
  handleMouseEnter = (node, event) => {
    const wrapper = this.refs.wrapper;
    this.setState( { tooltip_text: [
      `name:${node.name}`,
      `year:${node.year}`,
      `mass:${node.mass}`,
      `class:${node.reclass}`,
      `latitude:${node.lat}`, `longitude:${node.lng}`
    ],
      tooltip_visible:true,
      tooltip_pos: {x: event.clientX - wrapper.offsetLeft, y: event.clientY - wrapper.offsetTop}
    });
  };
  handleMouseLeave = () => {
    this.setState( { tooltip_text: [], tooltip_visible: false});
  };
  render = () => {
    const {width, height, box} = this.props;
    const wrapper = {
      position: "relative",
      width
    };
    const map_style = {
      width,
      position: "absolute"
    };
    const meteor_overlay = {
      position: "absolute",
      width,
      height
    };
    const xScale = d3.scaleLinear()
      .domain( [-180, 180])
      .range( [box[1], box[3]-box[1]]);
    const yScale = d3.scaleLinear()
      .domain( [90,-90])
      .range( [box[0], box[2]-box[0]]);
    let data = this.props.data;
    if( data.length === 0) data = this.props.calibration;
    const min = d3.min( data, (d) => d.mass);
    const max = d3.max( data, (d) => d.mass);
    const mScale = d3.scaleSqrt()
      .domain( [min, max])
      .range( [1,10]);
    const meteorites = data.map( (d,i) => {
      return (
        <Strike key={i} data={{...d,
          cx:xScale( d.lat), cy:yScale( d.lng), r:mScale( d.mass)}}
          handleMouseLeave={this.handleMouseLeave}
          handleMouseEnter={this.handleMouseEnter} />
      );
    });
    const tooltip = {display: (this.state.tooltip_visible)?"block":"none",
      left: this.state.tooltip_pos.x,
      top: this.state.tooltip_pos.y,
      padding: "10px"
    };
    return (
      <div style={wrapper} ref="wrapper" >
        <img src={world_map} style={map_style} alt="" />
        <svg style={meteor_overlay}>
          <rect x={box[1]} y={box[0]} width={box[3]-box[1]} height={box[2]-box[0]}
            style={{stroke:"red", strokeWidth:"1", fill:"transparent"}}/>
          {meteorites}
        </svg>
        <Tooltip tip_text={this.state.tooltip_text} pos={tooltip} />
      </div>
    );
  };
}
