import React from 'react';
import { BikeType } from '../util.js';
// import NavBar from './navbar'
// import Footer from './footer'
/*
The component representing bike type selection
*/
export default class SelectBikeType extends React.Component {
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
  refresh() {
  }

  componentDidMount() {
    this.refresh();
  }

/*
  Handle the clicks on bike type buttons.
  No server syncing needs to be done here, since no information needs to persist
  if a user merely selects a biketype but does not yet make a build.
*/

/*eslint-disable */ // TODO remove when done

  handleBikeBtnClickEvent(clickEvent, bikeType) {

/*eslint-enable */ // TODO remove when done

    // Stop the event from propagating up the DOM
  // tree, since we handle it here. Also prevents
  // the link click from causing the page to scroll to the top.
  clickEvent.preventDefault();
  // 0 represents the 'main mouse button' --
  // typically a left click
  // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
  if (clickEvent.button === 0) {
    // TODO handle the click event here and send the bikeType value to the
    //      page that allows for parts to be selected, then transition to part
    //      selection page
    // TODO test the proper execution of the click events
  }

  }

  render() {
    return (
      <div className="container">
        <div className="col-md-2">
        </div>
        <div className="col-md-8 text-center">
            <div className="panel panel-default">
            <row>
                <div className="btn-group" style="padding-top:4px;" role="group" aria-label="...">
                  <button type="button" onClick={(e) => this.handleBikeBtnClickEvent(e, BikeType.WINTER)} className="btn btn-primary build-bike-button"><span className="img-button icon-winter-bike"><br /><br /><br /><br /><br /><br />WINTER</span></button>
                  <button type="button" onClick={(e) => this.handleBikeBtnClickEvent(e, BikeType.TRAIL)} className="btn btn-primary build-bike-button"><span className="img-button icon-trail-bike"><br /><br /><br /><br /><br /><br />TRAIL</span></button>
                </div>
            </row>
            <row>
                <div className="btn-group" style="padding-bottom:4px;" role="group" aria-label="...">
                  <button type="button" onClick={(e) => this.handleBikeBtnClickEvent(e, BikeType.CITY)} className="btn btn-primary build-bike-button"><span className="img-button icon-city-bike"><br /><br /><br /><br /><br /><br />CITY</span></button>
                  <button type="button" onClick={(e) => this.handleBikeBtnClickEvent(e, BikeType.MOUNTAIN)} className="btn btn-primary build-bike-button"><span className="img-button icon-mtn-bike"><br /><br /><br /><br /><br /><br />MOUNTAIN</span></button>
                </div>
            </row>
            </div>
        </div>
        <div className="col-md-2">
        </div>
        </div>
    );
  }
}
