import React, { Component } from 'react';

class ProfileSummaryBio extends Component{
    render() {
    return (
              <div className="column d-2-3 m-3-4 s-1-1 xs-1-1">
                <div className="summary-left">
                  <aside className="details-photo">
                    <div className="image-box">
                      <img src="libs/images/dante.jpg" alt="Profile Picture" className="large-image" />
                      <img className="advisor-icon" src="libs/images/verified.svg" alt="Janta Advisor" />
                    </div>
                  </aside>
                  <section className="details-content">
                    <div className="summary-nested">
                      <h1>
                        Dan Ochieng
                      </h1>
                      <ul className="bare-list bio-nested">
                        <li>
                          Front-End Developer
                        </li>
                        <li>
                        Thimrock Ventures                      
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