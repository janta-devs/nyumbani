var React = require('react');
var Search = require('./Search.jsx');
var PostJobComponent = require('./PostJobComponent.jsx');


var MainApp = React.createClass ({
	getInitialState: function () {
		return {
			currentMode: 'search',
			jobId: null
		};
	},
	changeAppMode: function(newMode, jobId) {
		this.setState ({currentMode: newMode});
		if(jobId !== undefined) {
			this.setState ({jobId: jobId});
		}
	},
	render: function () {
		var modeComponent = 
		<Search changeAppMode={this.changeAppMode}/>;
		switch(this.state.currentMode) {
			case 'search':
				break;
			case 'jobPosting':
				modeComponent = <PostJobComponent changeAppMode={this.changeAppMode}/>;
				break;
			default:
				break;
		}
		return modeComponent;
	}
});

module.exports = MainApp;