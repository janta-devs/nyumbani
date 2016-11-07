var React = require('react');


var TopActionComponent = React.createClass ({
	render: function () {
		return (
			<div className="col-md-1 col-md-offset-11">
			<a onClick = {() => this.props.changeAppMode ('jobPosting')}
				className = 'btn btn-raised btn-lg btn-info' > Edit Profile
			</a>
			</div>	
		);
	}
});

module.exports = TopActionComponent;