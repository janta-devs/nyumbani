import React, { Component } from 'react';

class ContactDetails extends Component{
  render() {
     var userInfo = this.props.data;
    return (
          <div className="card" id="profile-employment">
            <header className="employment-header">
              <h2>
                Contact Details
              </h2>
            </header>
            <section className="employment-content">
              <div className="timeline-record-list ">
                <div className="record-row">
                  <div className="timeline-record-right">
                    <p className="timeline-record-title">{userInfo.phone}</p>
                  </div>
                  <div className="timeline-record-left">
                    <p className="timeline-record-date">
                        <span className="block">Mobile Number
                        </span>
                        <span className="block"></span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline-record-list ">
                <div className="record-row">
                  <div className="timeline-record-right">
                    <p className="timeline-record-title">{userInfo.email}</p>
                  </div>
                  <div className="timeline-record-left">
                    <p className="timeline-record-date">
                        <span className="block">Email Address
                        </span>
                        <span className="block"></span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline-record-list ">
                <div className="record-row">
                  <div className="timeline-record-right">
                    <p className="timeline-record-title">P O Box 57161</p>
                    <p className="timeline-record-place">0020 - Nairobi</p>
                  </div>
                  <div className="timeline-record-left">
                    <p className="timeline-record-date">
                        <span className="block">Address
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

export default ContactDetails;