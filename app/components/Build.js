import React from 'react';
import SelectBikeType from './SelectBikeType';
import SelectBikeParts from './SelectBikeParts'
//import NavBar from './navbar'
//import Footer from './footer'
/*
The wrapper for the build process starting from SelectBikeType
*/
export default class Build extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
      current_state: 0
    /* 0 : SelectBikeType
      1 : SelectBikeParts
      2 : ReviewBuild(SelectBikeParts extended)
    */
    };
  }
  handleBikeBtnClickEvent(clickEvent, bikeType) {
    clickEvent.preventDefault();
    if (clickEvent.button === 0) {
      
    }

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
    switch (this.state.current_state) {
      case 0:
        return (<SelectBikeType onClick={(e, t)=> this.handleBikeBtnClickEvent(e, t)}/>);
      case 1:
        return (<SelectBikeParts />);
      case 2:
        return (
          <div>
            <SelectBikeParts />
            <ReviewBuild />
          </div>
          );
      default:
        return "404";
    }
  }
}
