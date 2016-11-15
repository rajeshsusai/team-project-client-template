import React from 'react';
// import React-Router from 'react-router'
import {getUserData} from '../server.js'
import {changePassword} from '../server.js'
export default class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
      fname:'',
      lname: '',
      email: '',
      uname: '',
      pw: ''
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

  handlePWClickEvent(clickEvent, password){
    clickEvent.preventDefault();
    //alert(password);
    if(clickEvent.button === 0){
      changePassword(this.state.password, password);
      this.refresh();
    }
  }



  render() {

    var firstName = this.state.first_name;
    var lastName = this.state.last_name;
    var email = this.state.email;
    var password = this.state.password;
    var username = this.state.user_name;
    var id = this.state.userId;

    return (
      <div className="body-container">
        <div className="col-md-2">
        </div>
        <div className="col-md-8 text-align-left">
          <div className="panel panel-default">
            <div className="form-group">
              <br></br>
            <label className="control-label " htmlFor="first name" >First Name</label>
              <input type="text" className="form-control" id="first name" placeholder = {firstName}/>
                <button type="button" role="group" onClick ={(e) => this.state.onclick(e,this.state.fname)} className ="btn btn-primary">Update First Name</button>
                </div>
                <div className="form-group">
                <label className="control-label " htmlFor="last name" >Last Name</label>
                  <input type="text" className="form-control" id="last name" placeholder = {lastName}/>
                  <button type="button" role="group" onClick ={(e) => this.state.onclick(e,this.state.fname)} className ="btn btn-primary">Update Last Name</button>

                </div>
          <div className="form-group">
            <label className="control-label " htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder= {email} />
              <button type="button" role="group" onClick ={(e) => this.state.onclick(e,this.state.fname)} className ="btn btn-primary">Update Email</button>
              </div>

          <div className="form-group">
            <label className="control-label " htmlFor="username" > Username</label>
              <input type="text" className="form-control" id="username" placeholder = {username}/>
              <button type="button" role="group" onClick ={(e) => this.state.onclick(e,this.state.fname)} className ="btn btn-primary">Update User Name</button>
              </div>
          <div className="form-group">
            <label className="control-label " htmlFor="password" > Password</label>
              <input type="text" className="form-control" id="password" placeholder = {password}/>
                <button type="button" role="group" onClick ={(e) => this.state.onClick(e,changePassword(id,this.state.value))}className="btn btn-primary"> Update Password</button>
          </div>
                <button type="button" role="group" onClick ={(e) => this.state.onClick(e,this.setState)} className = "btn btn-primary">Save</button>
        </div>
       </div>
       </div>
              );
            }
          }
