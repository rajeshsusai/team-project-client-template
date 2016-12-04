import React from 'react';
import SelectBikeType from './SelectBikeType';
import SelectBikeParts from './SelectBikeParts';
import { selectBikeType } from '../server';
import { getBuildData } from '../server';
import { writeBuildName } from '../server';
import ReviewBuild from './ReviewBuild'

/*
The wrapper for the build process starting from SelectBikeType
*/
export default class Build extends React.Component {
  constructor(props) {
    super(props);
    var z=props.buildId;
    if (props.buildId===undefined){
      z=1;
    }
    this.state = {
      /*Passing to contents.parts[0].build_name in select bike parts
      Structure should support bike part table format in proper order.*/
      current_state: props.state,
      buildId: z,
      user: 1
      // buildList:props.buildList
    /* 0 : SelectBikeType
      1 : SelectBikeParts
      2 : ReviewBuild(SelectBikeParts extended)
    */
  }
}

  handleBikeBtnClickEvent(clickEvent, bikeType) {
    clickEvent.preventDefault();
    if (clickEvent.button === 0) {
      selectBikeType(1, bikeType, (debug)=>{
        this.setState({
          current_state: 1,
          buildId: debug._id,//fscking buildIdGenerator was unnecessary in the end.
          user: this.props.user
        });
        this.refresh();
      })
    }
  }

  reviewClick(e, total_price) {
    e.preventDefault();
    if (e.button === 0) {
      this.setState({
        current_state:2,
        // build_List:buildList,
        total_price: total_price
      })
    }
    /*need to set var to progress to state 2, communicate to reviewBuild
    TODO: update state/store buildList in arrow func.*/

    this.refresh();

  }

  onClickSave(e) {
    e.preventDefault();

    if(e.button === 0)
		{
      writeBuildName(this.state.buildId, this.state.build_name, this.state.total_price, finalBuild => {
        this.setState({
          current_state: 2,
          buildId: finalBuild._id
        });
      });
      this.refresh();
        alert("Your build has been saved as " + this.state.build_name + "!" +
      "\nThank you for using BikePartPicker! To make another build, please navigate back to the home page by clicking \"BikePartPicker\" on the top navbar.")
    }
  }

  onChangedText(e) {
    this.setState({build_name: e.target.value});
  }


  /*
    Refresh should be called after a client event is handled by the server if
    any persistent state needs to be synced
  */
  refresh() {
     getBuildData(this.state.buildId, (buildData) => {
       this.setState(buildData)
     });
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
          key={1}
          state={this.state}
          onClick={ (e, buildList, total_price) => this.reviewClick(e, total_price) }
          buildId = {this.state.buildId}/>);
      case 2:
        return (
          <div>
            <SelectBikeParts
            key={2}
            state={this.state}
            onClick={ (e, buildList, total_price) => this.reviewClick(e, total_price) }
            buildId = {this.state.buildId} />
            <ReviewBuild
            key={3}
            state={this.state}
            onChangedText={(e) => this.onChangedText(e)}
            onClickSave={(e) => this.onClickSave(e)}
            total_price={this.state.total_price}/>
          </div>
          );
      default:
        return "418";
    }
  }
}
