import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import BaseLayout from "./base"
import Header from "../components/home/header"
import LatestPosts from "../components/home/latest-posts"

const HomepageLayout = ({ children }) => {
  return (
    <BaseLayout>
      <Header />
      <LatestPosts />
    </BaseLayout>
  )
}

HomepageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomepageLayout
