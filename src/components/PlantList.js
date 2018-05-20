import React, { Component } from 'react';
import '../assets/PlantList.css';
import Plant from './Plant.js'

class PlantList extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="PlantList">
        <h2>Your Zip: {this.props.zip} | Your Zone: {this.props.zipdata.zone}</h2>
        {this.props.plants.map((plant) => {
          return(
            <Plant key={plant.name} plant={plant}/>
          );
        })}
      </div>
    );
  }
}

export default PlantList;
