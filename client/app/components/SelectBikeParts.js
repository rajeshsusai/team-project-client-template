import React from 'react';
import { getBuildData, writeBuild} from '../server';
import {readDocument} from '../database';
export default class SelectBikeParts extends React.Component {
  constructor(props) {
    super(props);
  //  this.handleClickEvent = this.handleClickEvent.bind(this);
    this.state = {
      build: null,
      part: null,
      partsList: []

    }
  }

  /*
    Refresh should be called after a client event is handled by the server if
    any persistent state needs to be synced
  */
  refresh() {
    getBuildData(this.props.buildId, (buildsData) => {
      this.setState({
        build: buildsData,
        partsList: buildsData.contents.parts
    });
  });
}

  componentDidMount() {
    this.refresh();
  }

  handleClickEvent(clickEvent, partId){
    clickEvent.preventDefault();
    //alert(partId);
    if(clickEvent.button === 0){
      //this.state.partsList.push(partId);
    //  alert(partId);
      writeBuild(this.props.buildId, partId);
      this.refresh();
    }
  }

  getPartName(partId){
    var name = "Empty";
    for(var i = 0; i < Object.keys(this.state.partsList).length; i++){
      var part = readDocument("parts", this.state.partsList[i]);
      if(part.contents.part_type === partId){
        name = part.contents.name;
        break;
      }
    }
    return name;
  }

  getPartPrice(partId){
    var price = "N/A";
    for(var i = 0; i < Object.keys(this.state.partsList).length; i++){
      var part = readDocument("parts", this.state.partsList[i]);
      if(part.contents.part_type === partId){
        price = part.contents.price;
        break;
      }
    }
    return price;
  }

  linkListener(){
    alert(this.i);
  }

  populateDropDown(partTypeId){
    var  dropdown = [];
    for(var i = 30; i <= 44; i++){
      var part = readDocument('parts', i);
      if(part.contents.part_type === partTypeId){
        var link = document.createElement('a');
        link.i = part._id;
        dropdown.push(<a key={i} onClick = {(e)=>this.handleClickEvent(e, link.i)}>{part.contents.name}</a>);
      }
    }
    return dropdown;
  }

  calculateTotalPrice(){
    var totalPrice = 0;
    for (var i = 0; i < Object.keys(this.state.partsList).length; i++){
      var part = readDocument("parts", this.state.partsList[i]);
      totalPrice = totalPrice + part.contents.price;
    }
    return totalPrice;
  }

  render() {

    return (
        <div className="body-container container mainBuildTable">
            <div className="panel panel-default">
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
                          <td>{this.getPartName(92)}</td>
                          <td>{this.getPartPrice(92)}</td>
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
                              <td>{this.getPartName(91)}</td>
                              <td>{this.getPartPrice(91)}</td>
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
                              <td>{this.getPartName(82)}</td>
                              <td>{this.getPartPrice(82)}</td>
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
                              <td>{this.getPartName(90)}</td>
                              <td>{this.getPartPrice(90)}</td>
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
                            <td>{this.getPartName(84)}</td>
                            <td>{this.getPartPrice(84)}</td>
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
                            <td>{this.getPartName(83)}</td>
                            <td>{this.getPartPrice(83)}</td>
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
                            <td>{this.getPartName(95)}</td>
                            <td>{this.getPartPrice(95)}</td>
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
                            <td>{this.getPartName(85)}</td>
                            <td>{this.getPartPrice(85)}</td>
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
                            <td>{this.getPartName(86)}</td>
                            <td>{this.getPartPrice(86)}</td>
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
                            <td>{this.getPartName(87)}</td>
                            <td>{this.getPartPrice(87)}</td>
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
                            <td>{this.getPartName(88)}</td>
                            <td>{this.getPartPrice(88)}</td>
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
                            <td>{this.getPartName(93)}</td>
                            <td>{this.getPartPrice(93)}</td>
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
                            <td>{this.getPartName(94)}</td>
                            <td>{this.getPartPrice(94)}</td>
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
                            <td>{this.getPartName(89)}</td>
                            <td>{this.getPartPrice(89)}</td>
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

                    </tbody>
                </table>
                <button type="button" onClick={(e)=>this.props.onClick(e, 1, this.calculateTotalPrice())} className="btn btn-default">Review</button>
            </div>
        </div>
      );
  }
}
