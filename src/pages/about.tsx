import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import DefaultLayout from "../layouts/default"
import Seo from "../components/site/seo"
import SocialButtons from "../components/site/social-buttons"

const AboutPage = () => (
  <DefaultLayout>
    <Seo title="About" />
    <section className="py-sm-7 py-5 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="row py-lg-7 py-5">
              <div className="col-lg-3 col-md-5 position-relative my-auto">
                <StaticImage 
                  className="img border-radius-lg max-width-200 w-100 position-relative z-index-2" 
                  src="../images/steve.jpg" 
                  alt="steve" />
              </div>
              <div className="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mt-sm-0 mt-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h4 className="mb-0">Steve Testa</h4>
                  <div className="d-block">
                    <SocialButtons />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-auto">
                  </div>
                </div>
                <p className="text-lg mb-0">
                  I am a developer, consultant, entrepreneur and self described foosball champion. 
                  I like to blog occasionally about technology, code, trends and the community. <br /> 
                  (obligatory: <strong>all opinions are my own</strong>)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="mb-10">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 order-2 order-md-2 order-lg-1">
            <div className="position-relative ms-md-5 mb-0 mb-md-7 mb-lg-0 d-none d-md-block d-lg-block d-xl-block h-75">
              <div className="bg-gradient-info w-100 h-100 border-radius-xl position-absolute"></div>
              <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-city.jpg" className="w-100 border-radius-xl mt-6 ms-5 position-absolute" alt="" />
            </div>
          </div>
          <div className="col-lg-5 col-md-12 ms-auto order-1 order-md-1 order-lg-1">
            <div className="p-3 pt-0">
              <div className="icon icon-shape bg-gradient-info rounded-circle shadow text-center mb-4">
                <i className="ni ni-building"></i>
              </div>
              <h4 className="text-gradient text-info mb-0">My Background</h4>
              <h4 className="mb-4"></h4>
              <p>My career started at Sky Internet Solutions, a small consulting firm. Custom websites were the name of the game over there. After which, I worked for about 5 years at medical software company called Micro-Office Systems. While there I worked on everything from medical systems integrations to custom back office healthcare solutions. My current day job is as an Application Developer for Hyland Software here in Cleveland, Ohio. At Hyland, I work mainly in the social enterprise space with a heavy focus on web development using the Microsoft stack. I’ve been with Hyland for around 11 years now. On top of it all, I have maintained Testa Software, my own consulting firm, on the side.</p>
            </div>
          </div>
        </div>
        <div className="row mt-0 mt-md-5 mt-lg-8">
          <div className="col-lg-5 col-md-12 me-auto">
            <div className="p-3 pt-0">
              <div className="icon icon-shape bg-gradient-warning rounded-circle shadow text-center mb-4">
                <i className="fas fa-trophy"></i>
              </div>
              <h4 className="text-gradient text-warning mb-0">Connect With Me</h4>
              <h4 className="mb-4"></h4>
              <p>I am always excited about the latest technologies and am passionate about code. I am always happy to discuss both. On the social web I tend to hang out on twitter. If you are in the Cleveland area you can catch me in person. I am a regular at some of Cleveland’s development related user groups: C# Sig or the group I started Cleveland Dev Craft.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-8">
            <div className="position-relative ms-md-5 d-none d-md-block d-lg-block d-xl-block h-75">
              <div className="w-100 h-100 bg-gradient-warning border-radius-xl position-absolute"></div>
              <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/arena.jpg" className="w-100 border-radius-xl mt-6 ms-n5 position-absolute" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
)

export default AboutPage
