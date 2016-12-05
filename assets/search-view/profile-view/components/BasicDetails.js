import React, { Component } from 'react';



class BasicDetails extends Component{
  render() {
    var userInfo = this.props.data;
    return (
          <div className="card" id="profile-employment">
            <header className="employment-header">
              <h2>
                Basic Details
              </h2>
            </header>
            <section className="employment-content">
              <div className="timeline-record-list ">
                <div className="record-row">
                  <div className="timeline-record-right">
                    <p className="timeline-record-title">Male</p>
                  </div>
                  <div className="timeline-record-left">
                    <p className="timeline-record-date">
                        <span className="block">Gender</span>
                        <span className="block"></span>
                    </p>
                  </div>
                </div>
  
              </div>

              <div className="timeline-record-list ">
                <div className="record-row">
                  <div className="timeline-record-right">
                    <p className="timeline-record-title">{userInfo.city}</p>
                    <p className="timeline-record-place">{userInfo.city}</p>
                  </div>
                  <div className="timeline-record-left">
                    <p className="timeline-record-date">
                        <span className="block">City
                        </span>
                        <span className="block"></span>
                    </p>
                  </div>
                </div>
  
              </div>


              <div className="timeline-record-list ">
                <div className="record-row">
                  <div className="timeline-record-right">
                    <p className="timeline-record-title">{userInfo.dob}</p>
                  </div>
                  <div className="timeline-record-left">
                    <p className="timeline-record-date">
                        <span className="block">Year of Birth
                        </span>
                        <span className="block"></span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline-record-list ">
                <div className="record-row">
                  <div className="timeline-record-right">
                    <p className="timeline-record-title">Single</p>
                  </div>
                  <div className="timeline-record-left">
                    <p className="timeline-record-date">
                        <span className="block">Marital Status
                        </span>
                        <span className="block"></span>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
    );
  }
 }

 export default BasicDetails; 