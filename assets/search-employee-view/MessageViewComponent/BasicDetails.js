import React, { Component } from 'react';



class BasicDetails extends Component{
  render() {
    var date = new Date( Date.parse( this.props.message[0].timestamp ) );
    return (
          <div className="card" id="profile-employment">
            <header className="employment-header">
              <h2>
                Message
              </h2>
            </header>
            <section className="employment-content">

              <div className="timeline-record-list ">
                <div className="record-row">
                  <div className="timeline-record-right">
                    <p className="timeline-record-title">{this.props.message[0].message_title}</p>
                  </div>
                  <div className="timeline-record-left">
                    <p className="timeline-record-date">
                        <span className="block">Message title</span>
                        <span className="block"></span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline-record-list ">
                <div className="record-row">
                  <div className="timeline-record-right">
                    <p className="timeline-record-title">{date.toString()}</p>
                    <p className="timeline-record-place">time</p>
                  </div>
                  <div className="timeline-record-left">
                    <p className="timeline-record-date">
                        <span className="block">Time Sent
                        </span>
                        <span className="block"></span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline-record-list ">
                <div className="record-row">
                  <div className="timeline-record-right">
                    <p className="timeline-record-title">Employer # {this.props.message[0].from_id}</p>
                  </div>
                  <div className="timeline-record-left">
                    <p className="timeline-record-date">
                        <span className="block">From</span>
                        <span className="block"></span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline-record-list ">
                <div className="record-row">
                  <div className="timeline-record-right">
                    <p className="timeline-record-title">{this.props.message[0].message_body}</p>
                  </div>
                  <div className="timeline-record-left">
                    <p className="timeline-record-date">
                        <span className="block">Message</span>
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