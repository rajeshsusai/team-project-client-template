import React from 'react';
export default class SelectBikeParts extends React.Component {
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
        SELECTBIKEPARTS STUB
      </div>
      );
  }
}