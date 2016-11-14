import React, { Component } from 'react';

class ProfileInterests  extends Component{
  render(){
    const divStyleOne = {
      display: 'none',
    };
    const divStyleTwo = {
      height: 'auto',
    };
    return (
                <div className="card" id="profile-interests">
                  <header className="interests-header">
                    <h2>
                      Job Interests
                    </h2>
                  </header>
                  <section className="interests-content">
                    <div className="expandable-interests expandable-wrap expandable-with-buttons js-has-tags">
                      <div className="expandable-content" style={divStyleTwo}>
                        <span className="tag">
                          User Modeling
                          Adaptive Hypermedia
                          Adaptive Web
                          Personalized E-Learning
                          Student Modeling
                          Social Information Access
                        </span>
                      </div>
                      <button className="js-expandable-link basic-link with-icon-before icon-navigatedown" data-expand="more" style={divStyleOne}><span>View more</span></button>
                      <button className="js-expandable-link basic-link with-icon-before icon-navigateup" data-expand="less" style={divStyleOne}><span>View less</span></button>
                    </div>
        
                  </section>
                </div>
    );
  }
}

export default ProfileInterests;