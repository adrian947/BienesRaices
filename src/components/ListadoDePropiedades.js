import React, { useState, useEffect } from "react"
import { css } from "@emotion/react"
import usePropiedades from "./../hooks/usePropiedades"
import PropiedadPreview from "./PropiedadPreview"
import * as listCSS from "../css/listadoDeProp.module.css"

const ListadoDePropiedades = () => {
  const resultado = usePropiedades()

  const [propiedades, setPropiedades] = useState([])

  useEffect(() => {
    setPropiedades(resultado)
    //eslint-disable-next-line
  }, [])

  return (
    <div>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras propiedades
      </h2>

      <ul className={listCSS.propiedades}>
        {propiedades.map(prop => (
          <PropiedadPreview key={prop.id} propiedades={prop} />
        ))}
      </ul>
    </div>
  )
}

export default ListadoDePropiedades
