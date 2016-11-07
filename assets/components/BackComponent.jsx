var BackComponent = React.createClass({
	render: function() {
		return (
		<div>
		   	<a onClick={() => this.props.changeAppMode('search')}
				className='btn btn-raised btn-info margin-bottom-1em' ref = "back">
				Back to Search
			</a>
		</div>
		);
	}
});

module.exports = BackComponent;