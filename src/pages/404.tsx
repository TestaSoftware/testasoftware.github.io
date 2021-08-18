import * as React from "react"
import { Link } from "gatsby"

import DefaultLayout from "../layouts/default"
import Seo from "../components/site/seo"

const NotFoundPage = () => (
  <DefaultLayout>
    <Seo title="404: Not found" />
    <section className="my-10">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 my-auto">
            <h1 className="display-1 text-bolder text-gradient text-danger">Error 404</h1>
            <h2>Erm. Page not found</h2>
            <p className="lead">We suggest you to go to the homepage while we solve this issue.</p>
            <Link to="/"><button type="button" className="btn bg-gradient-dark mt-4">Go to Homepage</button></Link>
          </div>
          <div className="col-lg-6 my-auto position-relative">
            <img className="w-100 position-relative" src="/assets/img/illustrations/error-404.png" alt="404-error" />
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
)

export default NotFoundPage
