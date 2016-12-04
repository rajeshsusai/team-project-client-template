import React from 'react';
import { getBuildData, addPart, getCurrentStatus, getPartName, getPartPrice, getParts} from '../server';
export default class SelectBikeParts extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      buildId:props.buildId,
      build:null,
      partsList:[],
      parts: [],
      user: 1
    };
    getBuildData(props.buildId, (buildD)=>{this.state={
      buildId:props.buildId,
      build:buildD,
      partsList: buildD.contents.parts,
      user:1
    }});
    getParts((part)=>{
      this.setState({
      parts: part
    });
  });
  }

  /*
    Refresh should be called after a client event is handled by the server if
    any persistent state needs to be synced
  */
  refresh() {
    getBuildData(this.props.buildId, (buildData) => {
      this.setState({
        build: buildData,
        partsList: buildData.contents.parts
    });
  });
  getParts((part)=>{
    this.setState({
    parts: part
  });
});
}

  componentDidMount() {
    this.refresh();
  }

  handleClickEvent(clickEvent, partId){
    clickEvent.preventDefault();
    if(clickEvent.button === 0){
      addPart(this.props.buildId, partId, updatedBuild => {
        this.setState({
          build: updatedBuild,
          partList: updatedBuild.contents.partsList
        });
      });
      this.refresh();
    }
  }

  populateDropDown(partTypeId){
    var  dropdown = [];
    for(var i = 0; i < Object.keys(this.state.parts).length; i++){
      var part = this.state.parts[i];
      if(part.contents.part_type === partTypeId){
        var link = document.createElement('a');
        link.i = part._id;
        dropdown.push(<a key={link.i} onClick = {(e)=>this.handleClickEvent(e, link.i)}>{part.contents.name}</a>);
      }
    }
    return dropdown;
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
                            getPartName(92, this.state.buildId, this.state.user, (name)=>{
                              document.getElementById("92a").innerHTML = name;
                            })
                          }</script>
                          <td id="92b"></td>
                          <script>{
                            getPartPrice(92, this.state.buildId, this.state.user, (price)=>{
                              document.getElementById("92b").innerHTML = price;
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
                                getPartName(91, this.state.buildId, this.state.user, (name)=>{
                                  document.getElementById("91a").innerHTML = name;
                                })
                              }</script>
                              <td id="91b"></td>
                              <script>{
                                getPartPrice(91, this.state.buildId, this.state.user, (price)=>{
                                  document.getElementById("91b").innerHTML = price;
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
                                getPartName(82, this.state.buildId, this.state.user, (name)=>{
                                  document.getElementById("82a").innerHTML = name;
                                })
                              }</script>
                              <td id="82b"></td>
                              <script>{
                                getPartPrice(82, this.state.buildId, this.state.user, (price)=>{
                                  document.getElementById("82b").innerHTML = price;
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
                                getPartName(90, this.state.buildId, this.state.user, (name)=>{
                                  document.getElementById("90a").innerHTML = name;
                                })
                              }</script>
                              <td id="90b"></td>
                              <script>{
                                getPartPrice(90, this.state.buildId, this.state.user, (price)=>{
                                  document.getElementById("90b").innerHTML = price;
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
                              getPartName(84, this.state.buildId, this.state.user, (name)=>{
                                document.getElementById("84a").innerHTML = name;
                              })
                            }</script>
                            <td id="84b"></td>
                            <script>{
                              getPartPrice(84, this.state.buildId, this.state.user, (price)=>{
                                document.getElementById("84b").innerHTML = price;
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
                              getPartName(83, this.state.buildId, this.state.user, (name)=>{
                                document.getElementById("83a").innerHTML = name;
                              })
                            }</script>
                            <td id="83b"></td>
                            <script>{
                              getPartPrice(83, this.state.buildId, this.state.user, (price)=>{
                                document.getElementById("83b").innerHTML = price;
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
                              getPartName(95, this.state.buildId, this.state.user, (name)=>{
                                document.getElementById("95a").innerHTML = name;
                              })
                            }</script>
                            <td id="95b"></td>
                            <script>{
                              getPartPrice(95, this.state.buildId, this.state.user, (price)=>{
                                document.getElementById("95b").innerHTML = price;
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
                              getPartName(85, this.state.buildId, this.state.user, (name)=>{
                                document.getElementById("85a").innerHTML = name;
                              })
                            }</script>
                            <td id="85b"></td>
                            <script>{
                              getPartPrice(85, this.state.buildId, this.state.user, (price)=>{
                                document.getElementById("85b").innerHTML = price;
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
                              getPartName(86, this.state.buildId, this.state.user, (name)=>{
                                document.getElementById("86a").innerHTML = name;
                              })
                            }</script>
                            <td id="86b"></td>
                            <script>{
                              getPartPrice(86, this.state.buildId, this.state.user, (price)=>{
                                document.getElementById("86b").innerHTML = price;
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
                              getPartName(87, this.state.buildId, this.state.user, (name)=>{
                                document.getElementById("87a").innerHTML = name;
                              })
                            }</script>
                            <td id="87b"></td>
                            <script>{
                              getPartPrice(87, this.state.buildId, this.state.user, (price)=>{
                                document.getElementById("87b").innerHTML = price;
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
                              getPartName(88, this.state.buildId, this.state.user, (name)=>{
                                document.getElementById("88a").innerHTML = name;
                              })
                            }</script>
                            <td id="88b"></td>
                            <script>{
                              getPartPrice(88, this.state.buildId, this.state.user, (price)=>{
                                document.getElementById("88b").innerHTML = price;
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
                              getPartName(93, this.state.buildId, this.state.user, (name)=>{
                                document.getElementById("93a").innerHTML = name;
                              })
                            }</script>
                            <td id="93b"></td>
                            <script>{
                              getPartPrice(93, this.state.buildId, this.state.user, (price)=>{
                                document.getElementById("93b").innerHTML = price;
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
                              getPartName(94, this.state.buildId, this.state.user, (name)=>{
                                document.getElementById("94a").innerHTML = name;
                              })
                            }</script>
                            <td id="94b"></td>
                            <script>{
                              getPartPrice(94, this.state.buildId, this.state.user, (price)=>{
                                document.getElementById("94b").innerHTML = price;
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
                              getPartName(89, this.state.buildId, this.state.user, (name)=>{
                                document.getElementById("89a").innerHTML = name;
                              })
                            }</script>
                            <td id="89b"></td>
                            <script>{
                              getPartPrice(89, this.state.buildId, this.state.user, (price)=>{
                                document.getElementById("89b").innerHTML = price;
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
                <button type="button" onClick={(e)=>this.props.onClick(e, 1, this.state.build.contents.price)} className="btn btn-default">Review</button>
            </div>
        </div>
      );
  }
}
