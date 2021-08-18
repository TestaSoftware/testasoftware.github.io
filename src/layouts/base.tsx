import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/home/header"
import Navbar from "../components/site/navbar"
import Footer from "../components/site/footer"

const BaseLayout = ({ children }) => {
    return (
      <>
        <div className="container position-sticky z-index-sticky top-0">
          <div className="row">
            <div className="col-12">
              <Navbar></Navbar>
            </div>
          </div>
        </div>
        
        {children}
  
        <Footer></Footer> 
      </>
    )
  }
  
  BaseLayout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  export default BaseLayout
  