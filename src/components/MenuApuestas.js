import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../assets/images/logo.png'
import axios from 'axios'
import Global from '../Global'

export default class MenuApuestas extends Component {
    state = {
        equipos: []
    }

    componentDidMount() {
        this.loadEquipos();
    }

    loadEquipos = () => {
        const url = Global.apiFutbol;
        // intentar obtener la lista de equipos desde la API
        axios.get(url + 'api/equipos')
            .then(res => {
                this.setState({ equipos: res.data });
            })

    }

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
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/apuestas">Apuestas</NavLink>
                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Equipos
                                </a>
                                <ul className="dropdown-menu">
                                    {
                                        this.state.equipos.map((equipo, index) => {
                                            const equipoId = equipo.idEquipo;

                                            return (
                                                <li key={index} >
                                                    <NavLink className="dropdown-item" to={"/equipos/" + (equipoId || '')}>
                                                        {equipo.nombre}
                                                    </NavLink>
                                                </li>
                                            )
                                        })
                                    }
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
