import React from 'react';
import SelectBikeType from './SelectBikeType';
import SelectBikeParts from './SelectBikeParts'
import { selectBikeType } from '../server'
import { getBuildData } from '../server'
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
      current_state: 0,
      buildId: null,
      user: 1
    /* 0 : SelectBikeType
      1 : SelectBikeParts
      2 : ReviewBuild(SelectBikeParts extended)
    */
    };
  }
  handleBikeBtnClickEvent(clickEvent, bikeType) {
    clickEvent.preventDefault();
    if (clickEvent.button === 0) {
      var callbackFunction = (updateBuildState) => {
        this.setState({
          current_state: 1
          /*dynamic buildId*/
        });
      }
      selectBikeType(1, bikeType, callbackFunction)
      this.refresh();
    }

  }
  reviewClick(e, buildList) {
    e.preventDefault();
    if (e.button === 0) {
      var callbackFunction=(revState)=>{this.setState({buildList: buildList})}
    }
    /*need to set var to progress to state 2, communicate to reviewBuild*/
    this.refresh();
    
  }


  /*
    Refresh should be called after a client event is handled by the server if
    any persistent state needs to be synced
  */
  refresh() {
    // getBuildData(this.state.user, (buildData) => {
    //   this.setState(buildData)
    // });
      this.setState({
        buildId:1
      });
      /*TODO: dynamically grab new ID generated*/
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    switch (this.state.current_state) {
      case 0:
        return (<SelectBikeType key={0} onClick={ (e, t) => this.handleBikeBtnClickEvent(e, t) } />);
      case 1:
        return (<SelectBikeParts 
          key={this.state.buildId}
          onClick={ (e, state) => this.reviewClick(e, state) } />);
      case 2:
        return (
          <div>
            <SelectBikeParts />
            <ReviewBuild />
          </div>
          );
      default:
        return "418";
    }
  }
}
