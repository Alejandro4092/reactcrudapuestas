import React from 'react'
import axios from 'axios'
import Global from '../Global'
import { useNavigate, useParams } from 'react-router-dom'

export default function DeleteApuesta() {
  const { idApuesta } = useParams();
  const navigate = useNavigate();
  const url = Global.apiFutbol;

  const eliminarApuesta = () => {
    const request = "api/Apuestas/" + idApuesta;
    axios.delete(url + request).then(res => {
      navigate("/apuestas");
    });
  };

  // Llamamos a la función directamente
  eliminarApuesta();

  return (
    <div className="container mt-4">
      <h3>Eliminando apuesta...</h3>
    </div>
  );
}
