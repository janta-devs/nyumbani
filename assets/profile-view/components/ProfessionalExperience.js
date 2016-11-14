import React, { Component } from 'react';

class ProfessionalExperience extends Component{
  render() {
    return (
          <div className="card" id="profile-employment">
            <header className="employment-header">
              <h2>
                Professional experience
              </h2>
            </header>
            <section className="employment-content">
              <div className="timeline-record-list ">
                <div className="record-row">
                  <div className="timeline-record-right">
                    <p className="timeline-record-title">Professor</p>
                    <p className="timeline-record-place">University of Pittsburgh</p>
                  </div>
                  <div className="timeline-record-left">
                    <p className="timeline-record-date">
                        <span className="block">
                            August 2000
                              -
                                Present
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

export default ProfessionalExperience;