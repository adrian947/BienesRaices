import React from "react"
import Iconos from "./Iconos"
import styled from "@emotion/styled"
import Layout from "./Layout"
import { graphql } from "gatsby"

const Contenido = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`

const Imagen = styled.img`
  width: 100%;
`
const Sidebar = styled.aside`
  .precio {
    font-size: 2rem;
    color: #75ad00;
  }
  .agente {
    margin-top: 4rem;
    border-radius: 2rem;
    background-color: #75ad00;
    padding: 3rem;
    color: #fff;
    text-align: center;
    p{
        margin-top: 1rem
    }
  }
  p{
      margin: 0;
  }
`

export const query = graphql`
  query ($id: String!) {
    allStrapiPropiedades(filter: { id: { eq: $id } }) {
      nodes {
        nombre
        estacionamiento
        id
        precio
        wc
        descripcion
        habitaciones
        agentes {
          telefono
          nombre
          id
          email
        }
        imagen {
          localFile {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`
const Propiedades = ({
  data: {
    allStrapiPropiedades: { nodes },
  },
}) => {
  const {
    agentes,
    descripcion,
    estacionamiento,
    habitaciones,
    nombre,
    precio,
    wc,
  } = nodes[0]


  
  return (
    <Layout>
      <h1>{nombre}</h1>
      <Contenido>
        <main>
          <Imagen src={nodes[0].imagen.localFile.childImageSharp.fluid.src} />
          <p>{descripcion}</p>
        </main>
        <Sidebar>
          <p className='precio'>$ {precio}</p>
          <Iconos
            estacionamiento={estacionamiento}
            wc={wc}
            habitaciones={habitaciones}
          />

          <div className='agente'>
            <h2>Vendedor:</h2>
            <p>Nombre: {agentes.nombre}</p>
            <p>Telefono: {agentes.telefono}</p>
            <p>Email: {agentes.email}</p>
          </div>
        </Sidebar>
      </Contenido>
    </Layout>
  )
}

export default Propiedades
