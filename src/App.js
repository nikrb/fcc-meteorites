import React, { Component } from 'react';
import Actions from './Actions';
import Chart from './components/Chart';
import './App.css';

class App extends Component {
  state = {
    features: [ {
      "geometry": {
        "type": "Point",
        "coordinates": [
          6.08333,
          50.775
        ]
      }
    }]
  };
  componentWillMount = () => {
    // Actions.getData()
    // .then( (response) => {
    //   this.setState( {features: response.features});
    // });
  };
  render() {
    const data = this.state.features.map( (d) => {
      return { lat: d.geometry.coordinates[0], lng: d.geometry.coordinates[1] };
    });
    return (
      <div className="App">
        <h1>Meteorites</h1>
        <Chart width={600} data={data} />
      </div>
    );
  };
}

export default App;
