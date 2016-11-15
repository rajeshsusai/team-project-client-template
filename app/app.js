import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Build from './components/Build';
import Account from './components/Account';
import SavedBuilds from './components/SavedBuilds'
import NavBar from './components/navbar'
import Footer from './components/footer'
import {readDocument} from './database';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

class App extends React.Component {


  render() {
    return (<div>
              <NavBar user={1} page = {this.props.location.pathname}/>
              { this.props.children }
              <Footer />
            </div>)
  }
}

class SavedBuildsWrapper extends React.Component {
  render(){
    var user = readDocument("users", 1);
    return(<div>
              <NavBar user={1} page = {this.props.location.pathname}/>
              <SavedBuilds user={1} builds = {user.buildList} />
              <Footer />
            </div>)
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5002eede7d7b7bbf6527d9f5df1ae6feb4b93838

class AccountWrapper extends React.Component {
  render(){
    return(<div>
              <NavBar user={1} page = {this.props.location.pathname}/>
              <Account user={1} />
              <Footer />
            </div>)
<<<<<<< HEAD
=======
=======
  }
}

>>>>>>> 5002eede7d7b7bbf6527d9f5df1ae6feb4b93838
class BuildWrapper extends React.Component{
  render() {
    var user=readDocument("users", 1);
    return (<div>
      <NavBar user={1} page={this.props.location.pathname} />
      <Build user={1} state={0} />
      <Footer />
      </div>
    );
>>>>>>> bf9d24639ed05565888246c8d32c03ca02400da6
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
             path="build/:id"
             component={ Build } />

    </Route>
    <Route
             path="build/:id"
             component={ BuildWrapper } />
    <Route
           path="savedbuilds/:id"
           component={ SavedBuildsWrapper } />
<<<<<<< HEAD
           <Route
                  path="account/:id"
                  component={ AccountWrapper } />
=======
    <Route
          path="account/:id"
          component={ AccountWrapper } />
>>>>>>> 5002eede7d7b7bbf6527d9f5df1ae6feb4b93838
  </Router>
  ),
  document.getElementById('bikePage'));
