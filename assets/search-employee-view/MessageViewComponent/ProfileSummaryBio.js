import React, { Component } from 'react';

class ProfileSummaryBio extends Component{
    render() {

    return (
              <div className="column d-2-3 m-3-4 s-1-1 xs-1-1">
                <div className="summary-left">
                  <section className="details-content">
                    <div className="summary-nested">
                      <h1>
                        Job Title:
                      </h1>
                      <ul className="bare-list bio-nested">
                        <li>
                        </li>
                        <li>
                        Expertise Required:                    
                        </li>
                        <li>
                        Budget:  
                        </li>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>  
      );
  }
}

export default ProfileSummaryBio;