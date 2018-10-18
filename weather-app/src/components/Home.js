import React from 'react';
import Header from './Header'
import Cities from './cities/Cities';


function Home(props) {
	return (
		<div>
		<Header/>
		<Cities cities={props.cities}/>
		</div>
		)
} 

export default Home;