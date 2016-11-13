import React from 'react';
// import React-Router from 'react-router'
import {getUserData} from './app/server.js'
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
    // var data = this.props.data;
    // var contents;
    // switch(data.type){
    //   case "account":
    //   contents=(
    //     <Account key ={data._id}
    //              firstName ={data.contents.first_name}
    //              lastName = {data.contents.last_name}
    //              email = {data.contents.email}
    //              password = {data.contents.password}>
    //         {data.contents.contents}
    //     </Account>
      // );
      // break;
      // default:
      //   throw new Error("Unknown Account: " + data.type);
      // }
    return (
    <div>
      <div className = "container accountPage">
        <div className = "jumbotron">
          <div className = "form-group">

            <caption>Account: + </caption>
            <form>
              <div className="form-group">
                <label className="Email">Email Address</label>

              </div>
              <div className = "form-group">
                <label className ="First Name">First Name</label>

              </div>
              <div className="form-group">
                <label className ="Last Name">Last Name</label>

              </div>
              <div className="form-group">
                <label className ="Password">Password</label>

               // @TODO add password change button to password once setter function
               //has been made
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
      );
  }
}
