import React, { Component } from 'react'
import img from './../assets/images/enfrentamiento.jpg'

export default class Home extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <img src={img} className="img-fluid w-50" alt="Enfrentamiento" />
      </div>
    )
  }
}
