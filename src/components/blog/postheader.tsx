import * as React from "react"

const PostHeader = ({ frontmatter }) => (
  <header>
    <div className="page-header min-vh-100">
      <div className="oblique position-absolute top-0 h-100 d-md-block d-none">
        <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" 
             style={{backgroundImage:"url("+ frontmatter.image + ")"}}></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 d-flex justify-content-center flex-column">
            <h1 className="text-gradient text-primary">{frontmatter.title}</h1>
            <h1 className="mb-4"></h1>
            <p className="lead pe-5 me-5">{frontmatter.date}</p>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default PostHeader