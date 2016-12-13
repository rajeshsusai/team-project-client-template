import React from 'react';
import { updateAccount, getUserData } from '../server.js';

export default class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: "",
            first_name: "",
            last_name: "",
            password: "",
            user_name: "",
            email: ""
        };
    }

    /*
    Refresh should be called after a client event is handled by the server if
    any persistent state needs to be synced
    */

    refresh() {
        getUserData(this.props.user, (userInfo) => {
            this.setState({
                user_id: userInfo._id,
                first_name: userInfo.first_name,
                last_name: userInfo.last_name,
                password: userInfo.password,
                user_name: userInfo.user_name,
                email: userInfo.email
            });
        });
    }

    componentDidMount() {
        this.refresh();
    }

    //
    handleChangefName(event) {
        event.preventDefault();
        var name = document.getElementById("first name").value;
        document.getElementById("demo").innerHTML = name;
        // this.changeFirstName(event.target.userId, event.target.first_name);
        this.setState({
            first_name: name
        });
        alert(name);
    // this.refresh();
    }

    handleUpdate(event) {
        event.preventDefault();
        if (event.button === 0) {
            var name = document.getElementById("first name").value;
            var lname = document.getElementById("last name").value;
            var newemail = document.getElementById("email").value;
            var username = document.getElementById("username").value;
            var newpassword = document.getElementById("password").value;
            updateAccount(this.state.user_id, name, lname, newemail, username, newpassword)
            this.setState({
                first_name: name,
                last_name: lname,
                email: newemail,
                user_name: username,
                password: newpassword
            });
            this.refresh();
            alert("Account is being updated.");
            this.refresh();
        }
    }

    handleClickEvent(clickEvent) {
        clickEvent.preventDefault();
        this.refresh();
    }
    render() {
        return (
            <div className="body-container">
        <div className="col-md-2">
        </div>
        <div className="col-md-8 text-align-left">
          <div className="panel panel-default">
            <div className="form-group">
              <br></br>
            <label className="control-label " htmlFor="first name" >First Name</label>
              <input type="text" className="form-control" id="first name" placeholder = {this.state.first_name}/>

              <div className="form-group">
                <label className="control-label " htmlFor="last name" >Last Name</label>
                  <input type="text" className="form-control" id="last name" placeholder = {this.state.last_name}/>

                </div>
                </div>
              <div className="form-group">
                <label className="control-label " htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder= {this.state.email} />
                  </div>

                  <div className="form-group">
                    <label className="control-label " htmlFor="username" > Username</label>
                      <input type="text" className="form-control" id="username" placeholder = {this.state.user_name}/>

                      </div>

                        <div className="form-group">
                        <label className="control-label " htmlFor="password" > Password</label>
                          <input type="text" className="form-control" id="password" placeholder = {this.state.password}/>
                        </div>
                        <button type ="button"
            onClick ={(e) => this.handleUpdate(e)} >Update</button>
            </div>
          </div>
        </div>

            );
    }
}
