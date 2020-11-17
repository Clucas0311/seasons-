import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// constructor function is the first function that is called before anything else
	// used to initialize state
	// when constructor is defined
	// it is automatically going to be called with the props object
	constructor(props) {
		// you have to call a function call super with the props object
		// super is a reference to the parent  constructor function React.Component
		// MUST always be called, if not constructor overwrites parent constructor
		super(props);

		//state object: it is going to contain important properties needed
		// default the value to null - don't know the value yet/
		// intialize state in our constructor function
		// only time we use a direct assignment is in the constructor
		this.state = { lat: null, errorMessage: '' };

		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				// update state object - get the latitude
				this.setState({ lat: position.coords.latitude });
			},
			(err) => {
				this.setState({ errorMessage: err.message });
			}
		);
	}

	// React says we have define render
	// Render runs continuosly
	render() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}
		if (!this.state.errorMessage && this.state.lat) {
			return <div>Latitude: {this.state.lat}</div>;
		}

		return <div>Loading!</div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
