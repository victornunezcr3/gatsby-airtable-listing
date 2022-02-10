import React from "react"
import { graphql } from "gatsby"
import { Cards, Hero, SiteMetadata } from "../components"
import { Layout } from "../layouts/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <SiteMetadata
        title="Finca diez digital"
        description="Directorio comercial de Finca 10"
        image={data.hero.url}
      />

      <Hero
        image={data.hero}
        tag="Avisos económicos"
        title="Finca diez digital, Directorio Comercial
              | Listado de Negocios y Servicios"
        description="Sitio de promocion del comercio en la localidad"
      />

      <Cards nodes={data.items.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery($tableName: String!) {
    hero: file(relativePath: { eq: "hero-travel.jpg" }) {
      ...HeroImageFragment
    }
    items: allAirtable(filter: { table: { eq: $tableName } }) {
      nodes {
        data {
          country
          image {
            ...CardImageFragment
          }
          name
          slug
          summary
        }
      }
    }
  }
`
