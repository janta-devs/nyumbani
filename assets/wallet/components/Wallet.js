import React, { Component } from 'react';
import ToolTip from './ToolTip';
import { PieChart } from 'react-easy-chart';
import { Scrollspy } from 'react-scrollspy';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../DataStore/Actions';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const brandColors = {
  greyBlueOne: '#1e313c',
  greyBlueTwo: '#3f4c55',
  greyBlueThree: '#667178',
  yellow: '#f4e956',
  orange: '#e3a51a',
  green: '#aaac84',
  lightGreen: '#dce7c5',
  lightGrey: '#e4e8ec',
  red: '#FF0000'
};
const chartStyle = {
	marginTop: '5%',
	width: '40%',
	float: 'left',
	paddingLeft: '10px'
};
const statStyle = {
	width: '55%',
	float: 'right',
	color: 'blue',
	padding: '35px',
  borderRadius: '2px',
  height: '90%',
};
const listStyle = {
  paddingLeft: '35px',
  paddingTop:'20px'
};
const pStyle = {
  backgroundColor: 'gold',
  border: '1px solid gold',
  paddingLeft: '3px',
  paddingRight: '3px',
  margin: '1px auto',
  borderRadius:'2px'
}
class Wallet extends Component{
	constructor( context, props )
	{
		super( context, props );

		this.data = this.generateData();

	    this.mouseOverHandler = this.mouseOverHandler.bind(this);
	    this.mouseOutHandler = this.mouseOutHandler.bind(this);
	    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);

	    this.turnOffRandomData = this.turnOffRandomData.bind(this);
	    this.turnOnRandomData = this.turnOnRandomData.bind(this);

	    this.updateData = this.updateData.bind(this);
	    this.toggleState = this.toggleState.bind(this);

	    this.state = {
	      showToolTip: false,
	      componentWidth: 300,
        open: false
	    };
	    this.styles = {
	      '.pie-chart-lines': {
	        stroke: 'rgba(0, 0, 0, 1)',
	        strokeWidth: 1
	      },
	      '.pie-chart-text': {
	        fontSize: '10px',
	        fill: 'white'
	      }
	    };
   }
   handleOpen(){
    this.setState({ open: true })
   }
   handleClose(){
    this.setState({ open: false })
   }
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  generateData() {
    const data = [];
    const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const colors = [
      '#1e313c',
      '#3f4c55',
      '#667178',
      '#f4e956',
      '#e3a51a',
      '#aaac84',
      '#dce7c5'
    ];
    keys.forEach((key, index) => {
      data.push({
        key,
        value: this.getRandomArbitrary(1, 1000),
        color: colors[index]
      });
    });

    return data;
  }
turnOnRandomData() {
    this.setState({ randomDataIntervalId: setInterval(this.updateData, 1000) });
  }

  turnOffRandomData() {
    clearInterval(this.state.randomDataIntervalId);
    this.setState({ randomDataIntervalId: null });
  }

  updateData() {
    this.data = this.generateData();
    this.forceUpdate();
  }

  

  clickHandler(d) {
    this.setState({ dataDisplay: `The amount selected is ${d.value}` });
  }

  toggleState() {
    this.setState({
      active: !this.state.active
    });
  }

mouseOverHandler(d, e) {
    this.setState(
	    {
	      showToolTip: true,
	      top: Number(e.y),
	      left: Number(e.x),
	      value: d.value,
	      key: d.data.key
	  });
  }
  mouseMoveHandler(e) {
    if (this.state.showToolTip) {
      this.setState({top: e.y, left: e.x});
    }
  }
  mouseOutHandler() {
    this.setState({showToolTip: false});
  }
  createTooltip() {
    if (this.state.showToolTip) {
      return (
        <ToolTip
          top={this.state.top}
          left={this.state.left}
        >
          The value of {this.state.key} is {this.state.value}
        </ToolTip>
      );
    }
    return false;
  }

  render(){
    console.log( this.props );
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
    ];

  	const divStyle = {
  		width: '80%',
  		height: '520px',
  		zIndex: '10',
  		border: '1px',
  		borderRadius: '2px',
  		margin: '0 auto',
  		align: 'center',
  		marginTop: '3%',
      boxShadow: '5px 10px 41px #888789',
  	};
  	const cn = this.state.active ? 'menu active' : 'menu';
  	var amount = 50;
  	var spent = 20;
  	var remainder = amount - spent;
  	{this.createTooltip()}
		return(
		<div style = {divStyle}>
			<div style={chartStyle}>
				<PieChart
					labels
				    data={[
				      { key: `Spent Kshs.${spent}`, value: `${spent}`, color: '#FF0000'},
				      { key: `Remaining Kshs.${remainder}`, value: `${remainder}`, color: '#dce7c5'},
				    ]}
				    innerHoleSize={200}
				    mouseOverHandler={this.mouseOverHandler}
				    mouseOutHandler={this.mouseOutHandler.bind(this)}
				    mouseMoveHandler={this.mouseMoveHandler.bind(this)}
				    padding={10}
				    styles={this.styles}
				  />
			  </div>
			  <div style={statStyle}>

        <MuiThemeProvider>
          <Card>
            <CardHeader
              avatar={this.props.AccountUser.profile_photo}
            />
            <CardTitle title = {this.props.AccountUser.fname+' '+this.props.AccountUser.lname} subtitle="Welcome to Wallet!" />
            <CardText>
               <p>This section provides all the information with regard to your spending while on our website</p>
                <ul style={listStyle}>
                    <li>Original Amount: Kshs. {amount}</li>
                    <li>Amount Spent: Kshs. {spent}</li>
                </ul>
              <p style={pStyle}>To recharge, please press the button below.
                The information you provide during this process is completely safe, please follow the steps as provided in the guide.
              </p>
            </CardText>
            <CardActions>
              <RaisedButton
                  label="RECHARGE ACCOUNT"
                  primary={true}
                  onTouchTap={this.handleOpen.bind(this)}
                  className = "pull-right"
              />
            </CardActions>
          </Card>
        </MuiThemeProvider>
          <MuiThemeProvider>
              <Dialog
                title="Dialog With Actions"
                actions={actions}
                modal={true}
                open={this.state.open}
              >
                Only actions can close this dialog.
              </Dialog>
          </MuiThemeProvider>
			  </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);