import React, { Component } from 'react';



class BasicDetails extends Component{
  render() {
    var userInfo = this.props.data;
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
                    <p className="timeline-record-title">{userInfo.description}</p>
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
                    <p className="timeline-record-title">{userInfo.location}</p>
                    <p className="timeline-record-place">{userInfo.location}</p>
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
                    <p className="timeline-record-title">{userInfo.start}</p>
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
                    <p className="timeline-record-title">{userInfo.end}</p>
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
                    <p className="timeline-record-title"><a href={userInfo.order_attachment_path}>Attchement</a></p>
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