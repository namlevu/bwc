import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, Posts } from './components';

const About=()=>(
  <div>
    <h1>Welcome to the About page!</h1>
  </div>
)

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about/" component={About} />
            <Route path="/posts" component={Posts} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
