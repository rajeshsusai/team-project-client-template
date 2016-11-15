import React from 'react';
import {getUserData} from '../server.js'
import {changeFirstName,changeLastName, changeEmail, changeUserName ,changePassword} from '../server.js'
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

  handleFNameClickEvent(clickEvent, first_name){
    clickEvent.preventDefault();
    if(clickEvent.button === 0){
      changeFirstName(this.state.password, first_name);
      this.refresh();
    }
  }
  handleLNameClickEvent(clickEvent, last_name){
    clickEvent.preventDefault();
    if(clickEvent.button === 0){
      changeLastName(this.state.password, last_name);
      this.refresh();
    }
  }
  handleUserNameClickEvent(clickEvent, user_name){
    clickEvent.preventDefault();
    if(clickEvent.button === 0){
      changeUserName(this.state.password, user_name);
      this.refresh();
    }
  }
  handlePasswordClickEvent(clickEvent, password){
    clickEvent.preventDefault();
    if(clickEvent.button === 0){
      changePassword(this.state.password, password);
      this.refresh();
    }
  }

  handleEmailClickEvent(clickEvent, email){
    clickEvent.preventDefault();
    if(clickEvent.button === 0){
      changeEmail(this.state.password, email);
      this.refresh();
    }
  }

  onClickUpdateAccount(e){
    e.preventDefault();
    if(e ===0){
      alert("Your account has been updated");
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
                <button type="button" role="group" onClick ={(e) => this.onclick(e, this.state.first_name)} className ="btn btn-primary">Update First Name</button>
                </div>
                <div className="form-group">
                <label className="control-label " htmlFor="last name" >Last Name</label>
                  <input type="text" className="form-control" id="last name" placeholder = {lastName}/>
                  <button type="button" role="group" onClick ={(e) => this.onclick(e,this.state.last_name)} className ="btn btn-primary">Update Last Name</button>

                </div>
          <div className="form-group">
            <label className="control-label " htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder= {email} />
              <button type="button" role="group" onClick ={(e) => this.onclick(e,this.state.email)} className ="btn btn-primary">Update Email</button>
              </div>

          <div className="form-group">
            <label className="control-label " htmlFor="username" > Username</label>
              <input type="text" className="form-control" id="username" placeholder = {username}/>
              <button type="button" role="group" onClick ={(e) => this.onclick(e,this.state.user_name)} className ="btn btn-primary">Update User Name</button>
              </div>
          <div className="form-group">
            <label className="control-label " htmlFor="password" > Password</label>
              <input type="text" className="form-control" id="password" placeholder = {password}/>
                <button type="butto n" role="group" onClick ={(e) => this.onClick(e,changePassword(id,this.state.password))}className="btn btn-primary"> Update Password</button>
          </div>
        </div>
       </div>
       </div>
              );
            }
          }
