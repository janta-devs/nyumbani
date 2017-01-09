import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../DataStore/Actions';
import NavbarWithOutUpdate from './NavbarWithOutUpdate';


import ResultTable from './ResultTable';

class InterestedEmployees extends Component{
	constructor( context, props ){
		super( context, props );
      this.data = this.getUserInformation();
	    var employees = this.props.AllEmployees;  
      var interested_employees = this.data[0].interested_employees;
      this.container = [];

      for (var i = 0; i  < interested_employees.length; i++ ) 
      {
        var employee_id = interested_employees[i].employee_login_id;
        var results = employees.filter( (value, index ) => {
          return( value.login_id === employee_id ) ? employees[index] : false;
        });
        this.container = this.container.concat( results );
      }
    
	}
	getLocalStorage(){
      try
      {
        var localstore = localStorage.getItem('JantaUniqueEmployeesInformation');
        return JSON.parse(localstore);
      }
      catch(exception)
      {
        return false;
      }
    }
    getUserInformation(){
      var orders = this.props.MyOrders;
      //the replace function has been put in place to handle employees who might have slashes as part of their title
      var order_id = this.props.params.MyBidId;
      var data = orders.filter( (value, index) => {
         return (value.order_id === order_id ) ? orders[index] : false;
      });
      return data;
    }
	render(){
		return(
			<div>
        <NavbarWithOutUpdate />
        <h3 className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">INTERESTED EMPLOYEES</h3>
				<ResultTable data = {this.container}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(InterestedEmployees);