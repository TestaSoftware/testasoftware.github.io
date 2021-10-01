import { Link } from "gatsby"
import * as React from "react"

const ContactLink = ({children, iconClass}) => (
  <div className="d-flex">
    <div>
      <i className={"text-sm " + iconClass}></i>
    </div>
    <div className="ps-3">
      <span className="text-sm opacity-8">{children}</span>
    </div>
  </div>
)

const ContactCard = () => (
  <div className="container">
    <div className="row">
      <div className="col mx-auto">
        <div className="card card-plain">
          <div className="card-body">
            <div className="row">
              <div className="col-lg">
                <ContactLink iconClass="fas fa-phone"><a href="tel:4403050073">440.305.0073</a></ContactLink>
                <ContactLink iconClass="fas fa-envelope"><a href="mailto:steve@testasoftware.com">steve@testasoftware.com</a></ContactLink>
                <ContactLink iconClass="fas fa-blog"><Link to="/blog">https://testasoftware.com</Link></ContactLink>
              </div>
              <div className="col-lg">
                <ContactLink iconClass="fab fa-twitter"><a href="https://twitter.com/steven_testa">twitter</a></ContactLink>
                <ContactLink iconClass="fab fa-github"><a href="https://github.com/stesta">github</a></ContactLink>
                <ContactLink iconClass="fab fa-linkedin"><a href="https://www.linkedin.com/in/stevendtesta/">linkedin</a></ContactLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ContactCard