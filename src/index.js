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
		// must always be called, if not constructor overwrites parent constructor
		super(props);

		//state object: it is going to contain important properties needed
		// default the value to null - don't know the value yet/
		this.state = { lat: null };
	}

	// React says define render
	render() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => console.log(position),
			(err) => console.log(err)
		);
		return <div>Latitude: </div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
