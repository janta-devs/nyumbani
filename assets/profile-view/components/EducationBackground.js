import React, { Component } from 'react';

class EducationBackground extends Component{
  render() {
    return (
          <div className="card" id="profile-education">
            <header className="education-header">
              <h2>
                Education history

              </h2>
            </header>

            <section className="education-content">
              <div className="timeline-record-list">
          <div className="record-row">
              <div className="timeline-record-right">
  
                  <p className="timeline-record-title">Kenyatta University/Faculty of Computational Mathematics and Cybernetics</p>
                  <p className="timeline-record-place">PhD</p>
              </div>
              <div className="timeline-record-left">
                  <p className="timeline-record-date">
                      <span className="block">
                          September 1983
                              -
                              February 1988
                          </span>
                          <span className="block"> (4 years) </span>
                      </p>
                  </div>
              </div>
            </div>
      </section>
    </div>

    );
  }
}

export default EducationBackground;