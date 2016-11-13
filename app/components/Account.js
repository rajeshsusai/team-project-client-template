import React from 'react';
// import React-Router from 'react-router'
import {getUserData} from '../server.js'
export default class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }
  /*
  Refresh should be called after a client event is handled by the server if
  any persistent state needs to be synced
  */
  refresh(){
    getUserData(this.props.user, (userData) =>{
      this.setState(userData);
    });
  }

  componentDidMount(){
    this.refresh();
  }

  render() {

    var firstName = this.props.user.first_name;
    var lastName = this.props.last_name;
    var email = this.props.email;
    var password = this.props.password;
    var username = this.props.user_name;

    return (
      <div className="container jumbotron accountcontrol">
        <div action="My-Account-Page form-horizontal" method="post">
          <div className="form-group">
            <label className="control-label col-sm-2 left" htmlFor="first name" >First Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="first name" placeholder = {firstName}/>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2 left" htmlFor="last name" >Last Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="last name" placeholder = {lastName}/>
                </div>
              </div>
            <div className="form-group">
              <label className="control-label col-sm-2 left" htmlFor="email">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="email" placeholder= {email} />
                </div>
              </div>
                <div className="form-group">
                  <label className="control-label col-sm-2 left" htmlFor="username" > Username</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="username" placeholder = {username}/>
                    </div>
                  </div>
                      <div className="form-group">
                      <label className="control-label col-sm-2 left" htmlFor="password" > Password</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" id="password" placeholder = {password}/>
                        </div>
                      </div>
                        <div className="submit">
                          <input type="Submit" value="Exit" />
                          </div>
                        </div>
                      </div>
                    );
                  }
                }
