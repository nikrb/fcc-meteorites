import React, { Component } from 'react';
import Actions from './Actions';
import Chart from './components/Chart';
import './App.css';


class App extends Component {
  state = {
    features: []
  };
  calibration = [
    {place: "england", lng:52.152037, lat:-0.588398},
    {"place": "alaska", lng:65.716997, lat:-154.443759},
    {"place": "russia",lng:66.359628, lat: 163.543406},
    {"place": "antarctica",lng:-75.872892, lat:-87.896526},
    {"place": " east antarctica",lng:-72.216494, lat:167.737049}
  ];
  componentWillMount = () => {
    // Actions.getData()
    // .then( (response) => {
    //   this.setState( {features: response.features});
    // });
  };
  render() {
    const data = this.state.features.map( (d) => {
      return { lat: d.geometry.coordinates[1], lng: d.geometry.coordinates[0] };
    });
    // box top,left,bottom,right
    return (
      <div className="App">
        <h1>Meteorites</h1>
        <Chart width={600} data={data} box={[40,30,420,575]} calibration={this.calibration} />
      </div>
    );
  };
}

export default App;
