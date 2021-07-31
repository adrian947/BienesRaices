import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { css } from "@emotion/react"
import * as heroCSS from "../css/hero.module.css"

const Encuentra = () => {
  const { imagen } = useStaticQuery(graphql`
    query {
      imagen: file(relativePath: { eq: "encuentra.jpg" }) {
        relativePath
        publicURL
        sharp: childImageSharp {
          fluid(maxWidth: 1900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  //   console.log(resp.file)

  return (
    <div>
      <BackgroundImage
        tag="section"
        fluid={imagen.sharp.fluid}
        fadeIn="soft"
        css={css`
          height: 400px;
        `}
      >
        <div  css={css`
              max-width: 800px;
              margin: 0 auto;
            `}>
          <h1  className={heroCSS.imagenbg}>Encuentra la casa de tus sueños</h1>
          <p className={heroCSS.imagenbg}>Mas de 15 años de experiencia</p>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default Encuentra
