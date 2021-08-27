import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = ({  }) => (
  <nav className="navbar navbar-expand-lg blur blur-rounded position-absolute my-3 top-0 border-bottom py-3 z-index-3 shadow my-3 py-2 start-0 end-0 mx-4">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <StaticImage src="../../images/logo/testasoftware-lambda-med.png" alt="Testa Software"></StaticImage>
      </Link>
      <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon mt-2">
          <span className="navbar-toggler-bar bar1"></span>
          <span className="navbar-toggler-bar bar2"></span>
          <span className="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
        <ul className="navbar-nav navbar-nav-hover mx-auto">
          <li className="nav-item mx-2">
            <Link className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" to="/about">About</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" to="/resume">Resume</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" to="/blog">Blog</Link>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" href="https://github.com/stesta">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </nav> 
)

export default Navbar
