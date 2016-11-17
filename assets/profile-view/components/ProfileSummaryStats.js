import React, { Component } from 'react';

class ProfileSummaryStats extends Component{
  render() {
    return (
                <div className="row">
                  <div className="column d-1-1">
                    <section className="statistics-content">
                      <ul className="stat-group clearfix">
                        <li className="stat-box with-tooltip stat-readers" tabIndex="0">
                            <data className="number" value="4373">{this.props.userInfo.id}</data>
                            <p className="caption" data-toggle="popover" data-trigger="hover" data-content="Number of recommendations on Janta" data-placement="left">Recommendations</p>
                        </li>
                        <li className="stat-box with-tooltip stat-publications" id="interests" tabIndex="0">
                          <data className="number" value="138">138</data>
                          <p className="caption" id="interests" data-toggle="popover" data-trigger="hover" data-content="Number of times employers have shown interest on this person’s on Janta." data-placement="left">Interests</p>
                        </li>
                      </ul>
                    </section>
                  </div>
                </div>
      );
  }
}

export default ProfileSummaryStats;