import React from 'react';
import { getBuildsData } from '../server';
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
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Rear Derailleur</th>
                            <td>{this.state.contents.parts[0].contents.build_name}</td>
                            <td>XTR-RD-M9000 11 Speed SGS</td>
                            <td><a href="http://www.jensonusa.com/Shimano-XTR-RD-M9000-11S-Rear-Derailleur">$159.99 - JensonUSA</a></td>
                        </tr>
                        <tr>
                            <th scope="row">Cassette</th>
                            <td>SRAM</td>
                            <td>XG-1180 X1 11 Speed Cassette</td>
                            <td><a href="http://www.jensonusa.com/SRAM-XG-1180-X1-11-Speed-Cassette">$254.99 - JensonUSA</a></td>
                        </tr>
                        <tr>
                            <th scope="row">Brakes</th>
                            <td>Shimano</td>
                            <td>XT-M8000 Hydraulic Disc Brake</td>
                            <td><a href="http://www.jensonusa.com/Shimano-XT-M8000-Disc-Brake">$90.99 - JensonUSA</a></td>
                        </tr>
                        <tr>
                            <th scope="row">Fork</th>
                            <td>FOX</td>
                            <td>32 FLOAT 100 CTD EVO 26" FORK 2015</td>
                            <td><a href="http://www.jensonusa.com/Fox-32-Float-100-CTD-Evo-26-Fork-2015">$299.99 - JensonUSA</a></td>
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
