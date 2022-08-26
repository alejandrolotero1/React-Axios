// import React, { useCallback } from "react"
// import { useState } from "react"

import react from "react"
import { FaReact } from 'react-icons/fa';


function CampoName() {
  return (
    <nav className="nav">
      <div className="tituloNav">
        <h1>Ejercicios React <span className="IconNav"><FaReact /></span> </h1>
      </div>
        <ul className="ul">
          <li><p className="navOptions">Git Hub</p></li>
          <li><p className="navOptions">Login</p></li>
          <li><p className="navOptions">Registro</p></li>
        </ul>
          
    </nav>
  )
}

export default CampoName