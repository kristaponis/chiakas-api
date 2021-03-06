import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import HeaderLight from "./HeaderLight"
import chiak from "../../assets/chiak.png"


export default class Play extends Component {
    handleSearch() {
		const jokeText = document.getElementById("jokeText")
		let query = document.getElementById("input").value
		axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`)
			.then(res => {
				const arr = res.data.result
				jokeText.innerText = arr[Math.floor(Math.random() * arr.length)].value
			})
	}

	handleRandom() {
		const jokeText = document.getElementById("jokeText")
		axios.get("https://api.chucknorris.io/jokes/random")
			.then(res => {
				jokeText.innerText = res.data.value
			})
	}

	handleKeyPress(e) {
		const press = this.handleSearch
		e.key === "Enter" ? press() : null
	}

	render() {
		return (
			<div>
				<HeaderLight />
				<section className="play">
					<div className="play-block1">
						<div className="forma">
							<input id="input" className="form-input" type="text" onKeyPress={this.handleKeyPress.bind(this)} placeholder="search" />
							<button onClick={this.handleSearch}>Show Joke</button>
						</div>
						<p>or</p>
						<button className="randome-joke-button" onClick={this.handleRandom}>Gimme Random Joke</button>
					</div>
					<div className="play-block2">
						<p id="jokeText" className="joke-text">Awesome Chuck Norris Jokes</p>
						<img src={chiak} alt="chiakas" />
					</div>
				</section>
			</div>
		)
	}
}
