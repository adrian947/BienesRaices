import React from "react"
import Iconos from "./Iconos"
import styled from "@emotion/styled"

const Card = styled.div`
  border: 1px solid #e1e1e1;
  img {
    max-width: 100%;
  }
`

const Contenido = styled.div`
  padding: 2rem;
  h3 {
    font-family: "Lato";
    margin: 0 0 2rem 0;
    font-size: 2.4rem;
  }
  .precio {
    font-size: 2rem;
    color: #75ab00;
  }
`

const PropiedadPreview = ({ propiedades }) => {
  //   console.log(propiedades)

  const {
    nombre,
    estacionamiento,
    habitaciones,
    precio,
    wc,
    imagen,
    id,
  } = propiedades

  return (
    <Card>
      <img src={imagen.localFile.sharp.fluid.src} alt={id} />

      <Contenido>
        <h3>{nombre}</h3>
        <p className="precio">$ {precio}</p>
        <Iconos
          estacionamiento={estacionamiento}
          wc={wc}
          habitaciones={habitaciones}
        />
      </Contenido>
    </Card>
  )
}

export default PropiedadPreview
