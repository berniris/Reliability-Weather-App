import React from 'react';
import Cities from './cities/Cities';


function Home(props) {
	return (
		<div>
		<h1>Reliability Weather App</h1>
		<Cities cities={props.cities}/>
		</div>
		)
} 

export default Home;