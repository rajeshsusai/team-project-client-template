import React from 'react';
import { BikeType } from '../util.js';

import  "../scss/SelectBikeType.scss";

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

  render() {
    return (

      <div id="SelectBikeType" className="body-container">
          <row>
            <div className="col-md-2">
            </div>
            <div className="col-md-8 text-center">
            <div className="panel panel-default">
              <row>
                  <div className="btn-group" role="group" aria-label="...">
                    <button type="button" onClick={(e) => this.props.onClick(e, 13)} className="btn btn-primary build-bike-button"><span className="img-button icon-winter-bike"><br /><br /><br /><br /><br /><br />WINTER</span></button>
                    <button type="button" onClick={(e) => this.props.onClick(e, 12)} className="btn btn-primary build-bike-button"><span className="img-button icon-trail-bike"><br /><br /><br /><br /><br /><br />TRAIL</span></button>
                  </div>
                  <div className="btn-group" role="group" aria-label="...">
                    <button type="button" onClick={(e) => this.props.onClick(e, 11)} className="btn btn-primary build-bike-button"><span className="img-button icon-city-bike"><br /><br /><br /><br /><br /><br />CITY</span></button>
                    <button type="button" onClick={(e) => this.props.onClick(e, 10)} className="btn btn-primary build-bike-button"><span className="img-button icon-mtn-bike"><br /><br /><br /><br /><br /><br />MOUNTAIN</span></button>
                  </div>
              </row>
            </div>
            </div>
            <div className="col-md-2">
            </div>
          </row>
        </div>
    );
  }
}
