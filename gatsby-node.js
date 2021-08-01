const urlSlug = require("url-slug")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allStrapiPaginas {
        nodes {
          id
          nombre
        }
      }
      allStrapiPropiedades {
        nodes {
          id
          nombre
        }
      }
    }
  `)

   if (result.errors) {
    reporter.panic("no hubo resultado", result.errors)
  }

  // si hay resultado generar los archivos estaticos

  const paginas = result.data.allStrapiPaginas.nodes
  const propiedades = result.data.allStrapiPropiedades.nodes


  //crear template de paginas
  paginas.forEach(pagina => {
    actions.createPage({
        path: urlSlug(pagina.nombre),
        component: require.resolve('./src/components/paginas.js'),
        context: {
            id: pagina.id
        }
    })
  })










  //crear template de propiedades

  propiedades.forEach(prop => {
    actions.createPage({
        path: urlSlug(prop.nombre),
        component: require.resolve('./src/components/propiedades.js'),
        context: {
            id: prop.id
        }
    })
  })





}
