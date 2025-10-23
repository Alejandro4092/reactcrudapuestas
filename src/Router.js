import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes } from 'react-router-dom'
import MenuRutas from './components/MenuRutas'

export default class Router extends Component {
  render() {
    return (
     <BrowserRouter>
        <MenuRutas />

        <Routes>
          
        </Routes>
      </BrowserRouter>
    )
  }
}
