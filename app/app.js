import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

class HomePage extends React.Component {
  render() {
    return <Home />;
  }
}

/*class NavBar extends React.Component {
  render() {
    return <NavBar />;
  }
}*/
class MyBuild extends React.Component {
  render() {
    return <MyBuild />;
  }
}
class SavedBuilds extends React.Component {
  render() {
    return (
      <SavedBuilds />
      );
  }
}
class Account extends React.Component {
  render() {
    return (
      <Account />
      );
  }
}
class App extends React.Component {
  render() {
    return (<div>
              { this.props.children }
            </div>)
  }
}

ReactDOM.render((
  <Router history={ browserHistory }>
    <Route
           path="/"
           component={ App }>
      { /* Show the Feed at / */ }
      <IndexRoute component={ HomePage } />
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
