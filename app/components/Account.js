import React from 'react';
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
  refresh() {}

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-2">
        </div>
        <div className="col-md-8 text-center">
          <div className="panel panel-default">
          HI MY NAME IS EARL
          </div>
        </div>
        <div className="col-md-2">
        </div>
      </div>
      );
  }
}