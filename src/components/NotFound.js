import React, { Component } from "react"
import HeaderDark from "./HeaderDark"
import page404 from "../../assets/page404.jpg"

export default class NotFound extends Component {
    render() {
        return(
            <div>
                <HeaderDark />
                <section className="not-found">
                    <img src={page404} alt="page 404"/>
                </section>
            </div>
        )
    }
}
