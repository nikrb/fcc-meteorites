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
      width: "400px"
    };
    return (
      <div className="App">
        <h1>Meteorites</h1>
        <div style={wrapper}>
          <img style={style} src={world_map} alt="world map" />
        </div>
      </div>
    );
  }
}

export default App;
