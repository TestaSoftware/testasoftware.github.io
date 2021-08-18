import React from "react"
import { Link, graphql } from "gatsby"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

import DefaultLayout from "../../layouts/default"
import PostHeader from "../../components/blog/postheader"
import gatsbyConfig from "../../../gatsby-config"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  let disqusConfig = {
    url: `${gatsbyConfig.siteMetadata.siteUrl + frontmatter.slug }`,
    //identifier: frontmatter.slug,
    title: frontmatter.title
  }
  return (
    <DefaultLayout>
      <PostHeader frontmatter={frontmatter} />
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-9 mx-auto">
              <div className="h2">{frontmatter.title}</div>
              <div className="mb-5">{frontmatter.date} - <Link to="/about">Steve Testa</Link></div>
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-9 mx-auto">
              <Disqus config={disqusConfig} />
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