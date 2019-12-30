import React, { Component } from "react";

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = { input: "" };
	}

	searchInput = e => {
		this.setState({ input: e.target.value });
	};

	render() {
		console.log("search state", this.state);
		return (
			<form>
				<input
					type="text"
					placeholder="Enter location"
					onChange={this.searchInput}
				></input>
				<button
					onClick={e => {
						e.preventDefault();
						this.props.onfilterCity(this.state.input);
					}}
				>
					Search
				</button>
			</form>
		);
	}
}

export default Search;
