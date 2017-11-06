import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class HeaderDark extends Component {
    render() {
        return(
            <section className="header-dark">
                <Link to="/" className="title1">WANNA HEAR A JOKE?</Link>
            </section>
        )
    }
}
