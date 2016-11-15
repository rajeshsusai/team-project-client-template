import React from 'react';
import { getBuildData, addPart } from '../server';
import {readDocument} from '../database';
export default class SelectBikeParts extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickEvent = this.handleClickEvent.bind(this);
    this.state = {
      build: null,
      part: null

    }
  }

  /*
    Refresh should be called after a client event is handled by the server if
    any persistent state needs to be synced
  */
  refresh() {
    getBuildData(this.props.buildId, (buildsData) => {
      this.setState({
        build: buildsData
    });
  });
}

  componentDidMount() {
    this.refresh();
  }

  handleClickEvent(clickEvent, partId){
    clickEvent.preventDefault();
    if(clickEvent.button === 0){
      addPart(this.props.buildId, partId, (buildData) => {
        this.setState({
          build: buildData,
          part: partId
        });
      });
    }
  }

  getPartName(partId){
    if(partId === null){
      return "Empty";
    } else {
      var part = readDocument('parts', partId);
      var name = part.contents.name;
      return name;
    }
  }

  populateDropDown(partId){
    var  dropdown = [];
    for(var i = 30; i <= 44; i++){
      var part = readDocument('parts', i);
      if(part.contents.part_type === partId){
        dropdown.push(<a onClick = {(e)=> this.handleClickEvent(e, part._id)}>{part.contents.name}</a>);
      }
    }
    return dropdown;
  }

  render() {
    return (
      <div>
        <div className="container mainBuildTable">
            <div className="jumbotron">
                <table className="table table-striped">
                    <caption>My Current Build</caption>
                    <thead>
                        <tr>
                            <th>Part Type</th>
                            <th>Part</th>
                            <th>Price</th>
                            <th className="pull-right">Select Part</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                          <th scope="row">Front Derailleur</th>
                          <td>{this.getPartName(43)}</td>
                          <td>N/A</td>
                          <td>
                            <li className="dropdown pull-right">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false">Add Part <span className="caret"></span></a>
                              <ul className="dropdown-menu">
                                <li>
                                  {this.populateDropDown(92)}
                                </li>
                              </ul>
                            </li></td>
                          </tr>
                          <tr>
                              <th scope="row">Rear Derailleur</th>
                              <td>Blah</td>
                              <td>N/A</td>
                                <td>
                                  <li className="dropdown pull-right">
                                    <a
                                      href="#"
                                      className="dropdown-toggle"
                                      data-toggle="dropdown"
                                      role="button"
                                      aria-haspopup="true"
                                      aria-expanded="false">Add Part <span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                      <li>
                                        {this.populateDropDown(91)}
                                      </li>
                                    </ul>
                                  </li></td>
                          </tr>
                          <tr>
                              <th scope="row">Tires</th>
                              <td>Blah</td>
                              <td>N/A</td>
                                <td>
                                  <li className="dropdown pull-right">
                                    <a
                                      href="#"
                                      className="dropdown-toggle"
                                      data-toggle="dropdown"
                                      role="button"
                                      aria-haspopup="true"
                                      aria-expanded="false">Add Part <span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                      <li>
                                        {this.populateDropDown(82)}
                                      </li>
                                    </ul>
                                  </li></td>
                          </tr>
                          <tr>
                              <th scope="row">Brakes</th>
                              <td>Blah</td>
                              <td>N/A</td>
                              <td>
                                <li className="dropdown pull-right">
                                  <a
                                    href="#"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false">Add Part <span className="caret"></span></a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      {this.populateDropDown(90)}
                                    </li>
                                  </ul>
                                </li></td>
                          </tr>
                          <tr>
                            <th scope="row">Fork</th>
                            <td>Blah</td>
                            <td>N/A</td>
                            <td>
                              <li className="dropdown pull-right">
                                <a
                                  href="#"
                                  className="dropdown-toggle"
                                  data-toggle="dropdown"
                                  role="button"
                                  aria-haspopup="true"
                                  aria-expanded="false">Add Part <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                  <li>
                                    {this.populateDropDown(84)}
                                  </li>
                                </ul>
                              </li></td>
                        </tr>
                        <tr>
                            <th scope="row">Front Wheel</th>
                            <td>Blah</td>
                            <td>N/A</td>
                            <td>
                              <li className="dropdown pull-right">
                                <a
                                  href="#"
                                  className="dropdown-toggle"
                                  data-toggle="dropdown"
                                  role="button"
                                  aria-haspopup="true"
                                  aria-expanded="false">Add Part <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                  <li>
                                    {this.populateDropDown(83)}
                                  </li>
                                </ul>
                              </li></td>
                        </tr>
                        <tr>
                            <th scope="row">Rear Wheel</th>
                            <td>Blah</td>
                            <td>N/A</td>
                            <td>
                              <li className="dropdown pull-right">
                                <a
                                  href="#"
                                  className="dropdown-toggle"
                                  data-toggle="dropdown"
                                  role="button"
                                  aria-haspopup="true"
                                  aria-expanded="false">Add Part <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                  <li>
                                    {this.populateDropDown(95)}
                                  </li>
                                </ul>
                              </li></td>
                        </tr>
                        <tr>
                            <th scope="row">Shock</th>
                            <td>Blah</td>
                            <td>N/A</td>
                              <td>
                                <li className="dropdown pull-right">
                                  <a
                                    href="#"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false">Add Part <span className="caret"></span></a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      {this.populateDropDown(85)}
                                    </li>
                                  </ul>
                                </li></td>
                        </tr>
                        <tr>
                            <th scope="row">Handlebar</th>
                            <td>Blah</td>
                            <td>N/A</td>
                              <td>
                                <li className="dropdown pull-right">
                                  <a
                                    href="#"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false">Add Part <span className="caret"></span></a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      {this.populateDropDown(86)}
                                    </li>
                                  </ul>
                                </li></td>
                        </tr>
                        <tr>
                            <th scope="row">Saddle</th>
                            <td>Blah</td>
                            <td>N/A</td>
                              <td>
                                <li className="dropdown pull-right">
                                  <a
                                    href="#"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false">Add Part <span className="caret"></span></a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      {this.populateDropDown(87)}
                                    </li>
                                  </ul>
                                </li></td>
                        </tr>
                        <tr>
                            <th scope="row">Seatpost</th>
                            <td>Blah</td>
                            <td>N/A</td>
                              <td>
                                <li className="dropdown pull-right">
                                  <a
                                    href="#"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false">Add Part <span className="caret"></span></a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      {this.populateDropDown(88)}
                                    </li>
                                  </ul>
                                </li></td>
                        </tr>
                        <tr>
                            <th scope="row">Chain</th>
                            <td>Blah</td>
                            <td>N/A</td>
                              <td>
                                <li className="dropdown pull-right">
                                  <a
                                    href="#"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false">Add Part <span className="caret"></span></a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      {this.populateDropDown(93)}
                                    </li>
                                  </ul>
                                </li></td>
                        </tr>
                        <tr>
                            <th scope="row">Shifter</th>
                            <td>Blah</td>
                            <td>N/A</td>
                              <td>
                                <li className="dropdown pull-right">
                                  <a
                                    href="#"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false">Add Part <span className="caret"></span></a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      {this.populateDropDown(94)}
                                    </li>
                                  </ul>
                                </li></td>
                        </tr>
                        <tr>
                            <th scope="row">Frame</th>
                            <td>Blah</td>
                            <td>N/A</td>
                              <td>
                                <li className="dropdown pull-right">
                                  <a
                                    href="#"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false">Add Part <span className="caret"></span></a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      {this.populateDropDown(89)}
                                    </li>
                                  </ul>
                                </li></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <button type="button" onClick={(e)=>this.props.onClick(e, 1)} className="btn btn-default">Review</button>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
      );
  }
}
