import React, { Component } from 'react';



class BasicDetails extends Component{
  render() {
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
                    <p className="timeline-record-title">Nairobi</p>
                    <p className="timeline-record-place">Bahati</p>
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
                    <p className="timeline-record-title">27/04/1991</p>
                  </div>
                  <div className="timeline-record-left">
                    <p className="timeline-record-date">
                        <span className="block">Date of Birth
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