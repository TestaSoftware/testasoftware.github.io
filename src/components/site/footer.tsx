import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = ({ }) => (
  <footer className="footer pb-5 pt-5">
    <hr className="horizontal dark mb-5" />
    <div className="container">
      <div className="row">
        <div className="col-lg-3 text-lg-start text-center mb-lg-0 mb-3">
        <Link className="navbar-brand" to="/">
          <StaticImage src="../../images/logo/testasoftware-lambda-med.png" alt="Testa Software"></StaticImage>
        </Link>
        </div>
        <div className="col-lg-6 text-center mb-lg-0 mb-5">
          <ul className="nav flex-row align-items-center mb-5 mt-sm-0 justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume">Resume</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
          </ul>
          <p className="mb-0">
            © {new Date().getFullYear()} Testa Software
          </p>
        </div>
        <div className="col-lg-3 text-lg-end text-center">
          <a rel="me" href="https://github.com/stesta" className="text-secondary me-xl-4 me-4">
            <span className="fab fa-github text-lg"></span>
          </a>
          <a rel="me" href="https://twitter.com/steven_testa" className="text-secondary me-xl-4 me-4">
            <span className="fab fa-twitter text-lg"></span>
          </a>
          <a rel="me" href="https://www.linkedin.com/in/stevendtesta/" className="text-secondary me-xl-4 me-4">
            <span className="fab fa-linkedin text-lg"></span>
          </a>
          <a rel="me" href="https://hachyderm.io/@steve_testa">
            <span className="fab fa-mastodon text-lg"></span>
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
