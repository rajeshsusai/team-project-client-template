import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.data;
    this.sender = props.sender;
  }
  render() {
    var data = this.props.data;
    return (
      <div>
        <nav className="navbar navbar-fixed-top navbar-default">
          <div className="container navbar-inner">
            <div className="navbar-header">
              <button
                      type="button"
                      className="navbar-toggle collapsed"
                      data-toggle="collapse"
                      data-target="#bs-example-navbar-collapse-1"
                      aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div
                 className="btn-toolbar navbar-left"
                 role="toolbar">
              <div className="btn-toolbar">
                <div
                     className="btn-group"
                     role="group">
                  <button
                          onClick={ (e) => {
                                      e.preventDefault();
                                      window.location.href = '/'
                                    } }
                          type="button"
                          className="btn btn-info navbar-btn navbar-btn-left">
                    Bike Part Picker
                  </button>
                  <Link to={ "/Build/" + "1" }>
                  <button
                          type="button"
                          className="btn btn-danger navbar-btn navbar-btn-left">
                    New Build
                  </button>
                  </Link>
                  <Link to={ "/SavedBuilds/" + "1" }>
                  <button
                          type="button"
                          className="btn btn-warning navbar-btn navbar-btn-left">
                    Other Builds
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
                 className="nav nav-center"
                 role="group">
              <button
                      type="button"
                      className="btn btn-success navbar-btn"
                      disabled>
                      { alert(this.location) }
                Current Page: Home
              </button>
            </div>
            <div
                 className="navbar-right"
                 role="toolbar">
              <ul className="nav navbar-nav navbar-right account-name pull-left">
                <Link to={"/account/"+"1"}>
                <a
                   className="account-name-toggle">Account Name</a></Link>
              </ul>
              <ul
                  className="nav navbar-nav navbar-right pull-right"
                  style={ { color: "black" } }>
                <li className="dropdown pull-right">
                  <a
                     href="#"
                     className="dropdown-toggle"
                     data-toggle="dropdown"
                     role="button"
                     aria-haspopup="true"
                     aria-expanded="false">Account <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to={"/account/"+"1"}>
                      <a>My Account</a> {/*TODO: replace with dynamic IDs*/}
                      </Link>
                    </li>
                    <li>
                    <Link to={ "/SavedBuilds/" + "1" }>{/*TODO: replace with dynamic IDs*/}
                      <a>My Builds</a>
                      </Link>
                    </li>
                    <li
                        role="separator"
                        className="divider"></li>
                    <li>
                      <a href="#">Logout</a>
                    </li>
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
