var ProfileSummaryBio = React.createClass ({
  render: function () {
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
});
var ProfileSummaryStats = React.createClass ({
  render: function () {
    return (
                <div className="row">
                  <div className="column d-1-1">
                    <section className="statistics-content">
                      <ul className="stat-group clearfix">
                        <li className="stat-box with-tooltip stat-readers" tabindex="0">
                            <data className="number" value="4373">4373</data>
                            <p className="caption" data-toggle="popover" data-trigger="hover" data-content="Number of recommendations on Janta" data-placement="left">Recommendations</p>
                        </li>
                        <li className="stat-box with-tooltip stat-publications" id="interests" tabindex="0">
                          <data className="number" value="138">138</data>
                          <p className="caption" id="interests" data-toggle="popover" data-trigger="hover" data-content="Number of times employers have shown interest on this person’s on Janta." data-placement="left">Interests</p>
                        </li>
                      </ul>
                    </section>
                  </div>
                </div>
      );
  }
});
var ProfileSummaryActions = React.createClass ({
  render: function () {
    return (
                <div className="row">
                  <div className="column d-1-1">
                    <div className="button-group-actions">
                      <div className="button-group">
                        <button type="button" data-toggle="popover" data-trigger="hover" data-content="Message" data-placement="top" data-modal="profile-modal-message" className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect">
                            <i className="material-icons">message</i>
                        </button>
                        <button type="button" data-toggle="popover" data-trigger="hover" data-content="Recommend" data-placement="bottom" className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored mdl-js-ripple-effect" data-state="follow" data-profile-id="9373ea86-06b3-3a51-90b9-f99cda6577ad">
                          <span><i className="material-icons">thumb_up</i></span>
                        </button>
                        <button type="button" data-toggle="popover" data-trigger="hover" data-content="Show Interest" data-placement="right" className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--primary mdl-js-ripple-effect" data-state="follow" data-profile-id="9373ea86-06b3-3a51-90b9-f99cda6577ad"> 
                          <i className="material-icons">remove_red_eye</i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
      );
  }
});
var ProfileSummary = React.createClass ({
  render: function () {
    return (
                <div className="headline">
                  <div className="with-container">
                    <div className="card-details" id="profile-details">
                      <section className="bio">
                        <div className="summary card">
                          <div className="row">
                              <ProfileSummaryBio />
                            <div className="column d-1-3 m-1-4 s-1-1 xs-1-1 stats-column">
                              <ProfileSummaryStats />
                              <ProfileSummaryActions />
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
      );
  }
});
var ProfileInterests = React.createClass ({
  render: function () {
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
});
var ProfileAbout = React.createClass ({
  render: function () {
    return (

              <div>
              </div>
    );
  }
});
var InterestedEmployersList = React.createClass ({
  render: function () {
    const styleIEButton = {
      lineHeight: '10px',
      padding: '1px 1px 1px 1px',
      textTransform: 'unset',
    };
    return (
               <ul> 
                <li>
                  <a href="#" title="Hellen Achieng">
                    <img src="libs/images/anony.jpg" alt="Hellen Achieng" />
                  </a>
                  <p>
                    <a href="#" title="Hellen Achieng">Hellen Achieng</a>
                      <span className="institution" title="University of Nairobi">University of Nairobi</span>
                  </p>
                  <button type="button" style={styleIEButton} className="basic-link mdl-button mdl-js-button mdl-js-ripple-effect"> 
                    Profile <span><i className="material-icons">account_box</i></span>
                  </button>
                </li>
                <li>
                  <a href="#" title="Hellen Achieng">
                    <img src="libs/images/anony.jpg" alt="Hellen Achieng" />
                  </a>
                  <p>
                    <a href="#" title="Hellen Achieng">Hellen Achieng</a>
                      <span className="institution" title="University of Nairobi">University of Nairobi</span>
                  </p>
                  <button type="button" style={styleIEButton} className=" basic-link mdl-button mdl-js-button mdl-js-ripple-effect"> 
                    Profile <span><i className="material-icons">account_box</i></span>
                  </button>
                </li>
                <li>
                  <a href="#" title="Hellen Achieng">
                    <img src="libs/images/anony.jpg" alt="Hellen Achieng" />
                  </a>
                  <p>
                    <a href="#" title="Hellen Achieng">Hellen Achieng</a>
                      <span className="institution" title="University of Nairobi">University of Nairobi</span>
                  </p>
                  <button type="button" style={styleIEButton} className="basic-link mdl-button mdl-js-button mdl-js-ripple-effect"> 
                    Profile <span><i className="material-icons">account_box</i></span>
                  </button>
                </li>
              </ul>
                           
    );
  }
});
var ProfileInterestedEmployers = React.createClass ({
  render: function () {
    return (
              <div className="card" id="profile-followers">
                <header className="followers-header">
                  <h2>Interested Employers (26)</h2>
                </header>
                <section className="followers-content">
                        <div className="follower-list with-small-images">
                        <InterestedEmployersList />
                        </div>
                        <button href="#" id="followers-network" className="mdl-button mdl-js-button mdl-js-ripple-effect"><span>Explore network <i className="material-icons">keyboard_arrow_right</i></span></button>
                </section>
              </div>
    );
  }
});
var ProfileInterestedIn = React.createClass ({
  render: function () {
    return (
              <div className="card" id="profile-followees">
                <header className="followers-header">
                  <h2>Interested In (106)</h2>
                </header>
                <section className="followers-content">
                        <div className="follower-list with-small-images">
                        <InterestedEmployersList />
                        </div>
                        <button href="#" id="followers-network" className="mdl-button mdl-js-button mdl-js-ripple-effect"><span>Explore network <i className="material-icons">keyboard_arrow_right</i></span></button>
                </section>
              </div>
    );
  }
});
var ContactDetails = React.createClass ({
  render: function () {
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
                    <p className="timeline-record-title">0728623213</p>
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
                    <p className="timeline-record-title">ochiodhis@gmail.com</p>
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
});

var BasicDetails = React.createClass ({
  render: function () {
    return (
          <div className="card" id="profile-employment">
            <header className="employment-header">
              <h2>
                Basic Details
              </h2>
            </header>
            <section className="employment-content">
              <div className="timeline-record-list ">
                <div className="record-row">
                  <div className="timeline-record-right">
                    <p className="timeline-record-title">Male</p>
                  </div>
                  <div className="timeline-record-left">
                    <p className="timeline-record-date">
                        <span className="block">Gender
                        </span>
                        <span className="block"></span>
                    </p>
                  </div>
                </div>
  
              </div>

              <div className="timeline-record-list ">
                <div className="record-row">
                  <div className="timeline-record-right">
                    <p className="timeline-record-title">Nairobi</p>
                    <p className="timeline-record-place">Umoja</p>
                  </div>
                  <div className="timeline-record-left">
                    <p className="timeline-record-date">
                        <span className="block">City/Town
                        </span>
                        <span className="block"></span>
                    </p>
                  </div>
                </div>
  
              </div>


              <div className="timeline-record-list ">
                <div className="record-row">
                  <div className="timeline-record-right">
                    <p className="timeline-record-title">June 1987</p>
                  </div>
                  <div className="timeline-record-left">
                    <p className="timeline-record-date">
                        <span className="block">Date of Birth
                        </span>
                        <span className="block"></span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline-record-list ">
                <div className="record-row">
                  <div className="timeline-record-right">
                    <p className="timeline-record-title">Single</p>
                  </div>
                  <div className="timeline-record-left">
                    <p className="timeline-record-date">
                        <span className="block">Marital Status
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
 }); 
var ProfessionalExperience = React.createClass ({
  render: function () {
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
});
var EducationBackground = React.createClass ({
  render: function () {
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
  
  </div></section>
          </div>

    );
  }
});
var Skills = React.createClass ({
  render: function () {
    return (
    <div>
    </div>
    );
  }
});
var ProfileData =  React.createClass ({
  render: function () {
    return (
                <div>
                  <ProfileSummary />
                  <div className="with-container content">
                    <div className="row">
                      <div className="column d-1-3 m-5-12 s-1-1 xs-1-1">
                        <ProfileInterests />
                        <ProfileInterestedEmployers />
                        <ProfileInterestedIn />
                      </div>
                      <div className="column d-2-3 m-7-12 s-1-1 xs-1-1">
                        <BasicDetails />
                        <ContactDetails />
                        <Skills />
                        <ProfessionalExperience />
                        <EducationBackground />
                      </div>
                    </div>
                  </div>
                </div>
    );
  }
});
ReactDOM.render (<ProfileData />, document.getElementById('content')
  );
