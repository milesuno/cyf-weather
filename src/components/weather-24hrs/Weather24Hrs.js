import React, { Component } from "react";
import clear from "../../img/weather-icons/clear.svg";
import drizzle from "../../img/weather-icons/drizzle.svg";
import fog from "../../img/weather-icons/fog.svg";
import mostlycloudy from "../../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../../img/weather-icons/partlycloudy.svg";
import rain from "../../img/weather-icons/rain.svg";
import snow from "../../img/weather-icons/snow.svg";
import storm from "../../img/weather-icons/storm.svg";
import unknown from "../../img/weather-icons/unknown.svg";

import "./Weather24Hrs.css";

class Weather24Hrs extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log("W24 props", this.props);

		const { data } = this.props;
		return (
			<section>
				{data.list.map(weather => {
					console.log("Weather in map", weather);
					return (
						<div>
							<h5>
								{weather.dt_txt.slice(
									weather.dt_txt.length - 8,
									weather.dt_txt.length - 3
								)}
							</h5>
							{weather.weather[0].id < 300 ? (
								<img src={storm} />
							) : weather.weather[0].id < 499 ? (
								<img src={drizzle} />
							) : weather.weather[0].id < 599 ? (
								<img src={rain} />
							) : weather.weather[0].id < 699 ? (
								<img src={snow} />
							) : weather.weather[0].id < 799 ? (
								<img src={fog} />
							) : weather.weather[0].id === 800 ? (
								<img src={clear} />
							) : weather.weather[0].id === 801 ? (
								<img src={partlycloudy} />
							) : weather.weather[0].id < 805 ? (
								<img src={mostlycloudy} />
							) : (
								<img src={unknown} />
							)}

							<h5>{Math.floor(weather.main.temp)}°C</h5>
						</div>
					);
				})}
			</section>
		);
	}
}

export default Weather24Hrs;
