import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../DataStore/Actions';

import ResultTable from './ResultTable';


class MyBids extends Component{
	constructor( context, props ){
		super( context, props );
		var bids = this.props.Bids;
		var jobs = this.props.Jobs;
		this.container = []

		for (var i = 0; i < bids.length; i++) {
			var result = jobs.filter((value, index) => {
				return ( value.order_id === bids[i].order_id ) ? jobs[index] : false;
			});
			this.container = this.container.concat( result );
		}
	}
	render(){
		return(
			<div>
				<ResultTable data = { this.container }/>
			</div>
		)
	}
}

function mapStateToProps( state ){				
	return {
		Bids: state.Bids,
		Jobs: state.Jobs 
	};								
}

function mapDispatchToProps(dispatch){ 			
	return{
		Actions: bindActionCreators( Actions, dispatch )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBids);