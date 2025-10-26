import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../assets/images/logo.png'

export default class MenuApuestas extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <a className="navbar-brand" href="#">
                    <img src={logo} style={{ width: "60px" }} />
                </a>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="">Champions</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/create"></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   Equipos
                                </a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="realmadrid">Real Madrid</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="barsa">Barsa</NavLink></li>

                                    
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}
