import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = ({ }) => (
  <footer className="footer pb-5 pt-5">
    <hr className="horizontal dark mb-5" />
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
        <StaticImage src="../../images/logo/testasoftware-lambda.svg" height={22} alt="Testa Software"></StaticImage>
        </div>
        <div className="col-lg-6 text-center">
          <ul className="nav flex-row align-items-center mb-5 mt-sm-0 justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Me</Link>
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
        <div className="col-lg-3 text-end">
          <a href="https://github.com/stesta" className="text-secondary me-xl-4 me-4">
            <span className="fab fa-github text-lg"></span>
          </a>
          <a href="https://twitter.com/steven_testa" className="text-secondary me-xl-4 me-4">
            <span className="fab fa-twitter text-lg"></span>
          </a>
          <a href="https://www.linkedin.com/in/stevendtesta/" className="text-secondary me-xl-4 me-4">
            <span className="fab fa-linkedin text-lg"></span>
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
