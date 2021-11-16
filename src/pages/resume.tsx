import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import DefaultLayout from "../layouts/default"
import Seo from "../components/site/seo"

const Basics = ({resume}) => (
  <div className="row py-lg-7 py-5">
    <div className="col-lg-3 col-md-5 position-relative my-auto">
      <StaticImage 
        className="img border-radius-lg max-width-200 w-100 position-relative z-index-2" 
        src="../images/steve.jpg" 
        alt="steve" />
    </div>
    <div className="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-2 mt-sm-4 mt-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h4 className="mb-0">{resume.basics.name}</h4>
      </div>
      <div className="row mb-4">
        <div className="col-auto">{resume.basics.label}</div>
      </div>
      <div className="row">
        <div className="col-lg-6 text-lg mb-0">
          {resume.basics.location.city + ", " + resume.basics.location.region} <br />
          {resume.basics.email} <br />
          {resume.basics.website} <br />
          {resume.basics.phone} <br />
        </div>
        <div className="col-lg-6 text-lg mb-0">
          {resume.basics.profiles.map(profile => (
            <div className="row">
              <div className="col-1">
                <span className={"fab fa-" + profile.network + " text-lg mx-1"} aria-hidden="true"></span>
              </div>
              <div className="col">
                <Link to={profile.url}>{profile.username}</Link><br />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

const Experience = ({work}) => (
  <div className="row mb-4">
    <div className="col">
      <div className="text-secondary text-sm">{work.startDate} - {work.endDate == "" ? "Present" : work.endDate}</div>
      <div className="lead"><span className="text-gradient text-dark">{work.position} at</span> <a href={work.website}>{work.company}</a></div>
      <p className="mt-3">{work.summary}</p>
      <p>
        <ul>
          {work.highlights.map(highlight => (
            <li>{highlight}</li>
          ))}
        </ul>
      </p>
    </div>
  </div>
)

const Skill = ({skill}) => (
  <div className="row">
    <div className="col">
      <h4 className="lead text-gradient text-info">{skill.name}</h4>
      {skill.keywords.map(keyword => (
        <button type="button" className="btn btn-sm me-2 btn-outline-secondary">{keyword}</button>
      ))}
    </div>
  </div>
)

const Certification = ({cert}) => (
  <div className="row mb-4">
    <div className="col">
      <div className="text-secondary text-sm">{cert.startDate} - {cert.endDate == "" ? "present" : cert.endDate}</div>
      <div className="lead"><a href={cert.url}>{cert.name}</a></div>
      <div>{cert.authority}</div>
      <div>License: {cert.license}</div>
    </div>
  </div>
)

const Volunteer = ({volunteer}) => (
  <div className="row mb-4">
    <div className="col">
      <div className="text-secondary text-sm">{volunteer.startDate} - {volunteer.endDate == "" ? "present" : volunteer.endDate}</div>
      <div className="lead"><a href={volunteer.website}>{volunteer.organization}</a></div>
      <div>{volunteer.summary}</div>
      <div>
        <ul>
        {volunteer.highlights.map(highlight => (
          <li>{highlight}</li>
        ))}
        </ul>
      </div>
    </div>
  </div>
)

const ResumePage = ({ data }) => {
  const resume = data.dataJson
  return (
    <DefaultLayout>
      <Seo title="Resume" />
      <section className="py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <Basics resume={resume} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="row">
                <div className="col-md-8">
                  <h3 className="text-gradient text-primary">Experience</h3>
                  {resume.work.map(work => (
                    <Experience work={work} />
                  ))}
                </div>
                <div className="col-md-4">
                  <h3 className="text-gradient text-primary">Skills</h3>
                  {resume.skills.map(skill => (
                    <Skill skill={skill} />
                  ))}
                  <h3 className="text-gradient text-primary">Organizations</h3>
                  {resume.volunteer.map(volunteer => (
                    <Volunteer volunteer={volunteer} />
                  ))}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h3 className="text-gradient text-primary">Certifications</h3>
                  <div className="row">
                    <div className="col-md">
                    {resume.certifications.slice(0,5).map(cert => (
                      <Certification cert={cert} />
                    ))}
                    </div>
                    <div className="col-md">
                    {resume.certifications.slice(5,9).map(cert => (
                      <Certification cert={cert} />
                    ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}

export default ResumePage

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