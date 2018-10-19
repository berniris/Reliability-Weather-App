import React from 'react';
import { Link } from 'react-router-dom';


function City(props) {
  // replace spaces in the city name with a - to match css class name 
  const cityName = props.name.toLowerCase().replace(' ', '-');

  return (
    <Link to={`/${cityName}`}>
    <div className={`${cityName}`}></div>
    </Link>
    )
}

export default City;