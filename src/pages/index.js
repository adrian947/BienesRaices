import React from "react"
import Layout from "../components/Layout"
import useInicio from "../hooks/useInicio"
import { css } from "@emotion/react"
import BackgroundImage from "gatsby-background-image"
import * as heroCSS from "../css/hero.module.css"
import Encuentra from "../components/Encuentra"
import ListadoDePropiedades from "../components/ListadoDePropiedades"

const Index = () => {
  const inicio = useInicio()

  const { nombre, contenido, imagen } = inicio[0]

  return (
    <div>
      <Layout>
        <BackgroundImage
          tag="section"
          fluid={imagen.sharp.fluid}
          fadeIn="soft"
          css={css`
            height: 400px;
          `}
        >
          <div className={heroCSS.imagenbg}>
            <h1>Venta de casas y departamentos exclusivos</h1>
          </div>
        </BackgroundImage>

        <main>
          <div
            css={css`
              max-width: 800px;
              margin: 0 auto;
            `}
          >
            <h1 className={heroCSS.titulo}>{nombre}</h1>
            <p
              css={css`
                text-align: center;
              `}
            >
              {contenido}
            </p>
          </div>
        </main>
        <Encuentra />

        <ListadoDePropiedades />
      </Layout>
    </div>
  )
}

export default Index
