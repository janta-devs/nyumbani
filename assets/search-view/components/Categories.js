import React, { Component } from 'react';

import Container from './Container';


class Categories extends Component{
	constructor(context, props)
	{
		super( context, props )
		this.data = this.getLocalStorage();
	}
    getLocalStorage()
    {
      try
      {
        var localstore = localStorage.getItem('categories');
        return JSON.parse(localstore);
      }
      catch(exception)
      {
        return false;
      }
    }
    render(){
      const ElementStyle = {
        margin: 'auto',
        display:'block'
      };

    	var info = this.data.map( (x,y) => {
    		return <Container category = {x} key={y} count = {y}/>;
    	});
    	return(
    		<div style={ElementStyle}>
    			CATEGORIES:<br /><br /><br /><br />
    			{info}
    		</div>
    	)
    }
}

export default Categories;