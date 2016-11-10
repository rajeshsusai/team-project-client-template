import React from 'react';

export default class HomeItem extends React.Component {
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
      <div>
<<<<<<< HEAD
        <div className= "container">
          <div className= "col-md-2">
          </div>
          <div className= "col-md-8 text-center">
            <div className= "panel panel-default">
              <img src= "img/logo.png className= img-fluid />
                          </div>
=======
        <div className="body-container">
          <div className="col-md-2">
          </div>
          <div className="col-md-8 text-center">
            <div className="panel panel-default">
              <img
                   src="img/logo.png"
                   className="img-fluid" />
            </div>
>>>>>>> b60e62c7880c1f4f5e900c6341a9a20139b10174
          </div>
          <div className="col-md-2">
          </div>
        </div>
      </div>
      );
  }
}
