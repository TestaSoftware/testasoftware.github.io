import * as React from "react"

import DefaultLayout from "../layouts/default"
import Seo from "../components/site/seo"
import ContactForm from "../components/content/card-contact"

const ServicesPage = () => (
  <DefaultLayout>
    <Seo title="Services" />
    <header>
      <div className="page-header min-vh-75" style={{ backgroundImage: "url(https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/airport.jpg)" }}>
        <span className="mask bg-gradient-dark"></span>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-white text-center">
              <h2 className="text-white">Services</h2>
              <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur optio voluptatem quaerat ut vitae velit quasi natus corrupti illum amet harum quia et explicabo quis, omnis, perferendis maxime in facilis?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative overflow-hidden" style={{ height: "36px;margin-top:-35px;" }}>
        <div className="w-full absolute bottom-0 start-0 end-0" style={{ transform: "scale(2)", transformOrigin: "top center;color: #fff;" }}>
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
      <div className="container">
        <div className="row bg-white shadow-lg mt-n6 border-radius-md pb-4 p-3 mx-sm-0 mx-1 position-relative">
          <div className="col">
            <ContactForm />
          </div>
        </div>
        <div className="row">
          <ul>
            <li>Web Development - Frontend, Backend, Database, AWS, Azure, SEO, Security and Penetration Testing</li>
            <li>Mobile Development - Cross-Platform (iOS, Android), Xamarin and .NET Maui</li>
            <li>Custom Applications - Desktop, Cross-Platform (Windows, Linux) </li>
            <li>Machine Learning - Deep Learning, Tabular, Vision Systems, </li>
          </ul>
        </div>
        <div className="row">
          
        </div>
      </div>
    </header>
  </DefaultLayout>
)

export default ServicesPage
