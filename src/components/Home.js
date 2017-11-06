import React, { Component } from "react"
import { Link } from "react-router-dom"
import HeaderDark from "./HeaderDark"
import chiakas from "../../assets/chiak.png"


export default class Home extends Component {
    render() {
        return(
            <div>
                <HeaderDark />
                <section className="home">
                    <Link to="/play" className="linkas">ENTER</Link>
                    <img src={chiakas} alt="chuck"/>
                </section>
            </div>
        )
    }
}
