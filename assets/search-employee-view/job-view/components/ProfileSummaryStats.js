import React, { Component } from 'react';

class ProfileSummaryStats extends Component{
  render() {
    return (
                <div className="row">
                  <div className="column d-1-1">
                    <section className="statistics-content">
                      <ul className="stat-group clearfix">
                        <li className="stat-box with-tooltip stat-publications" id="interests" tabIndex="0">
                          <data className="number" value={this.props.userInfo.bids.length}>{this.props.userInfo.bids.length}</data>
                          <p className="caption" id="interests" data-toggle="popover" data-trigger="hover" data-content="Number of times employers have shown interest on this person’s on Janta." data-placement="left">Bids</p>
                        </li>
                      </ul>
                    </section>
                  </div>
                </div>
      );
  }
}

export default ProfileSummaryStats;