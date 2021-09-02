import * as React from "react"
import { Link } from "gatsby"

import DefaultLayout from "../layouts/default"
import Seo from "../components/site/seo"

const IndexPage = () => (
  <DefaultLayout>
    <Seo title="Services" />
  </DefaultLayout>
)

export default IndexPage
