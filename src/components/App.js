import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import NoMatch from './NoMatch';
import Login from './Login';
import Register from './Register';
import Hero from 'react-bulma-components/lib/components/hero';
import { Provider } from 'react-redux';
import store from '../store';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename="/hackathon/">
          <Hero size="fullheight">
            <div className="wallpaper"></div>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route component={NoMatch} />
            </Switch>
          </Hero>
        </Router>
      </Provider>
    );
  }
}

export default App;
