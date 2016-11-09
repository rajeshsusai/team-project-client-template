import React from 'react';
import HomeItem from './HomeItem'

/*
The component for the Home page, which will contain HomeBody components as
children.
*/
export default class Home extends React.Component {
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
        <HomeItem />
      </div>
      );
  }
}
