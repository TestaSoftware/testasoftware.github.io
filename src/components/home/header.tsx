import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Header = () => (
  <header className="bg-gradient-dark">
    <div className="page-header min-vh-75" style={{backgroundImage: "url('/assets/images/steve/20190821_205627008_iOS.jpg')"}}>
      <span className="mask bg-gradient-dark opacity-7"></span>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mx-auto my-auto">
            <h1 className="text-white">Testa Software<span className="text-white" id="typed"></span></h1>
            <div id="typed-strings">
            </div>
            <p className="lead mb-4 text-white opacity-8">Welcome to the personal and professional home of Steve Testa.</p>
            <Link to="/about"><button type="button" className="btn btn-rounded bg-gradient-primary mt-4">About Me</button></Link>
          </div>
        </div>
      </div>
      <div className="position-absolute w-100 z-index-1 bottom-0">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g>
            <use xlinkHref="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)" />
            <use xlinkHref="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)" />
            <use xlinkHref="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)" />
            <use xlinkHref="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,1" />
          </g>
        </svg>
      </div>
    </div>
  </header>
)

export default Header
