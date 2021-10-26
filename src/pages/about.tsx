import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import DefaultLayout from "../layouts/default"
import Header from "../components/content/header"
import Seo from "../components/site/seo"
import ContactCard from "../components/content/card-contact"
import SkillCard from "../components/content/card-skill"

const AboutPage = ({ data }) => {
  const resume = data.dataJson
  return (
    <DefaultLayout>
      <Seo title="About" />
      <Header background="/assets/images/aboutme/aboutme.jpg" minheight="50" textalign="">
        <div className="container text-light">
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
                    <h4 className="mb-0 text-light">Steve Testa</h4>
                  </div>
                  <div className="row mb-4">
                    <div className="col-auto">
                      Full-Stack Software Developer
                    </div>
                  </div>
                  <p className="text-md mb-0">
                    I am a developer, consultant, entrepreneur and self described foosball champion.
                    I like to blog occasionally about technology, code, trends and the community.
                    (obligatory: <strong>all opinions are my own</strong>)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Header>
      <section className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-6 mx-lg-0 mx-auto px-lg-0 px-md-0 my-auto">
              <img className="w-100 border-radius-lg shadow" src="/assets/images/aboutme/steve-med.jpg" />
            </div>
            <div className="col-lg-4 col-10 d-flex justify-content-center flex-column mx-auto text-lg-start text-center">
              <h2 className="mb-0 mt-lg-0 mt-4 text-gradient text-info">Professional</h2>
              <h2 className="mb-4"></h2>
              <p className="lead">My career started at Sky Internet Solutions, a small consulting firm. Custom websites were the name of the game over there. After which, I worked for about 5 years at medical software company called Micro-Office Systems. While there I worked on everything from medical systems integrations to custom back office healthcare solutions. My current day job is as an Application Developer for Hyland Software here in Cleveland, Ohio. At Hyland, I work mainly in the social enterprise space with a heavy focus on web development using the Microsoft stack. I’ve been with Hyland for around 11 years now. On top of it all, I have maintained Testa Software, my own consulting firm, on the side. Feel free to contact me if you want to work together!</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center pb-4">
              <h2>Full Stack Development</h2>
              <p className="lead">For more details please see my resume</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="p-3 text-center">
                <div className="icon icon-shape bg-gradient-primary shadow mx-auto">
                  <i className="ni ni-single-02"></i>
                </div>
                <h5 className="mt-4">Web Development</h5>
                <p>More than 15 years experience developing enterprise applications and websites in multiple frameworks and languages</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-3 text-center">
                <div className="icon icon-shape bg-gradient-info shadow mx-auto">
                  <i className="ni ni-email-83"></i>
                </div>
                <h5 className="mt-4">Machine Learning</h5>
                <p>Building and training models, Real world integration of modern machine learning techniques</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mx-md-auto">
              <div className="p-3 text-center">
                <div className="icon icon-shape bg-gradient-warning shadow mx-auto">
                  <i className="ni ni-atom"></i>
                </div>
                <h5 className="mt-4">Programming Languages</h5>
                <p>Polyglot programmer with expertise in multiple programming languages including: C#, Haskell, Python, Javascript, F# and others</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="p-3 text-center">
                <div className="icon icon-shape bg-gradient-primary shadow mx-auto">
                  <i className="ni ni-single-02"></i>
                </div>
                <h5 className="mt-4">Databases</h5>
                <p>Experience developing database architectures and writing performant queries in multiple databases (SqlServer, Postgres, MongoDB)</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-3 text-center">
                <div className="icon icon-shape bg-gradient-info shadow mx-auto">
                  <i className="ni ni-email-83"></i>
                </div>
                <h5 className="mt-4">Mobile</h5>
                <p>Cross-platform mobile development using Xamarin and .NET Maui deployable to Android and iOS</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mx-md-auto">
              <div className="p-3 text-center">
                <div className="icon icon-shape bg-gradient-warning shadow mx-auto">
                  <i className="ni ni-atom"></i>
                </div>
                <h5 className="mt-4">And More...</h5>
                <p>VR development in Unity 3D, Windows and Linux desktop applications, etc. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-10 d-flex justify-content-center flex-column mx-auto text-lg-start text-center">
              <h2 className="mb-0 mt-lg-0 mt-4 text-gradient text-primary">Personal</h2>
              <h2 className="mb-4"></h2>
              <p className="lead">Most of my life revolves around my beautiful family. I have an amazing wife and two incredible daughters. They are my everything. Don't be fooled when I'm complaining about towing a trailer with two toddlers behind me on a family bike ride. I wouldn't trade it for the world. When I do get a moment to myself (not something that happens often), I still end up coding as my main hobby. I'm always interested in learning something new. I've also started to enjoy learning exactly how bad at I am at chess. Hit me up if you want to play a game. 🙂</p>
            </div>
            <div className="col-lg-5 col-6 mx-lg-0 mx-auto px-lg-0 px-md-0 my-auto">
              <img className="w-100 border-radius-lg shadow" src="/assets/images/steve/family1.jpg" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-7 bg-white position-relative">
        <div className="page-header min-vh-50 m-3 border-radius-xl" style={{backgroundImage: "url(/assets/img/curved-images/curved8.jpg)"}}>
          <span className="mask bg-gradient-dark opacity-4"></span>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center mx-auto">
                <h1 className="text-white mt-4 mb-1">Connect With Me</h1>
                <p className="lead text-white mb-6">I am always excited about the latest technologies and am passionate about code. I am always happy to discuss both. On the social web I tend to hang out on <a href="https://twitter.com/steven_testa">twitter</a>. If you are in the Cleveland area you can catch me in person. I am a regular at some of Cleveland’s development related user groups: <a href="http://www.meetup.com/Cleveland-C-VB-Net-User-Group/">C# Sig</a> or the group I started <a href="http://www.meetup.com/cledevcraft">Cleveland Dev Craft</a>.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-n7 blur border-radius-lg shadow-blur">
            <div className="col-lg-4 col-md-6 col-6 position-relative my-auto">
              <div className="p-3 text-center">
                <div className="icon icon-shape bg-gradient-primary shadow text-center rounded-circle">
                  <svg className="mt-3" width="15px" height="15px" viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <title>document</title>
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-1870.000000, -591.000000)" fill="#FFFFFF" fill-rule="nonzero">
                              <g transform="translate(1716.000000, 291.000000)">
                                  <g transform="translate(154.000000, 300.000000)">
                                      <path d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z" opacity="0.603585379"></path>
                                      <path d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"></path>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </svg>
                </div>
                <h5 className="mt-3 mb-1">Email</h5>
                <p className="mb-0">steve@testasoftware.com</p>
              </div>
              <hr className="vertical dark" />
            </div>
            <div className="col-lg-4 col-md-6 col-6 position-relative my-auto">
              <div className="p-3 text-center">
                <div className="icon icon-shape bg-gradient-primary shadow text-center rounded-circle">
                  <svg className="mt-3" width="15px" height="15px" viewBox="0 0 44 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <title>megaphone</title>
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-2168.000000, -591.000000)" fill="#FFFFFF" fill-rule="nonzero">
                              <g transform="translate(1716.000000, 291.000000)">
                                  <g id="megaphone" transform="translate(452.000000, 300.000000)">
                                    <path d="M35.7958333,0.273166667 C35.2558424,-0.0603712374 34.5817509,-0.0908856664 34.0138333,0.1925 L19.734,7.33333333 L9.16666667,7.33333333 C4.10405646,7.33333333 0,11.4373898 0,16.5 C0,21.5626102 4.10405646,25.6666667 9.16666667,25.6666667 L19.734,25.6666667 L34.0138333,32.8166667 C34.5837412,33.1014624 35.2606401,33.0699651 35.8016385,32.7334768 C36.3426368,32.3969885 36.6701539,31.8037627 36.6666942,31.1666667 L36.6666942,1.83333333 C36.6666942,1.19744715 36.3370375,0.607006911 35.7958333,0.273166667 Z"></path>
                                    <path d="M38.5,11 L38.5,22 C41.5375661,22 44,19.5375661 44,16.5 C44,13.4624339 41.5375661,11 38.5,11 Z" opacity="0.601050967"></path>
                                    <path d="M18.5936667,29.3333333 L10.6571667,29.3333333 L14.9361667,39.864 C15.7423448,41.6604248 17.8234451,42.4993948 19.6501416,41.764381 C21.4768381,41.0293672 22.3968823,38.982817 21.7341667,37.1286667 L18.5936667,29.3333333 Z" opacity="0.601050967"></path>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </svg>
                </div>
                <h5 className="mt-3 mb-1">Phone</h5>0
                <p className="mb-0">+1(440) 305-0073</p>
              </div>
              <hr className="vertical dark" />
            </div>
            <div className="col-lg-4 col-md-6 col-6 position-relative my-auto">
              <div className="p-3 text-center">
                <div className="icon icon-shape bg-gradient-primary shadow text-center rounded-circle">
                  <svg className="mt-3" width="15px" height="15px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <title>ungroup</title>
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-2170.000000, -442.000000)" fill="#FFFFFF" fill-rule="nonzero">
                              <g transform="translate(1716.000000, 291.000000)">
                                  <g id="ungroup" transform="translate(454.000000, 151.000000)">
                                      <path d="M38.1818182,10.9090909 L32.7272727,10.9090909 L32.7272727,30.9090909 C32.7272727,31.9127273 31.9127273,32.7272727 30.9090909,32.7272727 L10.9090909,32.7272727 L10.9090909,38.1818182 C10.9090909,39.1854545 11.7236364,40 12.7272727,40 L38.1818182,40 C39.1854545,40 40,39.1854545 40,38.1818182 L40,12.7272727 C40,11.7236364 39.1854545,10.9090909 38.1818182,10.9090909 Z" opacity="0.6"></path>
                                      <path d="M27.2727273,29.0909091 L1.81818182,29.0909091 C0.812727273,29.0909091 0,28.2781818 0,27.2727273 L0,1.81818182 C0,0.814545455 0.812727273,0 1.81818182,0 L27.2727273,0 C28.2781818,0 29.0909091,0.814545455 29.0909091,1.81818182 L29.0909091,27.2727273 C29.0909091,28.2781818 28.2781818,29.0909091 27.2727273,29.0909091 Z"></path>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </svg>
                </div>
                <h5 className="mt-3 mb-1">Social</h5>
                <p className="mb-0">
                  <span className="col-lg-3 text-lg-end">
                    <a href="https://github.com/stesta" className="text-secondary me-xl-4 me-4">
                      <span className="fab fa-github text-lg"></span>
                    </a>
                    <a href="https://twitter.com/steven_testa" className="text-secondary me-xl-4 me-4">
                      <span className="fab fa-twitter text-lg"></span>
                    </a>
                    <a href="https://www.linkedin.com/in/stevendtesta/" className="text-secondary me-xl-4 me-4">
                      <span className="fab fa-linkedin text-lg"></span>
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    dataJson(basics: {name: {eq: "Steve Testa"}}) {
      basics {
        location {
          city
          countryCode
          region
        }
        email
        label
        name
        phone
        picture
        profiles {
          network
          url
          username
        }
        website
      }
      certifications {
        authority
        endDate
        license
        name
        startDate
        url
      }
      skills {
        keywords
        level
        name
      }
      volunteer {
        endDate
        highlights
        organization
        position
        startDate
        summary
        website
      }
      work {
        company
        endDate
        highlights
        position
        startDate
        summary
        website
      }
    }
  }
`