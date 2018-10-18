import React from 'react';
import City from './City'


function Cities(props) {
  const cities = props.cities.map(city => {
    return (
      <City
        key={city.id}
        name={city.name}
      />
    )
  })
  
  return (
    <div className="city-container">
      {cities}
      </div>
  )
}

export default Cities;