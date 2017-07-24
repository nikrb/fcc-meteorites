import React from 'react';

import world_map from './WRLD-EPS-02-0015.svg';

export default class Chart extends React.Component {
  render = () => {
    const {width} = this.props;
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
    };
    const meteorites = this.props.data.map( (d,i) => {
      const style={
        cx:d.lat,
        cy:d.lng,
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
        </svg>
      </div>
    );
  };
}
