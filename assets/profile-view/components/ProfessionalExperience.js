import React, { Component } from 'react';

class ProfessionalExperience extends Component{
  render() {

    // let Jobs = this.props.userInfo.past_jobs.map( (x,y) => {
    //   return(
    //           <div className="record-row" key={y}>             
    //               <div className="timeline-record-right">
    //                 <p className="timeline-record-title">{x.title}</p>
    //                 <p className="timeline-record-place">{x.job}</p>
    //               </div>
    //               <div className="timeline-record-left">
    //                 <p className="timeline-record-date">
    //                     <span className="block">
    //                        {x.duration}
    //                     </span>
    //                     <span className="block"></span>
    //                 </p>
    //               </div>
    //             </div>
    //   )
    // });

    return (
          <div className="card" id="profile-employment">
            <header className="employment-header">
              <h2>
                Professional experience
              </h2>
            </header>
            <section className="employment-content">
              <div className="timeline-record-list ">
                    Jobs 
              </div>
            </section>
          </div>
    );
  }
}

export default ProfessionalExperience;