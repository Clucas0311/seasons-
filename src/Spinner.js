import React from 'react';

const Spinner = (props) => {
	return (
		<div className="ui active dimmer">
			<div className="ui big text loader">{props.message}</div>
		</div>
	);
};

Spinner.defaultProps = {
	// name of prop : 'Loading'
	// creating default prop in event of not adding a prop
	message: 'Loading'
};
export default Spinner;
