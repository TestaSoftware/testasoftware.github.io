import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <div className="page-header min-vh-85">
      <div>
        <img className="position-absolute fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block border-radius-section border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0" src="/assets/img/curved-images/curved6.jpg" alt="image" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 d-flex">
            <div className="card card-body blur text-md-start text-center px-sm-5 shadow-lg mt-sm-5 py-sm-5">
              <h2 className="text-gradient text-primary mb-0">Testa Software</h2>
              <h2 className="text-dark mb-4">Full Stack Development</h2>
              <p className="lead text-dark pe-md-5 me-md-5">
                Welcome to the personal and professional home of Steve Testa. 
              </p>
              <div className="buttons">
                <Link to="/about"><button type="button" className="btn btn-rounded bg-gradient-primary mt-4">About Me</button></Link>
                <Link to="/contact"><button type="button" className="btn btn-rounded btn-outline-secondary mt-4 ms-2">Contact Me</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </header>
)

export default Header
