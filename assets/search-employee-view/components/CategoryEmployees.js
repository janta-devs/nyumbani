import React, { Component } from 'react';

import ResultTable from './ResultTable';

class CategoryEmployees extends Component{
	constructor( context, props )
  {
		super( context, props );

		this.getLocalStorage();
      	this.data = this.getUserInformation();
	}
	getLocalStorage()
  {
      try
      {
        var localstore = localStorage.getItem('JantaUniqueJobs');
        return JSON.parse(localstore);
      }
      catch(exception)
      {
        return false;
      }
    }
    getUserInformation(){
      var jobs = this.getLocalStorage();
      //the replace function has been put in place to handle employees who might have slashes as part of their title
      var option = this.props.params.option.replace('_','/');     
      var data = jobs.filter( (value, index) => {
         return (value.job_title === option ) ? jobs[index] : false;
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