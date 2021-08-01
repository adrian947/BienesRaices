import React from "react"
import Iconos from "./Iconos"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import urlSlug from "url-slug"

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
const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1 rem;
  background-color: #75ab00;
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
`

const PropiedadPreview = ({ propiedades }) => {
  //   console.log(propiedades)

  const { nombre, estacionamiento, habitaciones, precio, wc, imagen, id } =
    propiedades

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
        <Boton to={urlSlug(nombre)}>Visitar Propiedad</Boton>
      </Contenido>
    </Card>
  )
}

export default PropiedadPreview
