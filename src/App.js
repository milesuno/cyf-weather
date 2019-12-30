import React, { Component } from "react";
import "./App.css";
import Search from "./components/search/Search";
import WeatherNow from "./components/weather-now/WeatherNow";
import Weather24Hrs from "./components/weather-24hrs/Weather24Hrs";
import FakeWeather from "./data/FakeWeather.json";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filteredData: "",
			key: "6db52f1961eb11ed92cf6d6632c5abba"
		};
	}

	handleFilterCity = searchInput => {
		fetch(
			`http://api.openweathermap.org/data/2.5/forecast?q=${searchInput}&cnt=8&units=metric&appid=${this.state.key}`
		)
			.then(res => res.json())
			.then(json => this.setState({ filteredData: json }))
			.catch(err => err);
	};

	componentDidUpdate() {
		console.log("App state", this.state);
	}

	render() {
		console.log("data", FakeWeather);
		const { filteredData } = this.state;
		return (
			<div className="app">
				<header className="app__header">
					<Search
						srcData={FakeWeather}
						onfilterCity={this.handleFilterCity}
					/>
				</header>
				<main className="app__main">
					{filteredData ? (
						<>
							<WeatherNow data={filteredData} />
							<Weather24Hrs data={filteredData} />
						</>
					) : null}
				</main>
			</div>
		);
	}
}

export default App;
