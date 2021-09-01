import * as React from "react"
import { Link, graphql } from "gatsby"

import DefaultLayout from "../../layouts/default"
import Seo from "../../components/site/seo"

const PostSummary = ({ frontmatter, excerpt }) => (
  <div className="card card-blog card-plain">
    <div className="position-relative">
      <Link className="d-block blur-shadow-image" to={"/blog/" + frontmatter.slug}>
        <img src={frontmatter.image} alt="img-blur-shadow" className="img-fluid shadow border-radius-lg w-100" />
      </Link>
    </div>
    <div className="card-body px-0 pt-4">
      {frontmatter.categories.map(cat => (
      <span className="text-gradient text-primary text-gradient font-weight-bold text-sm text-uppercase">{cat} </span>
      ))}
      <Link to={"/blog/" + frontmatter.slug}>
        <h4>
          {frontmatter.title}
        </h4>
      </Link>
      <p>
        {excerpt}
      </p>
      <Link to={"/blog/" + frontmatter.slug}>
        <button type="button" className="btn bg-gradient-primary mt-3">Read more</button>
      </Link>
    </div>
  </div>
)

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <DefaultLayout>
      <Seo title="Blog" />
      <section className="pt-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
            {posts.map(post => (
              <PostSummary frontmatter={post.node.frontmatter} excerpt={post.node.excerpt} />
            ))}
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            slug
            title
            image
            date
            categories
          }
          excerpt
        }
      }
    }
  }
`
