import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
//import MyBuild from './components/MyBuild';
//import SavedBuilds from './components/SavedBuilds';
import Account from './components/Account';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

class App extends React.Component {
  render() {
    return (<div>

              { this.props.children }
            </div>);
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
             path="MyBuild/:id"
             component={ MyBuild } />
                   <Route
             path="SavedBuilds/:id"
             component={ SavedBuilds } />
    </Route>
  </Router>
  ),
  document.getElementById('bikePage'));
