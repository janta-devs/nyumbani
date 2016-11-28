import React, { Component } from 'react';
import { Link, Match } from 'react-router';

import $ from 'jquery';
import TopActionComponent from './TopActionComponent';


class SuggestedEmployees extends Component{

	constructor(context, props){
		super(context, props);
	}
	componentDidMount() {

	}
	render(){
    const styleIEButton = {
      lineHeight: '10px',
      padding: '1px 1px 1px 1px',
      textTransform: 'unset',
    };
		return (
				<div>	
					<div className=" column l-1-4 float-right">
						<div className="primary promo card l-block">
							<span className="beta"></span>
								<h4>
									<a href="#" className="js-widget">Get Android App</a>
								</h4>
								<p>
							    	Take the next step in your career. Amazing jobs for all levels and disciplines!
							    </p>
								<a href="#" className="button-secondary button-fluid text-center js-widget">
									Download from Play Store
								</a>
						</div>
						<div className="primary promo card l-block">
							<span className="beta"></span>
								<h4>
									<a href="#" className="js-widget">Get iOS App</a>
								</h4>
								<p>
							        Take the next step in your career. Amazing jobs for all levels and disciplines!
							    </p>
								<a href="#" className="button-secondary button-fluid text-center js-widget">
								    Download from Apple Store
								</a>
						</div>
					</div>
					<div className="column l-3-4 recommendations">
						<div className="news card people-recommendation">
						    <footer>
								<div className="media">
								    <div className="media-left">
								        <img className="media-object" src="/nyumbani/photo_assets/people_48px.svg" alt="Janta Employees suggestions" />
								    </div>
								    <div className="media-body with-button-inline">
								        Employees suggested for you
								    </div>
								</div>
							</footer>
							<section className="js-profiles-list">
								<div className="profiles media-list">
								    <div className="media">
								        <div className="media-left">
								            <a href="#" title="Mike Njuguna">
								                <img src="/nyumbani/photo_assets/anony.jpg" alt="Mike Njuguna" />
								            </a>
								       	</div>
								        <div className="media-body">
								            <div className="user-meta">
									            <a href="#" className="basic-link" title="Mike Njuguna">Lawrence Nderu</a>
									                <span className="institution">Jomo Kenyatta University of Agriculture and Technology</span>
									                <span className="relationship">Highly recommended in Computer Science</span>
								            </div>
								        </div>
								        <button type="button" style={styleIEButton} className="basic-link mdl-button mdl-js-button mdl-js-ripple-effect">
									        View Profile <span><i className="material-icons">account_box</i></span>
								        </button>
								    </div>
								    <div className="media">
								        <div className="media-left">
								            <a href="#" title="Mike Njuguna">
								                <img src="/nyumbani/photo_assets/anony.jpg" alt="Mike Njuguna" />
								            </a>
								       	</div>
								        <div className="media-body">
								            <div className="user-meta">
									            <a href="#" className="basic-link" title="Mike Njuguan" data-engagement="profile_name_0">Lawrence Nderu</a>
									                <span className="institution">Jomo Kenyatta University of Agriculture and Technology</span>
									                <span className="relationship">Highly recommended in Computer Science</span>
								            </div>
								        </div>
								        <button type="button" style={styleIEButton} className="basic-link mdl-button mdl-js-button mdl-js-ripple-effect">
									        View Profile <span><i className="material-icons">account_box</i></span>
								        </button>
								    </div>
								</div>
							</section>
							<section className="community">
								<hr />
								<div className="text-center see-more">
									<button className="basic-link js-see-more-suggestions" data-state="unclicked" data-engagement="see_more">
									    <span>Load more suggestions</span>
									</button>
								</div>
					       	</section>
						</div>
					</div>
				</div>
			);
	}

}
export default SuggestedEmployees;