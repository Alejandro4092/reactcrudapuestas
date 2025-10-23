import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes } from 'react-router-dom'
import MenuApuestas from './components/MenuApuestas'


export default class Router extends Component {
  render() {
    return (
     <BrowserRouter>
        <MenuApuestas />

        <Routes>
          
        </Routes>
      </BrowserRouter>
    )
  }
}
