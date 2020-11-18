import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
	// constructor function is the first function that is called before anything else
	// used to initialize state
	// when constructor is defined
	// it is automatically going to be called with the props object
	// constructor(props) {
	// 	// you have to call a function call super with the props object
	// 	// super is a reference to the parent  constructor function React.Component
	// 	// MUST always be called, if not constructor overwrites parent constructor
	// 	super(props);

	// 	//state object: it is going to contain important properties needed
	// 	// default the value to null - don't know the value yet/
	// 	// intialize state in our constructor function
	// 	// only time we use a direct assignment is in the constructor
	// 	// constructors main purpose is initailize the state object
	// 	this.state = { lat: null, errorMessage: '' };
	// }
	state = { lat: null, errotMessage: '' };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			// update state object - get the latitude
			(position) => this.setState({ lat: position.coords.latitude }),
			(err) => this.setState({ errorMessage: err.message })
		);
	}

	// React says we have define render
	// Render runs continuosly
	// you need a render function
	render() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}
		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		}

		return <Spinner message="Please accept location request" />;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
