import * as React from "react"

const ContactForm = () => (
  <div className="container">
    <div className="row">
      <div className="col mx-auto">
        <div className="card card-plain">
          <form id="contact-form" method="post">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <div className="d-flex p-2">
                    <div>
                      <i className="fas fa-phone text-sm"></i>
                    </div>
                    <div className="ps-3">
                      <span className="text-sm opacity-8">440.305.0073</span>
                    </div>
                  </div>
                  <div className="d-flex p-2">
                    <div>
                      <i className="fas fa-envelope text-sm"></i>
                    </div>
                    <div className="ps-3">
                      <span className="text-sm opacity-8">steve@testasoftware.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Full Name</label>
                  <div className="input-group mb-4">
                    <input className="form-control" placeholder="Full Name" aria-label="Full Name" type="text" />
                  </div>
                </div>
                <div className="col-md-6 ps-md-2">
                  <label>Email</label>
                  <div className="input-group">
                    <input type="email" className="form-control" placeholder="Your Email Address" />
                  </div>
                </div>
              </div>
              <div className="form-group mb-4 mt-md-0 mt-4">
                <label>What can we help you?</label>
                <textarea name="message" className="form-control" id="message" rows={6} ></textarea>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <button type="submit" className="btn bg-gradient-primary mt-4">Send Message</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default ContactForm