import React, { Component } from 'react';
import logo from './logo.svg';
import background from './assets/images/background.png';
import './assets/App.css';
import axios from 'axios';
import PlantList from './components/PlantList.js'

const usdaInstance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://phzmapi.org/'
});

const hardinessInstance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/taydakov/hardiness-plant-api/master/'
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {zip: '', zipdata: {}, plants : []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadData = this.loadData.bind(this);
  }
  
  componentDidMount() {
    this.loadData();
  }
  
  loadData () {
    usdaInstance.get( this.state.zip + '.json' )
    .then(res => {
      const zipdata = res.data;
      hardinessInstance.get( Number.parseInt(res.data.zone) + '.json' )
      .then(res => {
        const plants = res.data.plants;
        this.setState({ plants : plants, zipdata : zipdata });
      })
    });
  }

  handleChange(event) {
    this.setState({zip: event.target.value});
  }

  handleSubmit(event) {
    this.loadData();
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" style={{backgroundImage: 'url(' + background + ')'}}>
          <div className="App-header-info">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Sippin Sprouts</h1>
            <p>Enter your Zipcode to find the perfect eco friendly plants for you environment</p>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input className="input-zip" type="text" value={this.state.zip} onChange={this.handleChange} />
              </label>
              <input className="input-submit" type="submit" value="Submit" />
            </form>
          </div>
        </header>
        <PlantList zip={this.state.zip} zipdata={this.state.zipdata} plants={this.state.plants}/>
      </div>
    );
  }
}

export default App;
