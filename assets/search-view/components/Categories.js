import React, { Component } from 'react';

import Container from './Container';


class Categories extends Component{
	constructor(context, props)
	{
		super( context, props );

    this.pages = [];

    this.state = {
      data: [],
      count: 0,
      maxLength: this.pages.length
    }

    let EmployeeCat = this.props.State.EmployeeCategories;

    this.info = ( !EmployeeCat.length ) ? this.getLocalStorage(): this.props.State.EmployeeCategories;

    if( this.info === null || !this.info.length )
    {
      setTimeout( () => {
        location.href = "";
      }, 1000);
    }
    else
    {
      this.pages = this.createPagination( this.info )
    }

    this.data = this.pages[this.state.count]
   
	}
  componentWillMount(){
    let EmployeeCat = this.props.State.EmployeeCategories;

    //checking whether the EmployeeCat is populated
    this.info = ( !EmployeeCat.length ) 
    ? this.getLocalStorage(): this.props.State.EmployeeCategories;

    //if the info is populated, reload the page to render the content

    ( !this.info.length ) ? window.location.href = "" : this.info;

    //set the defaults into the state
    this.setState({ data: this.pages[this.state.count] });
  }
  componentWillUpdate(nxtProp, nxtState ){
   
  } 
  getLocalStorage()
  {
    try
    {
      var localstore = localStorage.getItem('JantaUniqueCategories');
      return JSON.parse(localstore);
    }
    catch(exception)
    {
      return false;
    }
  }
  createPagination( data ){
    if( !data.length ){
      setTimeout( ()=> {
        window.location.href = "";
      }, 1000);      
    }
    else
    {
      var counter = (Math.floor(data.length / 12))
      var NextNum = 12;
      var start = 0;
      var holder = [];

      for( var i = 0; i < counter; i++ ){
        var num = `arr${i+1}`;
        if( i === 0 )
        {
          num = data.splice(start, NextNum)
          NextNum + 12;
          start = NextNum + 1;
        }
        else
        {
          num = data.splice(start, NextNum)
          NextNum + 12;
          start = NextNum + 1;
        }
        holder.push( num );
      }
      holder.push( data );
      return holder;   
    }
  }
  handleNextClick( e ){
    e.preventDefault();
    e.stopPropagation();
    var count = this.state.count + 1;
    ( count === this.state.maxLength ) ? count = 0 : count;
    this.setState({ count: count});
    this.setState({ data: this.pages[count] });
  }
  handlePrevClick( e ){
    e.preventDefault();
    e.stopPropagation();
    var count = this.state.count - 1;
    ( count === 0 ) ? count = this.state.maxLength : count;
    this.setState({ count: count});
    this.setState({ data: this.pages[count] });
  } 
  render(){
    const ElementStyle = {
      margin: 'auto',
      display:'block'
    };
    const floatStlye = {
      float: 'right'
    };
  	var info = this.state.data.map( (x,y) => {
  		return <Container category = {x} key={y} count = {y}/>;
  	});
  	return(
  		<div style={ElementStyle}>
      <div className="mdl-cell mdl-cell--12-col">
  			<button className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">EMPLOYEE CATEGORIES AVAILABLE</button>
      </div>
      <br />
  			{info}
      <button className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onClick = {this.handlePrevClick.bind(this)}>Prev</button>
      <button style = {floatStlye} className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onClick = {this.handleNextClick.bind(this)}>Next</button>
  		</div>
  	)
  }
}

export default Categories;