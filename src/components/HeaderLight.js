import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class HeaderLight extends Component {
    render() {
        return(
            <section className="header-light">
                <Link to="/" className="title2">WANNA HEAR A <span className="title2-color">JOKE?</span></Link>
            </section>
        )
    }
}
