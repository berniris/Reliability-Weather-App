import React from 'react';


function City(props) {
  // replace spaces in the city name with a - to match css class name 
  const cityName = props.name.toLowerCase().replace(' ', '-');

  return (
    <div className={`${cityName}`}>
    {/*<p>{cityName}</p>*/}
    </div>
    )
}

export default City;