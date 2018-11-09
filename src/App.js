import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Route exact path="/" render={() => <h1>Home</h1>} />
            <Route exact path="/about" render={() => <h1>About</h1>} />
            <Route exact path="/posts" render={() => <h1>Posts</h1>} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
