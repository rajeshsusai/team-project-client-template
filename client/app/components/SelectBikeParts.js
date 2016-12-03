import React from 'react';
import { getBuildData, writeBuild, getPartPrice, getPartName } from '../server';
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
    alert(this.props.buildId);
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
      //this.removeParts(partId);
      writeBuild(this.props.buildId, partId);
      this.refresh();
    }
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
                          <td id = "92a"></td>
                          <script>{
                            getPartName(92, this.state.partsList, (name)=>{
                              document.getElementById("92a").innerHtml = name;
                            })
                          }</script>
                          <td id="92b"></td>
                          <script>{
                            getPartPrice(92, this.state.partsList, (price)=>{
                              document.getElementById("92b").innerHtml = price;
                            })
                          }</script>
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
                              <td id = "91a"></td>
                              <script>{
                                getPartName(91, this.state.partsList, (name)=>{
                                  document.getElementById("91a").innerHtml = name;
                                })
                              }</script>
                              <td id="91b"></td>
                              <script>{
                                getPartPrice(91, this.state.partsList, (price)=>{
                                  document.getElementById("91b").innerHtml = price;
                                })
                              }</script>
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
                              <td id = "82a"></td>
                              <script>{
                                getPartName(82, this.state.partsList, (name)=>{
                                  document.getElementById("82a").innerHtml = name;
                                })
                              }</script>
                              <td id="82b"></td>
                              <script>{
                                getPartPrice(82, this.state.partsList, (price)=>{
                                  document.getElementById("82b").innerHtml = price;
                                })
                              }</script>
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
                              <td id = "90a"></td>
                              <script>{
                                getPartName(90, this.state.partsList, (name)=>{
                                  document.getElementById("90a").innerHtml = name;
                                })
                              }</script>
                              <td id="90b"></td>
                              <script>{
                                getPartPrice(90, this.state.partsList, (price)=>{
                                  document.getElementById("90b").innerHtml = price;
                                })
                              }</script>
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
                            <td id = "84a"></td>
                            <script>{
                              getPartName(84, this.state.partsList, (name)=>{
                                document.getElementById("84a").innerHtml = name;
                              })
                            }</script>
                            <td id="84b"></td>
                            <script>{
                              getPartPrice(84, this.state.partsList, (price)=>{
                                document.getElementById("84b").innerHtml = price;
                              })
                            }</script>
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
                            <td id = "83a"></td>
                            <script>{
                              getPartName(83, this.state.partsList, (name)=>{
                                document.getElementById("83a").innerHtml = name;
                              })
                            }</script>
                            <td id="83b"></td>
                            <script>{
                              getPartPrice(83, this.state.partsList, (price)=>{
                                document.getElementById("83b").innerHtml = price;
                              })
                            }</script>
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
                            <td id = "95a"></td>
                            <script>{
                              getPartName(95, this.state.partsList, (name)=>{
                                document.getElementById("95a").innerHtml = name;
                              })
                            }</script>
                            <td id="95b"></td>
                            <script>{
                              getPartPrice(95, this.state.partsList, (price)=>{
                                document.getElementById("95b").innerHtml = price;
                              })
                            }</script>
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
                            <td id = "85a"></td>
                            <script>{
                              getPartName(85, this.state.partsList, (name)=>{
                                document.getElementById("85a").innerHtml = name;
                              })
                            }</script>
                            <td id="85b"></td>
                            <script>{
                              getPartPrice(85, this.state.partsList, (price)=>{
                                document.getElementById("85b").innerHtml = price;
                              })
                            }</script>
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
                            <td id = "86a"></td>
                            <script>{
                              getPartName(86, this.state.partsList, (name)=>{
                                document.getElementById("86a").innerHtml = name;
                              })
                            }</script>
                            <td id="86b"></td>
                            <script>{
                              getPartPrice(86, this.state.partsList, (price)=>{
                                document.getElementById("86b").innerHtml = price;
                              })
                            }</script>
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
                            <td id = "87a"></td>
                            <script>{
                              getPartName(87, this.state.partsList, (name)=>{
                                document.getElementById("87a").innerHtml = name;
                              })
                            }</script>
                            <td id="87b"></td>
                            <script>{
                              getPartPrice(87, this.state.partsList, (price)=>{
                                document.getElementById("87b").innerHtml = price;
                              })
                            }</script>
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
                            <td id = "88a"></td>
                            <script>{
                              getPartName(88, this.state.partsList, (name)=>{
                                document.getElementById("88a").innerHtml = name;
                              })
                            }</script>
                            <td id="88b"></td>
                            <script>{
                              getPartPrice(88, this.state.partsList, (price)=>{
                                document.getElementById("88b").innerHtml = price;
                              })
                            }</script>
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
                            <td id = "93a"></td>
                            <script>{
                              getPartName(93, this.state.partsList, (name)=>{
                                document.getElementById("93a").innerHtml = name;
                              })
                            }</script>
                            <td id="93b"></td>
                            <script>{
                              getPartPrice(93, this.state.partsList, (price)=>{
                                document.getElementById("93b").innerHtml = price;
                              })
                            }</script>
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
                            <td id = "94a"></td>
                            <script>{
                              getPartName(94, this.state.partsList, (name)=>{
                                document.getElementById("90a").innerHtml = name;
                              })
                            }</script>
                            <td id="94b"></td>
                            <script>{
                              getPartPrice(94, this.state.partsList, (price)=>{
                                document.getElementById("94b").innerHtml = price;
                              })
                            }</script>
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
                            <td id = "89a"></td>
                            <script>{
                              getPartName(89, this.state.partsList, (name)=>{
                                document.getElementById("89a").innerHtml = name;
                              })
                            }</script>
                            <td id="89b"></td>
                            <script>{
                              getPartPrice(89, this.state.partsList, (price)=>{
                                document.getElementById("89b").innerHtml = price;
                              })
                            }</script>
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
