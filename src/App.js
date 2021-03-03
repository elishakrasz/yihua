import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/homepage.component';

const HatsPage = (props) => {
  console.log(props)

  return (
    <div>
    <h1>Hats Page</h1>
    <p>{props.match.params.hatId}</p>
  </div>
  )
}

class App extends Component {
  render() {
    return <div className='App'>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hats" component={HatsPage} />
          <Route exact path="/hats/:hatId" component={HatsPage} />
        </Switch>
      </div>
    </div>;
  }
}

export default App;
