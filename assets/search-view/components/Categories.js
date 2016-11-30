import React, { Component } from 'react';

import Container from './Container';


class Categories extends Component{
	constructor(context, props)
	{
		super( context, props );

    this.info = this.getLocalStorage();
    this.pages = this.createPagination();
    this.state = {
      data: [],
      count: 0,
      maxLength: this.pages.length
    }
    this.data = this.pages[this.state.count]
   
	}
  componentWillMount(){
    this.info = this.getLocalStorage();
    this.setState({ data: this.pages[this.state.count] });
  }
  componentWillUpdate(nxtProp, nxtState ){
    //this.setState({ data: this.pages[this.state.count] });
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
  createPagination(){

    var counter = (Math.floor(this.info.length / 12))
    var NextNum = 12;
    var start = 0;
    var holder = [];

    for( var i = 0; i < counter; i++ ){
      var num = `arr${i+1}`;
     
      if( i === 0 ){
         num = this.info.splice(start, NextNum)
         NextNum + 12;
         start = NextNum + 1;
      }
      else{
        num = this.info.splice(start, NextNum)
         NextNum + 12;
         start = NextNum + 1;
      }
      holder.push( num );
    }
    holder.push( this.info );
    return holder;
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

  	var info = this.state.data.map( (x,y) => {
  		return <Container category = {x} key={y} count = {y}/>;
  	});
  	return(
  		<div style={ElementStyle}>
      <div className="mdl-cell mdl-cell--12-col">
  			<button className = "mdl-button--raised mdl-button--colored">EMPLOYEE CATEGORIES AVAILABLE</button>
      </div>
      <br />
  			{info}
      <button className = "mdl-button--raised mdl-button--colored" onClick = {this.handlePrevClick.bind(this)}>Prev</button>
      <button className = "mdl-button--raised mdl-button--colored" onClick = {this.handleNextClick.bind(this)}>Next</button>
  		</div>
  	)
  }
}

export default Categories;