import React from 'react';
export default class SavedBuilds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
      // current_state: 0
    };
  }

  refresh() {}

  componentDidMount() {
    this.refresh();
  }
  render() {
    return (
      <div className="body-container">
            <div className="col-md-2">
            </div>
            <div className="col-md-8 text-center">
                <div className="panel panel-default">
                  SAVED BUILDS STUB
                </div>
            </div>
            <div className="col-md-2">
            </div>
        </div>
      );
  }
}