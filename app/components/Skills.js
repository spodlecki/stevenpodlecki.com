import React from 'react';
import { Component } from 'react';

const Skill = (params) => {
  const bar = (level) => {
    level = parseInt(level)
    if (level >= 97) {
      return 'primary'
    } else if (level >= 90) {
      return 'success'
    } else if (level >= 85) {
      return 'info'
    } else if (level >= 50) {
      return 'warning'
    } else {
      return 'danger'
    }
  }

  const barCssNames = `progress-bar progress-bar-${bar(params.level)} progress-bar-striped`

  return (
    <div className="skill">
      <p className="h4 title clearfix">
        {params.name}
      </p>
      <div className="progress">
        <div className={barCssNames}
             role="progressbar"
             aria-valuenow={params.level}
             aria-valuemin="0"
             aria-valuemax="100"
             style={{width: params.level + '%'}}>
          <span className="sr-only">{params.level}% Complete</span>
        </div>
      </div>
    </div>
  )
}

export class Skills extends Component {
  render() {
    return (
      <div id="skills">
        <div className="container">
          <p className="h1">Skills</p>

          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <p className="h3">
                JavaScript
                <small>... overall status: ninja</small>
              </p>
              <div className="subset">
                <Skill name="CoffeeScript" level="99" />
                <Skill name="Webpack" level="90" />
                <Skill name="jQuery" level="95" />
                <Skill name="Native JS" level="85" />
                <Skill name="Underscore" level="95" />
                <Skill name="React" level="95" />
                <Skill name="Backbone" level="100" />
                <Skill name="ES6" level="90" />
              </div>

              <p className="h3">
                HTML
                <small>... overall status: ninja</small>
              </p>
              <div className="subset">
                <Skill name="CSS" level="97" />
                <Skill name="SCSS / SASS" level="95" />
                <Skill name="HAML / ERB" level="99" />
                <Skill name="Responsive Design" level="98" />
                <Skill name="Progressive Enhancement" level="98" />
                <Skill name="Animations" level="90" />
                <Skill name="Video" level="95" />
                <Skill name="Canvas" level="15" />
              </div>
            </div>

            <div className="col-sm-6 col-xs-12">
              <p className="h3">
                Ruby on Rails
                <small>... overall status: proficient</small>
              </p>
              <div className="subset">
                <Skill name="Rails" level="98" />
                <Skill name="Rails' Asset Pipeline" level="99" />
                <Skill name="Rails Engine / Gem Creation" level="90" />
                <Skill name="Restful API" level="91" />
                <Skill name="RSpec / Test Coverage" level="94" />
                <Skill name="Async Processing / Redis" level="97" />
                <Skill name="Database Layer / AREL / MySQL" level="93" />
                <Skill name="Ruby / PORO" level="85" />
              </div>

              <p className="h3">
                Misc Layers
                <small>... quick to learn</small>
              </p>
              <div className="subset">
                <Skill name="Adobe Photoshop" level="98" />
                <Skill name="Web Server Layer" level="82" />
                <Skill name="MySQL Database" level="88" />
                <Skill name="Certified SCRUM Master" level="95" />
                <Skill name="Data Analytics" level="98" />
                <Skill name="Split Testing" level="95" />
                <Skill name="ElasticSearch" level="92" />
                <Skill name="CLI" level="85" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
