import React from 'react';
import CityView from './CityView';
import ErrorView from '../Error';

function View (props) {
	console.log(props.city.city)
	let cityWasClicked;

	if(props.city.city) {
		cityWasClicked = <CityView city={props.city.city}/>;
	} else {
		cityWasClicked = <ErrorView cities={props.cities}/>
	}
	return (
	<div>
	{cityWasClicked}
	</div>
		)
}

export default View;