import { useStaticQuery, graphql } from "gatsby"

const usePropiedades = () => {
  const result = useStaticQuery(graphql`
    query {
      allStrapiPropiedades {
        nodes {
          habitaciones
          id
          estacionamiento
          precio
          wc
          descripcion
          nombre
          categorias {
            nombre
          }
          agentes {
            nombre
            telefono
            email
          }
          imagen {
            localFile {
              sharp: childImageSharp {
                fluid(maxWidth: 1900) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)

  return result.allStrapiPropiedades.nodes.map(hab => ({
    id: hab.id,
    estacionamiento: hab.estacionamiento,
    precio: hab.precio,
    habitaciones: hab.habitaciones,
    nombre: hab.nombre,
    desc: hab.descripcion,
    imagen: hab.imagen,
    agentes: hab.agentes,
    categorias: hab.categorias,
    wc: hab.wc,
  }))
}

export default usePropiedades
