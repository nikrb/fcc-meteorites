import React from 'react';

export default class Strike extends React.Component {
  handleMouseEnter = (e) => {
    this.props.handleMouseEnter( this.props.data, e);
  };
  render = () => {
    const {cx, cy, r} = this.props.data;
    return (
      <circle cx={cx} cy={cy} r={r} fill="black"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.props.handleMouseLeave} />
    );
  };
};
