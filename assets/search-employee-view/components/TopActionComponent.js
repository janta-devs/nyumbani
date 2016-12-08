import React, { Component } from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../DataStore/Actions';


class TopActionComponent extends Component{

	render() {
		const floatStlye = {
			float: 'right',
			paddingRight: '10px',
			margin: '2px auto'
		};
		return (
			<div>
				<div className="mdl-cell mdl-cell--12-col">
				<div style={floatStlye} >
				<Link
					to = {`/nyumbani/index.php/home/employee_timeline/MyBids/`}
					className = 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect' 
				>Bids<div className="material-icons mdl-badge mdl-badge--overlap" data-badge={this.props.Bids.length}>notifications</div></Link>
				<Link
					to = {`/nyumbani/index.php/home/employee_timeline/Messages/`}
					className = 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect' 
				>Messages<div className="material-icons mdl-badge mdl-badge--overlap" data-badge={this.props.Messages.length}>notifications</div></Link>
				</div>
				</div>
			</div>
			);
	}
}

function mapStateToProps( state ){				
	return {
		Bids: state.Bids,
		Messages: state.Messages
	};								
}

function mapDispatchToProps(dispatch){ 			
	return{
		Actions: bindActionCreators( Actions, dispatch )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TopActionComponent);