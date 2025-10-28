import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { NavLink } from 'react-router-dom'

export default class CreateApuesta extends Component {
  cajaUsuario = React.createRef();
  cajaResultado = React.createRef();
  cajaFecha = React.createRef();

  insertarApuesta = (e) => {
    e.preventDefault();
    const request = "api/Apuestas";

    const nuevaApuesta = {
      idApuesta: 0,
      usuario: this.cajaUsuario.current.value,
      resultado: this.cajaResultado.current.value,
      fecha: this.cajaFecha.current.value
    };

    axios.post(Global.apiFutbol + request, nuevaApuesta).then(res => {
      
    });
  }
  //otra forma de hacer el post
//   insertarCoche=(event)=>{
//         event.preventDefault();
//         var request="api/coches/insertcoche";
//         let coche={
//             marca:this.cajaMarca.current.value,
//             modelo:this.cajaModelo.current.value,
//             conductor:this.cajaConductor.current.value,
//             imagen:this.cajaImagen.current.value
//         }
//         console.log(coche);
//         axios.post(this.url+request,coche).then(response=>{
//             console.log("response",response);
//             this.setState({
//                 status:true
//             });
//         });
//     }

  render() {
    return (
      <div className="container mt-4">
        <h2>Nueva Apuesta</h2>
        <form onSubmit={this.insertarApuesta}>
          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input type="text" className="form-control" ref={this.cajaUsuario} />
          </div>
          <div className="mb-3">
            <label className="form-label">Resultado</label>
            <input type="text" className="form-control" ref={this.cajaResultado}  />
          </div>
          <div className="mb-3">
            <label className="form-label">Fecha</label>
            <input type="text" className="form-control" ref={this.cajaFecha}  />
          </div>
          <button type="submit" className="btn btn-primary">Guardar</button>
          <NavLink to="/apuestas" className="btn btn-secondary ms-2">Volver</NavLink>
        </form>
      </div>
    )
  }
}
