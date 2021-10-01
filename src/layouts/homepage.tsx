import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import BaseLayout from "./base"
import Header from "../components/content/header"
import LatestPosts from "../components/blog/latest-posts"

const HomepageLayout = ({ children }) => {
  return (
    <BaseLayout>
      <Header background="/assets/images/steve/20190821_205627008_iOS.jpg" minheight="75" textalign="text-center">
        <h1 className="text-white">Testa Software<span className="text-white" id="typed"></span></h1>
        <div id="typed-strings">
        </div>
        <p className="lead mb-4 text-white opacity-8">Welcome to the personal and professional home of Steve Testa.</p>
        <Link to="/about"><button type="button" className="btn btn-rounded bg-gradient-primary mt-4">About Me</button></Link>
      </Header>
      <LatestPosts />
    </BaseLayout>
  )
}

HomepageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomepageLayout
