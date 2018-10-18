import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
  super(props);
  this.state={
    cities: [],
    error: false
  }

}

  fetchWeatherData() {
    //remember to generate new api code and load in .env file before pushing to heroku 
    fetch(`https://api.openweathermap.org/data/2.5/group?id=3170647,2759794,6455259,3128760,5128638&units=imperial&appid=7b6e08c93ea26e6904940a301201292a`)
    .then(resp => resp.json())
    .then(data => this.setState({
      cities: data.list
    }))
    .catch(err => this.setState({
      error: true
    }))
  }

  componentDidMount() {
    this.fetchWeatherData();
  }

  render() {
    console.log(this.state.cities)
    return (
  <div className="App">
  <Route
  exact path="/"
  render={() => (<Home cities={this.state.cities}/>)}
  />
      </div>
    );
  }
}

export default App;
