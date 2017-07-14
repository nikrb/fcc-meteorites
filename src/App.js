import React, { Component } from 'react';
import world_map from './WRLD-EPS-02-0015.svg';
import './App.css';

class App extends Component {
  render() {
    const wrapper = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start"
    };
    const style = {
      width: "600px"
    };
    return (
      <div style={wrapper}>
        <img style={style} src={world_map} alt="world map" />
      </div>
    );
  }
}

export default App;