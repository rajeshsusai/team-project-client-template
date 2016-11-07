import React from 'react';
import ReactDOM from 'react-dom';

class navbar extends React.Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-fixed-top navbar-default">
      <div className="container navbar-inner">
          <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                 <span className="sr-only">Toggle navigation
                 </span>
                 <span className="icon-bar">
                 </span>
                 <span className="icon-bar">
                 </span>
                 <span className="icon-bar">
                 </span>
             </button>
          </div>
          <div className="btn-toolbar navbar-left" role="toolbar">
              <div className="btn-toolbar">
                  <div className="btn-group" role="group">
                      <button type="button" className="btn btn-info navbar-btn navbar-btn-left">
                             Bike Part Picker
                         </button>
                      <button type="button" className="btn btn-danger navbar-btn navbar-btn-left">
                             New Build
                         </button>
                      <button type="button" className="btn btn-warning navbar-btn navbar-btn-left">
                             Other Builds
                         </button>
                  </div>
              </div>
          </div>
          <div className="nav nav-center" role="group">
              <button type="button" className="btn btn-success navbar-btn" disabled>
               Current Page: Home
             </button>
          </div>
          <div className="navbar-right" role="toolbar">
              <ul className="nav navbar-nav navbar-right account-name pull-left">
                  <a href="#" className="account-name-toggle">Account Name</a>
              </ul>
              <ul className="nav navbar-nav navbar-right pull-right" style="color:black;">
                  <li className="dropdown pull-right">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span className="caret"></span></a>
                      <ul className="dropdown-menu">
                          <li><a href="#">My Account</a></li>
                          <li><a href="#">My Builds</a></li>
                          <li role="separator" className="divider"></li>
                          <li><a href="#">Logout</a></li>
                      </ul>
                  </li>
              </ul>
          </div>
      </div>
      </nav>
      </div>
    );
  }
}

ReactDOM.render(
  <navbar />,
  document.getElementById('navbar')
);
