import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { NavLink } from 'react-router-dom'

export default class InfoRealMadrid extends Component {
    url = Global.apiFutbol;

    state = {
        info: [],
        jugadores: [],
        mostrarJugadores: false 
    }

    LoadInfo = () => {
        let id = 3;
        var request = "api/equipos/" + id;
        axios.get(this.url + request).then(response => {
            this.setState({
                info: response.data
            });
        });
    }

    CargarJugadores = () => {
        let id = 3;
        var request = "/api/Jugadores/JugadoresEquipos/" + id;
        axios.get(this.url + request).then(response => {
            this.setState({
                jugadores: response.data,
                mostrarJugadores: true
            });
        });
    }

    VolverInfo = () => {
        this.setState({ mostrarJugadores: false });
    }

    componentDidMount = () => {
        this.LoadInfo();
    }

    render() {
        const { info, jugadores, mostrarJugadores } = this.state;

        return (
            <div className="container mt-3">
            
                {!mostrarJugadores && (
                    <div>
                        <h2>{this.state.info.nombre}</h2>
                        <img src={this.state.info.imagen}  width="150" />
                        <p>{this.state.info.descripcion}</p>

                        <button className="btn btn-info me-2" onClick={this.CargarJugadores}>
                            Jugadores
                        </button>

                        <NavLink className="btn btn-primary" to="/">
                            Volver
                        </NavLink>
                    </div>
                )}


                {mostrarJugadores && (
                    <div>
                        <h2>Jugadores del {info.nombre}</h2>

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Imagen</th>
                                    <th></th>
                                  
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.jugadores.map((jugadores, index) => (
                                    <tr key={index}>
                                        <td>{jugadores.nombre}</td>
                                        <td><img src={jugadores.imagen} width="150"></img></td>
                                        <td><NavLink className="btn btn-info" to={"/details/"+jugadores.idJugador}>Details</NavLink></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <button className="btn btn-primary" onClick={this.VolverInfo}>
                            Volver
                        </button>
                    </div>
                )}
            </div>
        );
    }
}
