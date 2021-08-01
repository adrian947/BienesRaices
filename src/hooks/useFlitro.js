import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

const Form = styled.form`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  border: 1px solid #e1e1e1;
  max-width: 1200px;
  margin: 2rem auto 0 auto;
`
const Select = styled.select`
  flex: 1;
  padding: 1rem;
  appearance: none;
  border: none;
  font-family: "Lato";
`

const useFlitro = () => {
  const querys = useStaticQuery(graphql`
    query {
      allStrapiCategorias {
        nodes {
          nombre
          id
        }
      }
    }
  `)

  const [categoria, setCategoria] = useState("")

  const handleSelectChange = e => {
    setCategoria(e.target.value)
  }

  const FiltroUI = () => (
    <Form>
      <Select onChange={handleSelectChange} value={categoria}>
        <option value="">-- Selecionar categoria --</option>

        {querys.allStrapiCategorias.nodes.map(cat => (
          <option key={cat.id}>{cat.nombre}</option>
        ))}
      </Select>
    </Form>
  )

  return { categoria, FiltroUI }
}

export default useFlitro
