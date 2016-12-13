import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Build from './components/Build';
import Account from './components/Account';
import SavedBuilds from './components/SavedBuilds'
import NavBar from './components/navbar'
import Footer from './components/footer'
import ErrorBanner from './components/ErrorBanner'
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

class App extends React.Component {
  render() {
    return (<div>
            <ErrorBanner/>
              <NavBar user={"000000000000000000000001"} page = {this.props.location.pathname}/>
              { this.props.children }
              <button className="btn btn-default" type="button" onClick={() => {
                  var xhr = new XMLHttpRequest();
                  xhr.open('POST', '/resetdb');
                  xhr.addEventListener('load', function() {
                    window.alert("Database reset! Refreshing the page now...");
                    document.location.reload(false);
                  });
                  xhr.send();
                }}>Reset Mock DB</button>
              <Footer />
            </div>)
  }
}

class SavedBuildsWrapper extends React.Component {
  render(){
    return(<div>
              <NavBar user={"000000000000000000000001"} page = {this.props.location.pathname}/>
              <SavedBuilds user={"000000000000000000000001"}/>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                  <ErrorBanner />
                    <button className="btn btn-default" type="button" onClick={() => {
                        var xhr = new XMLHttpRequest();
                        xhr.open('POST', '/resetdb');
                        xhr.addEventListener('load', function() {
                          window.alert("Database reset! Refreshing the page now...");
                          document.location.reload(false);
                        });
                        xhr.send();
                      }}>Reset Mock DB</button>
                  </div>
                </div>
              </div>
              <Footer />
            </div>)
  }
}

class AccountWrapper extends React.Component{
  render() {
    return (<div>
      <NavBar user={"000000000000000000000001"} page={this.props.location.pathname} />
      <Account user={"000000000000000000000001"} />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <ErrorBanner />
              <button className="btn btn-default" type="button" onClick={() => {
                  var xhr = new XMLHttpRequest();
                  xhr.open('POST', '/resetdb');
                  xhr.addEventListener('load', function() {
                    window.alert("Database reset! Refreshing the page now...");
                    document.location.reload(false);
                  });
                  xhr.send();
                }}>Reset Mock DB</button>
            </div>
          </div>
        </div>
      <Footer />
      </div>
    );
  }
}

class BuildWrapper extends React.Component{
  constructor(props){
    super(props);
    console.log("Build wrapper id: " + this.props.params.id);
  }

  render() {

    if (this.props.params.id.length!==24){  //if id not long enough, its not coming from a saved build
      return(
        <div>
        <NavBar user={"000000000000000000000001"} page={this.props.location.pathname} />
        <Build user={"000000000000000000000001"} state={0}/>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
              <ErrorBanner />
                <button className="btn btn-default" type="button" onClick={() => {
                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', '/resetdb');
                    xhr.addEventListener('load', function() {
                      window.alert("Database reset! Refreshing the page now...");
                      document.location.reload(false);
                    });
                    xhr.send();
                  }}>Reset Mock DB</button>
              </div>
            </div>
          </div>
        <Footer />
        </div>
      );
    }
    else { //if we are passing an id, it must be a saved build
      return(
        <div>
        <NavBar user={"000000000000000000000001"} page={this.props.location.pathname} />
        <Build user={"000000000000000000000001"} state={1} buildId={this.props.params.id} />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
              <ErrorBanner />
                <button className="btn btn-default" type="button" onClick={() => {
                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', '/resetdb');
                    xhr.addEventListener('load', function() {
                      window.alert("Database reset! Refreshing the page now...");
                      document.location.reload(false);
                    });
                    xhr.send();
                  }}>Reset Mock DB</button>
              </div>
            </div>
          </div>
        <Footer />
        </div>
      );
    }
  }
}
ReactDOM.render((
  <Router history={ browserHistory }>
    <Route
           path="/"
           component={ App }>
      { /* Show the Feed at / */ }
      <IndexRoute component={ Home } />

      </Route>
    <Route
             path="build/:id"
             component={ BuildWrapper } />

   <Route
            path="build/new"
            component={ BuildWrapper } />
    <Route
           path="savedbuilds/:id"
           component={ SavedBuildsWrapper } />

    <Route
           path="account/:id"
           component={ AccountWrapper } />
  </Router>
  ),
  document.getElementById('bikePage'));
