import React, { Component } from 'react';
import '../assets/Plant.css';

class Plant extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }


  render() {
    return (
      <div className="plant">
        <h3>{this.props.plant.simpleName}</h3>
        <h4>{this.props.plant.name}</h4>
        <div className="image" style={{backgroundImage: 'url(' + this.props.plant.imageUrl + ')'}} />

      </div>
    );
  }
}

export default Plant;
