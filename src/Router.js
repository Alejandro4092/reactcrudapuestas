import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenuApuestas from './components/MenuApuestas'
import InfoRealMadrid from './components/InfoRealMadrid'
import InfoBarsa from './components/InfoBarsa'
import DetallesJugadores from './components/DetallesJugadores'
import { useParams } from 'react-router-dom';
import Home from './components/Home'


export default class Router extends Component {
  render() {
     function DetallesJugador(){
        let idjugador= useParams();
        return <DetallesJugadores idJugador={idjugador.idjugador}/>;
    }
    return (
     <BrowserRouter>
        <MenuApuestas />
        <Routes>
           <Route exact path='/' element={<Home/>} />
          <Route exact path='/realmadrid' element={<InfoRealMadrid/>} />
          <Route exact path='/barsa' element={<InfoBarsa/>} />
          <Route exact path='/details/:idjugador' element={<DetallesJugador/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}
