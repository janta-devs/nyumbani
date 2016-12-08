import React, { Component } from 'react';



class BasicDetails extends Component{
  render() {
    return (
          <div className="card" id="profile-employment">
            <header className="employment-header">
              <h2>
                Job Details
              </h2>
            </header>
            <section className="employment-content">
              <div className="timeline-record-list ">
                <div className="record-row">
                  <div className="timeline-record-right">
                    <p className="timeline-record-title">Description</p>
                  </div>
                  <div className="timeline-record-left">
                    <p className="timeline-record-date">
                        <span className="block">Description</span>
                        <span className="block"></span>
                    </p>
                  </div>
                </div>
  
              </div>

              <div className="timeline-record-list ">
                <div className="record-row">
                  <div className="timeline-record-right">
                    <p className="timeline-record-title">Localtion</p>
                    <p className="timeline-record-place">Localtion</p>
                  </div>
                  <div className="timeline-record-left">
                    <p className="timeline-record-date">
                        <span className="block">Location
                        </span>
                        <span className="block"></span>
                    </p>
                  </div>
                </div>
  
              </div>


              <div className="timeline-record-list ">
                <div className="record-row">
                  <div className="timeline-record-right">
                    <p className="timeline-record-title">Start</p>
                  </div>
                  <div className="timeline-record-left">
                    <p className="timeline-record-date">
                        <span className="block">Start Date
                        </span>
                        <span className="block"></span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline-record-list ">
                <div className="record-row">
                  <div className="timeline-record-right">
                    <p className="timeline-record-title">END</p>
                  </div>
                  <div className="timeline-record-left">
                    <p className="timeline-record-date">
                        <span className="block">End
                        </span>
                        <span className="block"></span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline-record-list ">
                <div className="record-row">
                  <div className="timeline-record-right">
                    <p className="timeline-record-title"><a href="">Attchement</a></p>
                  </div>
                  <div className="timeline-record-left">
                    <p className="timeline-record-date">
                        <span className="block">Attachment Link
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