import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { getUserData } from '../server';
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }

  refresh() {
    getUserData(this.props.user, (userData) => {
      this.setState(userData);
    });
  }
  componentDidMount() {
    this.refresh();
  }

  getName(){
    if( this.props.page.match("/SavedBuilds")){
      return "Saved Builds";
    }
    else if(this.props.page.match("/Build/")){
      return "My Build";
    }
    else if (this.props.page.match("/account/")){
      return "My Account";
    }
    else{
      return "Home";
    }
  }


  render() {
    var userName = this.state.first_name;
    var userId = this.state._id;
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
                  <Link to={ "/Build/" + {userId} }>
                  <button
                          type="button"
                          className="btn btn-danger navbar-btn navbar-btn-left">
                    New Build
                  </button>
                  </Link>
                  <Link to={ "/SavedBuilds/" + {userId}}>
                  <button
                          type="button"
                          className="btn btn-warning navbar-btn navbar-btn-left">
                    Saved Builds
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
                Current Page: {this.getName()}
              </button>
            </div>
            <div
                 className="navbar-right"
                 role="toolbar">
              <ul className="nav navbar-nav navbar-right account-name pull-left">
                <Link to={"/account/"+"1"}>
                <span
                   className="account-name-toggle">{userName}</span></Link>
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
                      <Link to={"/account/"+{userId}}>
                      <span>My Account</span>
                      </Link>
                    </li>
                    <li>
                    <Link to={ "/SavedBuilds/" + {userId} }>
                      <span>My Builds</span>
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
