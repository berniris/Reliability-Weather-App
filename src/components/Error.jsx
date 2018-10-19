import React from 'react';
import Cities from './cities/Cities';

function Error (props) {

	return (
		<div className="error">
		<h1>404 Page Not Found</h1>
		<p>Try one of these links:</p>
		<Cities cities={props.cities}/>
		</div>
		)
}

export default Error; 