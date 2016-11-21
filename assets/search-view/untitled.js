
<<<<<<< HEAD

class MainApp extends Component
{

	constructor( context, props ){
		super( context, props );

		this.state = {
			currentMode: 'search',
			jobId: null
		}
	}
	changeAppMode(newMode, jobId){
		this.setState ({currentMode: newMode});
		if(jobId !== undefined) 
		{
			this.setState ({jobId: jobId});
		}
	}
	render(){

		var modeComponent = <Search searchAction = {this.props.Actions.search}
						data = {this.props.search_results} />;
		switch(this.state.currentMode) 
		{
			case 'search':
				break;
			case 'jobPosting':
				modeComponent = <PostJobComponent changeAppMode={this.changeAppMode.bind(this)}/>;
				break;
			default:
				break;
		}
		return modeComponent;
	}

=======