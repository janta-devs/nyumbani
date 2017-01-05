import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

import Container from './Container';
import AppBar from 'material-ui/AppBar';

class Categories extends Component{
	constructor(context, props)
	{
		super( context, props );

    this.pages = [];
    this.count = 0;

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
        location.href = ""; //refreshes page to load up the content
      }, 1000);
    }
    else
    {
      this.pages = this.createPagination( this.info );
    }
    this.data = this.pages[this.state.count];
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
    this.setState({maxLength: this.pages.length});
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

    //creates the 12 job categories that appear in the initial page of the employer page
    
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
      var leftovers = [];

      for( var i = 0; i <= counter; i++ ){
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
        ( num.length === 12 ) ? holder.push( num ) : leftovers.push( num );
      }

      if(data.length === 12 ){
        holder.push( data )
      }
      else
      {
        if( data.length > 12 )
        {
          num = data.splice(0, 12);
          holder.push( num );
        }
        data.concat( leftovers );
        holder.push( data );
      }
      return holder;   
    }
  }
  handleNextClick( e ){
    e.preventDefault();
    e.stopPropagation();
    ( this.state.count >= this.state.maxLength - 1 ) ? this.count = 0 : this.count = this.state.count + 1;   
    this.setState({ count: this.count});
    this.setState({ data: this.pages[ this.count ] });
  }
  handlePrevClick( e ){
    e.preventDefault();
    e.stopPropagation();
    ( this.count === 0 ) ? this.count = this.state.maxLength - 1: this.count = this.state.count - 1;
    this.setState({ count: this.count});
    this.setState({ data: this.pages[ this.count ] });
  } 
  render(){
    const ElementStyle = {
      margin: 'auto',
      display:'block'
    };
    const floatStlye = {
      float: 'right'
    };
    const style = {
      backgroundColor: 'rgb(33,150,243)'
    }
    const footerStyle = {
      position: 'inherit'
    }
  	var info = this.state.data.map( (x,y) => {
  		return <Container category = {x} key={y} count = {y}/>;
  	});
    const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
    const favoritesIcon = <FontIcon className="material-icons">skipnext</FontIcon>;
    const nearbyIcon = <IconLocationOn />;
  	return(
      <div>
      		<div style={ElementStyle}>
          <MuiThemeProvider>
             <AppBar title="Jobseekers Available" iconClassNameRight="muidocs-icon-navigation-expand-more" style={style}/>
          </MuiThemeProvider>
          <br />
      			{info}
          </div>
          <MuiThemeProvider>
            <BottomNavigation>
              <BottomNavigationItem
                label="BACK"
                icon={favoritesIcon}
                onTouchTap={this.handlePrevClick.bind(this)}
              />
              <BottomNavigationItem
                label="NEXT"
                icon={favoritesIcon}
                onTouchTap={this.handleNextClick.bind(this)}
              /> 
            </BottomNavigation>
          </MuiThemeProvider>
      </div>
  	)
  }
}

export default Categories;



