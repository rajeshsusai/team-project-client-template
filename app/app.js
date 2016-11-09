import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Build from './components/Build';
import Account from './components/Account';
import SavedBuilds from './components/SavedBuilds'
import NavBar from './components/navbar'
import Footer from './components/footer'

import { IndexRoute, Router, Route, browserHistory } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }

  render() {
    return (<div>
              <NavBar />
              { this.props.children }
              <Footer />
            </div>)
  }
}

ReactDOM.render((
  <Router history={ browserHistory }>
    <Route
           path="/"
           component={ App }>
      { /* Show the Feed at / */ }
      <IndexRoute component={ Home } />
      <Route
             path="account/:id"
             component={ Account } />
      <Route
             path="Build/:id"
             component={ Build } />
      <Route
             path="SavedBuilds/:id"
             component={ SavedBuilds } />
    </Route>
  </Router>
  ),
  document.getElementById('bikePage'));
