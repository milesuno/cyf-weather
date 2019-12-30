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

class WeatherNow extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log("WN props", this.props);
		console.log("weather", this.props.data);
		const { data } = this.props;
		return (
			<div>
				{data.list[data.list.length - 1].weather[0].id < 300 ? (
					<img src={storm} />
				) : data.list[data.list.length - 1].weather[0].id < 499 ? (
					<img src={drizzle} />
				) : data.list[data.list.length - 1].weather[0].id < 599 ? (
					<img src={rain} />
				) : data.list[data.list.length - 1].weather[0].id < 699 ? (
					<img src={snow} />
				) : data.list[data.list.length - 1].weather[0].id < 799 ? (
					<img src={fog} />
				) : data.list[data.list.length - 1].weather[0].id === 800 ? (
					<img src={clear} />
				) : data.list[data.list.length - 1].weather[0].id === 801 ? (
					<img src={partlycloudy} />
				) : data.list[data.list.length - 1].weather[0].id < 805 ? (
					<img src={mostlycloudy} />
				) : (
					<img src={unknown} />
				)}

				<h3>
					{data.list[data.list.length - 1].weather[0].description}
				</h3>
				<h4>
					Temperature:{" "}
					{Math.floor(data.list[data.list.length - 1].main.temp_min)}
					°C to{" "}
					{Math.floor(data.list[data.list.length - 1].main.temp_max)}
					°C
				</h4>
				<h4>
					Humidity: {data.list[data.list.length - 1].main.humidity}%
				</h4>
				<h4>
					Pressure: {data.list[data.list.length - 1].main.pressure}
				</h4>
			</div>
		);
	}
}

export default WeatherNow;
