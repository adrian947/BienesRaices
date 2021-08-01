import React, { useState, useEffect } from "react"
import { css } from "@emotion/react"
import usePropiedades from "./../hooks/usePropiedades"
import PropiedadPreview from "./PropiedadPreview"
import * as listCSS from "../css/listadoDeProp.module.css"
import useFlitro from "../hooks/useFlitro"

const ListadoDePropiedades = () => {
  const resultado = usePropiedades()

  const [propiedades] = useState(resultado)
  const [filtrado, setFiltrado] = useState([])

  //filtrado de propiedades

  const { FiltroUI, categoria } = useFlitro()

  useEffect(() => {
    if (categoria) {
      const filtro = propiedades.filter(
        prop => prop.categorias.nombre === categoria
      )
        console.log(filtro)
      setFiltrado(filtro)
    } else {
      setFiltrado(propiedades)
    }

    //eslint-disable-next-line
  }, [categoria])

  // console.log(propiedades)

  return (
    <div>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras propiedades
      </h2>
      <FiltroUI />

      <ul className={listCSS.propiedades}>
        {filtrado.map(prop => (
          <PropiedadPreview key={prop.id} propiedades={prop} />
        ))}
      </ul>
    </div>
  )
}

export default ListadoDePropiedades
