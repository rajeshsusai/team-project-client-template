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
        <div className="container">
          <div className="col-md-2">
          </div>
          <div className="col-md-8 text-center">
            <div className="panel panel-default">
<<<<<<< HEAD
              <img
                   src="img/logo.png"
                   className="img-fluid" />
=======
              <img src="img/logo.png" className="img-fluid" />
>>>>>>> b0cc88a7aa6986c2b818ebe79dd141a526b03993
            </div>
          </div>
          <div className="col-md-2">
          </div>
        </div>
      </div>
      );
  }
}
