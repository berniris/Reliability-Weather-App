import React from 'react';
import { Link } from 'react-router-dom'

function CityView(props) {
	const cityImg = props.city.name.toLowerCase().replace(' ', '-') + `-` + `img`;
	return (
	<div className="view-container">
		<div className="view-header"><h1>{`${props.city.name}`}</h1>
		</div>
		<div className="view-body"> 
		    <div className="view-body-top">
		    <div>
			<h1 className="temperature">{Math.ceil(props.city.main.temp)}&deg;F</h1>
			<h1>{props.city.weather[0].main}</h1>
			</div>
			<h1>{new Date().toDateString()}</h1>
			</div>
			<div className="description">
                <img src={`http://openweathermap.org/img/w/${props.city.weather[0].icon}.png`} alt="weather-icon" />
                <p><span className="detail">Current weather in {props.city.name}:</span> {props.city.weather[0].description}</p>
            </div>
            <div className="weather-details">
            <p><span className="detail">Low:</span> <span>{Math.floor(props.city.main.temp_min)}&deg;F</span></p>
            <p><span className="detail">High:</span> <span>{Math.floor(props.city.main.temp_max)}&deg;F</span></p>
        </div>
        </div>
        <div className={`${cityImg} city-img`} alt="city-icon" />
        <div className="skinny-rect-shape"></div>
        <div className="circle-shape"><Link to="/">Back Home</Link></div>
        <div className="view-background"></div>
		</div>
		)
}

export default CityView;