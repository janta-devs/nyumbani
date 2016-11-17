import React, { Component } from 'react';

class ProfileSummaryBio extends Component{
    render() {

    return (
              <div className="column d-2-3 m-3-4 s-1-1 xs-1-1">
                <div className="summary-left">
                  <aside className="details-photo">
                    <div className="image-box">
                      <img src="" alt="Profile Picture" className="large-image" />
                      <img className="advisor-icon" src={(1 === 1) ? "/nyumbani/photo_assets/verified.svg" : "/nyumbani/photo_assets/unverified.png"}alt="Janta Advisor" />
                    </div>
                  </aside>
                  <section className="details-content">
                    <div className="summary-nested">
                      <h1>
                       {this.props.userInfo.first_name} {this.props.userInfo.last_name}
                      </h1>
                      <ul className="bare-list bio-nested">
                        <li>
                          {this.props.userInfo.profession}
                        </li>
                        <li>
                          Past Jobs                     
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