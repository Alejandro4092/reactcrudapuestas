import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import MenuApuestas from './components/MenuApuestas'
import InfoRealMadrid from './components/InfoRealMadrid'
import InfoBarsa from './components/InfoBarsa'
import InfoEquipo from './components/InfoEquipo'
import DetallesJugadores from './components/DetallesJugadores'
import Home from './components/Home'
import Apuestas from './components/Apuestas'
import CreateApuesta from './components/CreateApuesta'
import DeleteApuesta from './components/DeleteApuesta'

export default class Router extends Component {

  render() {
    function DetallesJugador() {
      let idjugador = useParams();
      return <DetallesJugadores idJugador={idjugador.idjugador} />;
    }

    function Equipo() {
      let params = useParams();
      return <InfoEquipo idEquipo={params.id} />;
    }

    return (
      <BrowserRouter>
        <MenuApuestas />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/realmadrid' element={<InfoRealMadrid />} />
          <Route exact path='/barsa' element={<InfoBarsa />} />
          <Route exact path='/equipos/:id' element={<Equipo />} />
          <Route exact path='/details/:idjugador' element={<DetallesJugador />} />
          <Route exact path='/apuestas' element={<Apuestas />} />
          <Route exact path='/createapuesta' element={<CreateApuesta />} />
          {/* //eliminar apuesta en otro componente */}
          {/* <Route path="/deleteapuesta/:idApuesta" element={<DeleteApuesta />} /> */}


        </Routes>
      </BrowserRouter>
    )
  }
}
