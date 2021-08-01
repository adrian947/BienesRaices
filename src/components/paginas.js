import React from "react"
import styled from "@emotion/styled"
import Layout from "./Layout"
import { graphql } from "gatsby"

const ContenidoPagina = styled.div`
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

export const query = graphql`
  query ($id: String!) {
    allStrapiPaginas(filter: { id: { eq: $id } }) {
      nodes {
        nombre
        contenido
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
const Paginas = ({
  data: {
    allStrapiPaginas: { nodes },
  },
}) => {
  const { nombre, contenido } = nodes[0]

  return (
    <Layout>
      <main className="contenedor">
        <h1>{nombre}</h1>
        <ContenidoPagina>
          <Imagen src={nodes[0].imagen.localFile.childImageSharp.fluid.src} />
          <p>{contenido}</p>
        </ContenidoPagina>
      </main>
    </Layout>
  )
}

export default Paginas
