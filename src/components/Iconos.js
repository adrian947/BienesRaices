import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const ListadoIcon = styled.ul`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 500px;
  margin: 3rem auto 0 auto;

  li {
    display: flex;
    img {
      margin-right: 1rem;
    }
  }
`

const Iconos = ({ estacionamiento, wc, habitaciones }) => {
  const resp = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "iconos" } }) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `)

  return (
    <div>
      <ListadoIcon>
        <li>
          <img src={resp.allFile.edges[0].node.publicURL} alt="icon0" />
          <p> {habitaciones}</p>
        </li>
        <li>
          <img src={resp.allFile.edges[1].node.publicURL} alt="icon1" />
          <p> {estacionamiento}</p>
        </li>
        <li>
          <img src={resp.allFile.edges[2].node.publicURL} alt="icon2" />
          <p> {wc}</p>
        </li>
      </ListadoIcon>
    </div>
  )
}

export default Iconos
