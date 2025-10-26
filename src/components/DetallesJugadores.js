import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class DetallesJugadores extends Component {
    url=Global.apiFutbol;
    state={
        jugador:[]
    }
    loadJugador=()=>{
       var idJugador=this.props.idJugador;
       console.log("id del Jugador: "+idJugador);
        var request="/api/Jugadores/"+idJugador;
        axios.get(this.url+request).then(response=>{
            this.setState({
                jugador:response.data
            });
        });
    }
    componentDidMount=()=>{
        this.loadJugador();
    }
  render() {
    return (
      <div className="container my-4">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <h1 className="text-center">{this.state.jugador.nombre}</h1>
                        <ul className="list-unstyled text-center">
                            <li>
                                <img
                                    src={this.state.jugador.imagen}
                                    alt={this.state.jugador.nombre}
                                    className="img-fluid rounded mb-3"
                                />
                            </li>
                            <li className="mb-2">{this.state.jugador.posicion}</li>
                            <li className="mb-2">Fecha Nacimiento: {this.state.jugador.fechaNacimiento}</li>
                            <li className="mb-2">Pais: {this.state.jugador.pais}</li>
                        </ul>
                    </div>
                </div>
            </div>
    )
  }
}
