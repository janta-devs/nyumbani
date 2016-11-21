import React, { Component } from 'react';
import TopActionComponent from './TopActionComponent';


class StatusUpdate extends Component {
	constructor(context, props){
		super(context, props);
	}
	componentDidMount() {

	}
	render () {
    const styleTxtArea = {
    	height: '60px',
    };
    return (
		<div className="column l-3-4 post-a-status">
            <div className="status card">
              <div className="actions-holder">
                <TopActionComponent />
              </div>
              <div className="image-holder float-left">
                <img className="small-image" src="/nyumbani/photo_assets/anony.jpg" />
              </div>
              <div className="textarea-holder">
                <div className="textarea-wrap js-animated-labels">
                  <textarea className="js-textarea" id="new-status" maxLength="500" placeholder="Post something" data-pattern="" style={styleTxtArea}></textarea>
                  <label className="hidden">Post something</label>
                </div>
                <div data-for="new-status" className="error-message" data-error-invalid="Message is required." data-error-empty="Message is required."></div>

                <div className="attachment-holder"></div>
              </div>
              <div className="float-right">
                <div className="dropdown-select js-dropdown-selectable" data-size="s">
                  <a data-value="public" className="single">
                  Interests
                  </a>
                  <ul>
                  </ul>
                </div>
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
                  Post
                </button>
              </div>
            </div>
        </div>

    	);

	}
}
export default StatusUpdate;