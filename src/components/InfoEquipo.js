import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { NavLink } from 'react-router-dom'

export default class InfoEquipo extends Component {
    url = Global.apiFutbol;

    state = {
        info: [],
        jugadores: [],
        mostrarJugadores: false 
    }

    LoadInfo = () => {
        let id = this.props.idEquipo;
        var request = "api/equipos/" + id;
        axios.get(this.url + request).then(response => {
            this.setState({
                info: response.data,
                mostrarJugadores: false // 👈 Reiniciamos vista al cambiar de equipo
            });
        });
    }

    CargarJugadores = () => {
        let id = this.props.idEquipo;
        var request = "/api/Jugadores/JugadoresEquipos/" + id;
        axios.get(this.url + request).then(response => {
            this.setState({
                jugadores: response.data,
                mostrarJugadores: true
            });
        }).catch(err => console.error('Error cargando jugadores:', err));
    }

    VolverInfo = () => {
        this.setState({ mostrarJugadores: false });
    }

    componentDidMount = () => {
        this.LoadInfo();
    }

    // 👇 Se ejecuta cada vez que cambian las props
    componentDidUpdate(prevProps) {
        // Si el idEquipo cambió, recargamos los datos
        if (prevProps.idEquipo !== this.props.idEquipo) {
            this.LoadInfo();
        }
    }

    render() {
        const { info, jugadores, mostrarJugadores } = this.state;

        return (
            <div className="container mt-3">
                {!mostrarJugadores && (
                    <div>
                        <h2>{info.nombre}</h2>
                        <img src={info.imagen} width="150" />
                        <p>{info.descripcion}</p>

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
                                {jugadores.map((jugador, index) => (
                                    <tr key={index}>
                                        <td>{jugador.nombre}</td>
                                        <td><img src={jugador.imagen} width="150" /></td>
                                        <td><NavLink className="btn btn-info" to={"/details/" + jugador.idJugador}>Details</NavLink></td>
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
