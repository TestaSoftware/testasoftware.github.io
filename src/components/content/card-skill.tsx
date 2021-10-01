import * as React from "react"

const SkillCard = ({ category, skills, image }) => (
  <div className="container">
    <div className="row justify-space-between py-2">
      <div className="col mx-auto">
        <div className="card">
          <img className="card-img-top" src={image} />
          <div className="position-relative overflow-hidden" style={{height:"50px;margin-top:-50px;"}}>
            <div className="position-absolute w-100 top-0 z-index-1">
            </div>
          </div>
          <div className="card-body">
            <h4>{category}</h4>
            <p>
              {skills.map(skill => (
                <button type="button" className="btn btn-sm me-2 btn-outline-secondary">{skill}</button>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SkillCard