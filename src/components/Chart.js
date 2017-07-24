import React from 'react';
import * as d3 from 'd3';

import world_map from './WRLD-EPS-02-0015.svg';

export default class Chart extends React.Component {
  render = () => {
    const {width, box} = this.props;
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
      height: width+"px"
    };
    const xScale = d3.scaleLinear()
      .domain( [-180, 180])
      .range( [box[1], box[3]-box[1]]);
    const yScale = d3.scaleLinear()
      .domain( [90,-90])
      .range( [box[0]+20, box[2]-box[0]]);
    let data = this.props.data;
    if( data.length === 0) data = this.props.calibration;
    const meteorites = data.map( (d,i) => {
      const style={
        cx: xScale( d.lat),
        cy: yScale( d.lng),
        r:2,
        fill: 'black'
      };
      return (
        <circle key={i} style={style} />
      );
    });
    return (
      <div style={wrapper} >
        <img src={world_map} style={map_style} alt="" />
        <svg style={meteor_overlay}>
          {meteorites}
          <rect x={box[1]} y={box[0]} width={box[3]-box[1]} height={box[2]-box[0]}
            style={{stroke:"red", strokeWidth:"1", fill:"transparent"}}/>
        </svg>
      </div>
    );
  };
}
