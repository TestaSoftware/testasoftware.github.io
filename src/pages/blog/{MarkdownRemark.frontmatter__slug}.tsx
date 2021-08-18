import React from "react"
import { graphql } from "gatsby"

import DefaultLayout from "../../layouts/default"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <DefaultLayout>
      <section className="py-sm-7 py-5 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="blog-post-container">
                <div className="blog-post">
                  <h1>{frontmatter.title}</h1>
                  <h2>{frontmatter.date}</h2>
                  <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        image
      }
    }
  }
`