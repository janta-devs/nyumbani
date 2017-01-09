import React, { Component } from 'react';

import ResultTable from './ResultTable';
import NavbarComponent from './NavbarComponent';

class CategoryEmployees extends Component{
	constructor( context, props ){
		super( context, props );

		this.getLocalStorage();
      	this.data = this.getUserInformation();
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
      var employees = this.getLocalStorage();
      //the replace function has been put in place to handle employees who might have slashes as part of their title
      var option = this.props.params.option.replace('_','/');
      var data = employees.filter( (value, index) => {
         return (value.profession === option ) ? employees[index] : false;
      });
      return data;
    }
	render(){
		return(
			<div>
        <NavbarComponent /><br /><br /><br /><br />
				<ResultTable data = {this.data}/>
			</div>
		)
	}
}

export default CategoryEmployees;