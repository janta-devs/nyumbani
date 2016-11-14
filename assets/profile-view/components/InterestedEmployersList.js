import React, { Component } from 'react';


class InterestedEmployersList extends Component {
  render(){
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
};

export default InterestedEmployersList;