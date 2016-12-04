import React from 'react';
import {changeFirstName, getUserData} from '../server.js';


// import React-Router from 'react-router'
export default class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
      first_name: "",
      last_name: "",
      password: "",
      user_name: "",
      email:""
    };
}

  /*
  Refresh should be called after a client event is handled by the server if
  any persistent state needs to be synced
  */

  refresh(){
    getUserData(this.props.user, (userInfo) =>{
      this.setState({
        user_id: userInfo.user_id,
        first_name: userInfo.first_name,
        last_name: userInfo.last_name,
        password: userInfo.password,
        user_name: userInfo.user_name,
        email: userInfo.email
      });
    });
  }

  componentDidMount(){
    this.refresh();
  }

//
  handleChangefName(event){
    event.preventDefault();
    var name = document.getElementById("first name").value;
      changeFirstName(this.state.user_id, name);
      this.setState({first_name: name});
      // this.refresh();
  }

//   handleKeyUp(e) {
//   e.preventDefault();
//   if (e.key === "Enter") {
//     var firstname = this.state.first_name.trim();
//     if (firstname !== "") {
//       // Post comment
//       this.props.changeFirstName(this.state.userId,this.state.first_name);
//       // this.setState({ value: "" });
//     }
//   }
// }

  handleChangelName(event){
    event.preventDefault();
    var name = document.getElementById("last name").value;
      changeFirstName(this.state.user_id, name);
      this.setState({first_name: name});
  }
  handleChangeEmail(event){
    event.preventDefault();
    var name = document.getElementById("email").value;
      changeFirstName(this.state.user_id, name);
      this.setState({first_name: name});
    // alert("Hello");
  }
  handleChangeUserName(event){
    event.preventDefault();
    var name = document.getElementById("user name").value;
      changeFirstName(this.state.user_id, name);
      this.setState({first_name: name});
  }
  handleChangePassword(event){
    event.preventDefault();
    var name = document.getElementById("password").value;
      changeFirstName(this.state.user_id, name);
      this.setState({first_name: name});
  }

  handleClickEvent(clickEvent, first_name){
    clickEvent.preventDefault();
    if(clickEvent.button === 0){
      changeFirstName(this.props.userId, first_name);
      this.refresh();
    }
  }



  // handleClickEvent(clickEvent,userId,first_name,last_name,email,password,user_name,cb){
  //   clickEvent.preventDefault();
  //   if(clickEvent.button === 0){
  //
  //     changeFirstName(userId,first_name,cb);
  //     this.refresh();
  //   }
  // }

  // handleUpdateBtnClickEvent(clickEvent){
  //   clickEvent.preventDefault();
  //   if(clickEvent.button === 0){
  //
  //     var callbackFunction = (userdata) =>{
  //       // updateAccount(userId, newfName, newlName, newemail, newuName, newPassword);
  //       this.setState({
  //         first_name : userdata.newFirstName,
  //         last_name: userdata.newLastName,
  //         email: userdata.newEmail,
  //         user_name: userdata.newUserName,
  //         password: userdata.newPassword
  //       });
  //     }
  //       // updateAccount(userId, newfName, newlName, newemail, newuName, newPassword,callbackFunction);
  //       callbackFunction();
  //     this.refresh();
  //   }
  // }
  // updateListener(){
  //   alert(this.first_name);
  // }


  render() {

    // var firstName = this.state.first_name;
    // var lastName = this.state.last_name;
    // var email = this.state.email;
    // var password = this.state.password;
    // var username = this.state.user_name;

    return (
      <div className="body-container">
        <div className="col-md-2">
        </div>
        <div className="col-md-8 text-align-left">
          <div className="panel panel-default">
            <div className="form-group">
              <br></br>
            <label className="control-label " htmlFor="first name" >First Name</label>
              <input type="text" className="form-control" id="first name" value = {this.state.first_name}/>
              <button type ="button"
                onClick ={(e) => this.handleChangefName(e)}
                >Update First name</button>
              <br>

              </br>
              <div className="form-group">
                <label className="control-label " htmlFor="last name" >Last Name</label>
                  <input type="text" className="form-control" id="last name" value = {this.state.last_name}/>
                  <button type  ="button" onClick ={(e) => this.handleChangelName(e)}>Update Last name</button>

                </div>
                </div>
              <div className="form-group">
                <label className="control-label " htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" value= {this.state.email} />
                  <button type = "button" onClick ={(e) => this.handleChangeEmail(e)}>Update Email</button>
                  </div>

                  <div className="form-group">
                    <label className="control-label " htmlFor="username" > Username</label>
                      <input type="text" className="form-control" id="username" value = {this.state.user_name}/>
                      <button type = "button" onClick ={(e) => this.handleChangeUserName(e)}>Update User Name</button>
                      </div>

                        <div className="form-group">
                        <label className="control-label " htmlFor="password" > Password</label>
                          <input type="text" className="form-control" id="password" value = {this.state.password}/>
                            <button type="button" onClick ={(e) => this.handleChangePassword(e)}>Update Password</button>
                        </div>
            </div>
          </div>
        </div>

              );
            }
          }
