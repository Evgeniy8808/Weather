import React from "react";

const Weather = (props) => {
    return(
			<div>
			{props.city &&
                <div>
                    <p>Местоположение: {props.city}, {props.country}</p>
                    <p>Температура: {props.temp}</p>
                    <p>Восход: {props.sunrise}</p>
                    <p>Закат: {props.sunset}</p>
                    <p>Температура: {props.temp}</p>
                </div>
			} 
            <p>{props.error}</p>
			</div>
		);
}

export default Weather;
