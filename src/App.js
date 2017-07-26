import React, { Component } from 'react';
import Actions from './Actions';
import Chart from './components/Chart';
import './App.css';

class App extends Component {
  state = {
    features: []
  };
  calibration = [
    { place: "england", lng:52.152037, lat:-0.588398, mass:1},
    {"place": "alaska", lng:65.716997, lat:-154.443759, mass:1},
    {"place": "russia",lng:66.359628, lat: 163.543406, mass:1},
    {"place": "antarctica",lng:-75.872892, lat:-87.896526, mass:1},
    {"place": " east antarctica",lng:-72.216494, lat:167.737049, mass:1}
  ];
  componentWillMount = () => {
    console.log( "fetch data");
    Actions.getData()
    .then( (response) => {
      const valid = response.features.filter( (d) => {
        return (d.geometry !== null && d.properties !== null && d.properties.mass !== null);
      });
      this.setState( {features: valid});
    });
  };
  render() {
    const data = this.state.features.map( (d) => {
      return { lat: d.geometry.coordinates[0], lng: d.geometry.coordinates[1],
        mass: parseFloat( d.properties.mass),
        reclass: d.properties.recclass,
        name: d.properties.name,
        year: d.properties.year?d.properties.year.split("-")[0]:"?"};
    });
    // box top,left,bottom,right
    const box = [60,15,420,570];
    return (
      <div className="App">
        <h1>Meteorites</h1>
        <Chart width={600} height={500} data={data} box={box} calibration={this.calibration} />
      </div>
    );
  };
}

export default App;
