import * as React from "react"

const SocialButtons = () => (
  <span>
    <a href="https://github.com/stesta">
      <button type="button" className="btn btn-icon-only btn-github">
        <span className="btn-inner--icon mr-1"><i className="fab fa-github"></i></span>
      </button>
    </a> 
    <a href="https://twitter.com/steven_testa" style={{margin: "0 10px"}}>
      <button type="button" className="btn btn-icon-only btn-twitter ">
          <span className="btn-inner--icon mr-1"><i className="fab fa-twitter"></i></span>
      </button>
    </a> 
    <a href="https://www.linkedin.com/in/stevendtesta/">
      <button type="button" className="btn btn-icon-only btn-linkedin">
          <span className="btn-inner--icon mr-1"><i className="fab fa-linkedin"></i></span>
      </button>
    </a>
  </span>
)

export default SocialButtons