import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../DataStore/Actions';


import MyOrdersContainer from './MyOrdersContainer';
import NavbarWithOutUpdate from './NavbarWithOutUpdate';



class MyOrders extends Component{
	constructor( context, props ){
		super( context, props );
		this.state = {
			data: []
		}
	}
	componentWillMount(){
		var orders = this.props.MyOrders;
		this.setState({data: orders});
	}
	render(){
		return( 
			<div>
				<NavbarWithOutUpdate />
				<MyOrdersContainer data = {this.state.data}/>
			</div>
		)
	}
}

function mapStateToProps( state ){				
	return state;								
}

function mapDispatchToProps(dispatch){ 			
	return{
		Actions: bindActionCreators( Actions, dispatch )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);