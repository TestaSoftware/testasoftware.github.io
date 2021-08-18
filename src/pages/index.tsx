import * as React from "react"
import { Link } from "gatsby"

import HomepageLayout from "../layouts/homepage"
import Seo from "../components/site/seo"

const IndexPage = () => (
  <HomepageLayout>
    <Seo title="Home" />
  </HomepageLayout>
)

export default IndexPage
