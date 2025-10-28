import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { NavLink } from 'react-router-dom'

export default class Apuestas extends Component {
  url = Global.apiFutbol;
  state = {
    apuestas: []
  }

  // Cargar apuestas
  loadApuestas = () => {
    const request = "api/Apuestas";
    axios.get(this.url + request).then(res => {
      this.setState({ apuestas: res.data });
    });
  }

  // Eliminar apuesta por ID
  deleteApuesta = (idApuesta) => {

    const request = "api/Apuestas/" + idApuesta;
    axios.delete(this.url + request).then(res => {

      this.loadApuestas();
    })

  }

  componentDidMount = () => {
    this.loadApuestas();
  }

  render() {
    return (
      <div className="container mt-4">
        <h2>Listado de Apuestas</h2>

        <NavLink className="btn btn-success mb-3" to="/createapuesta">
          Nueva Apuesta
        </NavLink>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuario</th>
              <th>Resultado</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.apuestas.map((apuesta, index) => (
              <tr key={index}>
                <td>{apuesta.idApuesta}</td>
                <td>{apuesta.usuario}</td>
                <td>{apuesta.resultado}</td>
                <td>{apuesta.fecha}</td>
                <td>
                  {/* //eliminar apuesta en otro componente */}
                  {/* <NavLink
                    to={"/deleteapuesta/" + apuesta.idApuesta}
                    className="btn btn-danger btn-sm"
                  >
                    Eliminar
                  </NavLink> */}

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.deleteApuesta(apuesta.idApuesta)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
