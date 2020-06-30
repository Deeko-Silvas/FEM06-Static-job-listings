import React, {Component} from 'react'

export default class Card extends Component {
  constructor () {
    super ()
    this.state = {
      name: "Phil"
    }
    this.loopListings.bind(this)
  }

  loopSkills (skills) {
    return skills.map((skill, index) => {
      return (
        <div key={index} data-filter-add="roleArr" onClick={this.props.addFilter}>{skill}</div>
      )
    })
  }
  
  loopListings () {
    var {filteredJobs} = this.props

    return filteredJobs.map((job, index) => {
      return (
        <div className="card" key={index}>
          <div className={job.featured ? "featured card-container" : "card-container"}>
            <div className="left-border"></div>
            <div className="left-container">
              <img className="logo" src={job.logo} alt="company logo" />
              <div className="details-container">
                <div className="job-heading">
                  <h3>{job.company}</h3>
                  {job.new ? <div className="new">NEW!</div> : null}
                  {job.featured ? <div className="featured">FEATURED</div> : null}
                </div>
                <h2>{job.position}</h2>
                <div className="job-details">
                  <div>{job.postedAt}</div>
                  <div className="contract">{job.contract}</div>
                  <div>{job.location}</div>
                </div>
              </div>
            </div>
            <div className="job-skills flex-row">
              <div data-filter-add="roleArr" onClick={this.props.addFilter}>{job.role}</div>
              <div data-filter-add="levelArr" onClick={this.props.addFilter}>{job.level}</div>
              {this.loopSkills(job.languages)}
              {this.loopSkills(job.tools)}
            </div>
          </div>
      </div>
      )
    })
  }

  render () {
    return (
      this.loopListings()
    );
  };
};