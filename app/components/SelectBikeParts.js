import React from 'react';
import { getBuildsData } from '../server';
export default class SelectBikeParts extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      contents: []
    };
  }

  /*
    Refresh should be called after a client event is handled by the server if
    any persistent state needs to be synced
  */
  refresh() {
    getBuildsData(this.props.users, (buildsData) => {
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
                            <td><a href="http://www.jensonusa.com/Shimano-XT-M8000-Disc-Brake">$90.99 - JensonUSA</a></td>
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
                              <td><a href="http://www.jensonusa.com/Shimano-XTR-RD-M9000-11S-Rear-Derailleur">$159.99 - JensonUSA</a></td>
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
                              <td><a href="http://www.jensonusa.com/SRAM-XG-1180-X1-11-Speed-Cassette">$254.99 - JensonUSA</a></td>
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
                              <td><a href="http://www.jensonusa.com/Shimano-XT-M8000-Disc-Brake">$90.99 - JensonUSA</a></td>
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
                            <td><a href="http://www.jensonusa.com/Fox-32-Float-100-CTD-Evo-26-Fork-2015">$299.99 - JensonUSA</a></td>
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
                            <td><a href="http://www.jensonusa.com/Shimano-XT-M8000-Disc-Brake">$90.99 - JensonUSA</a></td>
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
                            <td><a href="http://www.jensonusa.com/Shimano-XT-M8000-Disc-Brake">$90.99 - JensonUSA</a></td>
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
                            <td><a href="http://www.jensonusa.com/Shimano-XT-M8000-Disc-Brake">$90.99 - JensonUSA</a></td>
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
                            <td><a href="http://www.jensonusa.com/Shimano-XT-M8000-Disc-Brake">$90.99 - JensonUSA</a></td>
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
                            <td><a href="http://www.jensonusa.com/Shimano-XT-M8000-Disc-Brake">$90.99 - JensonUSA</a></td>
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
                            <td><a href="http://www.jensonusa.com/Shimano-XT-M8000-Disc-Brake">$90.99 - JensonUSA</a></td>
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
                            <td><a href="http://www.jensonusa.com/Shimano-XT-M8000-Disc-Brake">$90.99 - JensonUSA</a></td>
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
                            <td><a href="http://www.jensonusa.com/Shimano-XT-M8000-Disc-Brake">$90.99 - JensonUSA</a></td>
                        </tr>
                        <tr>
                            <th scope="row"><a href="javascript:void();">Add another part</a></th>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
      );
  }
}
