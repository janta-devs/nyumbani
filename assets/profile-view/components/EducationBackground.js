import React, { Component } from 'react';

class EducationBackground extends Component{
  render() {
    var userInfo = this.props.data.EmployeeData;
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
                                    <p className="timeline-record-title">{userInfo.university_history.institution}</p>
                                    <p className="timeline-record-place">{userInfo.university_history.grade}</p>
                                </div>


                                <div className="timeline-record-left">
                                    <p className="timeline-record-date">
                                        <span className="block">
                                            September 1983
                                                -
                                                February 1988
                                            </span>
                                            <span className="block"><a href = {userInfo.university_history.certificate_link}>Certificate Link</a></span>
                                        </p>
                                  </div>




                        </div>




                          <div className="record-row">



                                <div className="timeline-record-right">
                                    <p className="timeline-record-title">{userInfo.secondary_history.institution}</p>
                                    <p className="timeline-record-place">{userInfo.secondary_history.grade}</p>
                                </div>


                                <div className="timeline-record-left">
                                    <p className="timeline-record-date">
                                        <span className="block">
                                            September 1983
                                                -
                                                February 1988
                                            </span>
                                            <span className="block"><a href = {userInfo.secondary_history.certificate_link}>Certificate Link</a></span>
                                        </p>
                                  </div>


                                </div>



                            <div className="record-row">

                                <div className="timeline-record-right">
                                    <p className="timeline-record-title">{userInfo.primary_history.institution}</p>
                                    <p className="timeline-record-place">{userInfo.primary_history.grade}</p>
                                </div>


                                <div className="timeline-record-left">
                                    <p className="timeline-record-date">
                                        <span className="block">
                                            September 1983
                                                -
                                                February 1988
                                            </span>
                                            <span className="block"><a href = {userInfo.primary_history.certificate_link}>Certificate Link</a></span>
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