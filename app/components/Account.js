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

    var firstName = this.state.first_name;
    var lastName = this.state.last_name;
    var email = this.state.email;
    var password = this.state.password;
    var username = this.state.user_name;

    return (

      <div>
        <div className="body-container">
          <div className="col-md-2">
          </div>
          <div className="col-md-8 text-center">
            <div className="panel panel-default">
              <div className="jumbotron accountcontrol">
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
                                </div>

                              </div>
            </div>
          </div>
          <div className="col-md-2">
          </div>
        </div>
      </div>




                    );
                  }
                }
