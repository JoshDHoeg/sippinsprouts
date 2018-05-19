import React, { Component } from 'react';
import '../assets/PlantList.css';

class PlantList extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }


  render() {
    return (
      <div className="PlantList">
        <h2>{this.props.zip}</h2>

      </div>
    );
  }
}

export default PlantList;
