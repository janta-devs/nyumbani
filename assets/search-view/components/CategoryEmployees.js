import React, { Component } from 'react';

import ResultTable from './ResultTable';

class CategoryEmployees extends Component{
	constructor( context, props ){
		super( context, props );

		this.getLocalStorage();
      	this.data = this.getUserInformation();
	}
	getLocalStorage(){
      try
      {
        var localstore = localStorage.getItem('employeesInformation');
        return JSON.parse(localstore);
      }
      catch(exception)
      {
        return false;
      }
    }
    getUserInformation(){
      var employees = this.getLocalStorage();
      var option = this.props.params.option;

      var data = employees.filter( (value, index) => {
         return (value.profession === option ) ? employees[index] : false;
      });
      return data;
    }
	render(){
		return(
			<div>
				<ResultTable data = {this.data}/>
			</div>
		)
	}
}

export default CategoryEmployees;