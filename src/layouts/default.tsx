import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import BaseLayout from "./base"

const DefaultLayout = ({ children }) => {
  return (
    <BaseLayout>
      {children}
    </BaseLayout>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
