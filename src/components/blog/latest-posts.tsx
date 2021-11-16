import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link, StaticQuery, graphql } from "gatsby"

const Card = ({ frontmatter, extraClasses, maskbg }) => {
  return (
    <div className={"card card-background align-items-start h-100 " + extraClasses}>
      <div className="full-background" style={{backgroundImage: "url(" + frontmatter.image + ")"}}></div>
      <div className="card-body z-index-3">
      </div>
      <div className="card-footer pb-3 pt-2 z-index-3">
        <Link to={"/blog/" + frontmatter.slug}>
          <h4 className="text-white mb-1">{frontmatter.title}</h4>
        </Link>
        <p className="text-white text-xs font-weight-bolder text-uppercase opacity-7">{frontmatter.date}</p>
      </div>
      <span className={"mask border-radius-xl z-index-2 opacity-6 " + maskbg}></span>
    </div>
  )
}

const LatestPosts = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date}, limit: 5) {
            edges {
              node {
                frontmatter {
                  date(formatString: "YYYY-MM-DD")
                  image
                  slug
                  title
                }
              }
            }
          }
        }
      `}
      render={data => (
        <section className="py-3">
          <hr className="horizontal dark my-5" />
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="p-3 text-center mb-5">
                  <div className="icon icon-shape icon-lg bg-gradient-primary shadow mx-auto">
                    <i className="fas fa-blog"></i>
                  </div>
                  <h2 className="mt-3">Latest Posts</h2>
                  <p>development, functional programming, devops, haskell</p>
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-lg-4 col-md-6">
                <Card frontmatter={data.allMarkdownRemark.edges[0].node.frontmatter} 
                      extraClasses="" 
                      maskbg="bg-gradient-primary" />
              </div>
              <div className="col-lg-4 col-md-6 d-flex flex-column">
                <Card frontmatter={data.allMarkdownRemark.edges[1].node.frontmatter} 
                      extraClasses="" 
                      maskbg="bg-gradient-info" />
                <Card frontmatter={data.allMarkdownRemark.edges[2].node.frontmatter} 
                      extraClasses="mt-4" 
                      maskbg="bg-gradient-primary" />
              </div>
              <div className="col-lg-4 col-md-6 d-flex flex-column">
                <Card frontmatter={data.allMarkdownRemark.edges[3].node.frontmatter} 
                      extraClasses="" 
                      maskbg="bg-gradient-info" />
                <Card frontmatter={data.allMarkdownRemark.edges[4].node.frontmatter} 
                      extraClasses="mt-4" 
                      maskbg="bg-gradient-primary" />
              </div>
            </div>
          </div>
        </section>
        )}
    />
  )
}

export default LatestPosts
