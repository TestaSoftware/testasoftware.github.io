import * as React from "react"
import { Link, graphql } from "gatsby"

import DefaultLayout from "../layouts/default"
import Seo from "../components/site/seo"

const ResumePage = ({ data }) => {
  return (
    <DefaultLayout>
      <Seo title="Resume" />
      <section className="py-sm-7 py-5 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto">
              <h1>Resume</h1>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}

export default ResumePage

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            title
            image
            date
          }
          excerpt
        }
      }
    }
  }
`