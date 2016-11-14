import React from 'react';
import { getBuildData } from '../server';
export default class SelectBikeParts extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  /*
    Refresh should be called after a client event is handled by the server if
    any persistent state needs to be synced
  */
  refresh() {
    getBuildData(this.props.users, (buildsData) => {
      this.setState(buildsData);
    });
  }

  componentDidMount() {
    this.refresh();
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
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                          <th scope="row">Front Derailleur</th>
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
                                  <a>IMPLEMENT</a>
                                </li>
                              </ul>
                            </li></td>
                          </tr>
                          <tr>
                              <th scope="row">Rear Derailleur</th>
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
                                        <a>IMPLEMENT</a>
                                      </li>
                                    </ul>
                                  </li></td>
                          </tr>
                          <tr>
                              <th scope="row">Tires</th>
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
                                        <a>IMPLEMENT</a>
                                      </li>
                                    </ul>
                                  </li></td>
                          </tr>
                          <tr>
                              <th scope="row">Brakes</th>
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
                                      <a>IMPLEMENT</a>
                                    </li>
                                  </ul>
                                </li></td>
                          </tr>
                          <tr>
                            <th scope="row">Fork</th>
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
                                    <a>IMPLEMENT</a>
                                  </li>
                                </ul>
                              </li></td>
                        </tr>
                        <tr>
                            <th scope="row">Wheels</th>
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
                                    <a>IMPLEMENT</a>
                                  </li>
                                </ul>
                              </li></td>
                        </tr>
                        <tr>
                            <th scope="row">Shock</th>
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
                                      <a>IMPLEMENT</a>
                                    </li>
                                  </ul>
                                </li></td>
                        </tr>
                        <tr>
                            <th scope="row">Handlebar</th>
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
                                      <a>IMPLEMENT</a>
                                    </li>
                                  </ul>
                                </li></td>
                        </tr>
                        <tr>
                            <th scope="row">Saddle</th>
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
                                      <a>IMPLEMENT</a>
                                    </li>
                                  </ul>
                                </li></td>
                        </tr>
                        <tr>
                            <th scope="row">Seatpost</th>
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
                                      <a>IMPLEMENT</a>
                                    </li>
                                  </ul>
                                </li></td>
                        </tr>
                        <tr>
                            <th scope="row">Chain</th>
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
                                      <a>IMPLEMENT</a>
                                    </li>
                                  </ul>
                                </li></td>
                        </tr>
                        <tr>
                            <th scope="row">Shifter</th>
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
                                      <a>IMPLEMENT</a>
                                    </li>
                                  </ul>
                                </li></td>
                        </tr>
                        <tr>
                            <th scope="row">Frame</th>
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
                                      <a>IMPLEMENT</a>
                                    </li>
                                  </ul>
                                </li></td>
                        </tr>
                        <tr>
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
