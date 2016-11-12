import React from 'react';
import Router from 'react-router';
import {readDocument} from '../database';
import {getUserData} from '../server';
export default class SavedBuilds extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    var builds;
    this.state = {
      contents: []
      // current_state: 0
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

  populateTable(){

    var rows = [];
  //  var builds = readDocument("builds", this.props.builds);
    for(var i = 0; i < Object.keys(this.props.builds).length; i++){
      var build = readDocument("builds", this.props.builds[i]);
      rows.push(<tr onClick = {this.handleClick}>
          <td>{build.contents.build_name}</td>
          <td>{build.contents.total_price}</td>
          <td>{build.contents.bike_type}</td>
          <td>{build.contents.status}</td>
      </tr>);
    }
    return rows;
  }

  handleClick(clickEvent){
    clickEvent.preventDefault();
    if(clickEvent.button === 0){
      this.context.history.pushState(null, 'Build/:id');
    }
  }
  render() {

    return (
      <div className="body-container">
            <div className="col-md-2">
            </div>
            <div className="col-md-8 text-center">
                <div className="panel panel-default">
                <div className="container savedBuildTable">
                    <div className="jumbotron">
                        <table className="table table-hover table-bordered">
                            <caption>My Favorite Builds</caption>
                            <thead>
                                <tr>
                                    <th>Build Name</th>
                                    <th>Price</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody data-link="row" className="rowlink">
                            {this.populateTable()}
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-2">
            </div>
        </div>
      );
  }
}

SavedBuilds.contextTypes = {
  history: React.PropTypes.object.isRequired,
};
