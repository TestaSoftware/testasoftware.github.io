import * as React from "react"

import DefaultLayout from "../layouts/default"
import Seo from "../components/site/seo"

const NotFoundPage = () => (
  <DefaultLayout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </DefaultLayout>
)

export default NotFoundPage
