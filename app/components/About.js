import React from 'react';
import { Component } from 'react';


function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

function tagCloud() {
  let tags = ['HTML5', 'CSS/3', 'SASS', 'Photoshop', 'SSH', 'RSync',
              'FFMPEG', 'ImageMagick', 'Bootstrap', 'Google Analytics',
              'JWPlayer', 'jQuery', 'VideoJS', 'HLS Streaming', 'CDN Hosting',
              'ECMAScript6', 'JavaScript', 'Rails', 'Ruby', 'ElasticSearch',
              'Bash', 'HTML5 Video', 'Behavior Analytics', 'A/B Testing',
              'MySQL', 'RSpec', 'BDD', 'TDD', 'Jasmine', 'Karma', 'Webpack',
              'React', 'Bluepill', 'Puppet', 'Redis', 'Apache', 'Unicorn',
              'Homebrew', 'Yarn', 'NPM', 'Grunt', 'Guard', 'Scrum Master',
              'Agile', 'Sprints', 'JIRA', 'Spec Writing'];

  return shuffle(tags).map((tag, key) => <span key={key.toString()} className="tag">{tag}</span>);
}

function simpleFormat(text) {
  let paragraphs = text.split("\n\n");
  return paragraphs.map((string, index) => <p key={index.toString()}>{string.trim()}</p>);
}

export class About extends Component {
  render() {
    let scrumWiki = 'https://en.wikipedia.org/wiki/Scrum_(software_development)';

    let who = `My passion for writing code started when I was 14 years old.
               I started writing code in mIRC Scripting, qBasic, and a little Visual Basic.
               Anything I wrote, it was to simply make my life a little easier.
               If I found a task at work to be repetitive, I'd write a script to do
               it for me.

               Soon I realized, I love writing code! After a little bit of research,
               I felt Web Development was where I wanted my career path to land.

               Aside from being a code ninja, I enjoy the outdoors. If I am not coding,
               I'll be either gaming on consoles, hunting, fishing, playing with the kids,
               or binge watching a TV Show.`;

    let what = `My primary focus is normally Front-end work (JS, CSS, HTML5),
                but I am well versed in the entire stack. On a day to day basis
                I am using Mac and a standard Rails stack to do my Wizardry. More often than not,
                I am working on JavaScript modules and reusable tools for company properties.
                Recently, we have had an opportunity to start migrating our existing JS Tools to ES6.

                Aside from being one of the Lead Rails Engineers on the team,
                I am also the Scrum Master in our Agile team. As a SM, I am responsible
                for helping the team simply get better and help identify areas of
                improvement.`

    let how = `Working in 2 week cycles (Sprints), we follow Scrum as best
               as we can by hosting Daily Stand Ups, Backlog grooming sessions,
               Sprint Reviews, and most importantly -- Sprint Retrospectives.`

    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="cloud">{tagCloud()}</div>
              <div className="external-links">
                <a href={this.props.github_url} target="_blank">
                  <i className="fa fa-github"></i>
                </a>
                <a href={this.props.linkedin_url} target="_blank">
                  <i className="fa fa-linkedin-square"></i>
                </a>
                <a href={this.props.email}>
                  <i className="fa fa-envelope"></i>
                </a>
                <a href={this.props.resume_url} target="_blank">
                  <i className="fa fa-file-pdf-o"></i>
                </a>
              </div>
            </div>
            <div className="col-md-9 details">
              <p className="h2">Who I am.</p>
              {simpleFormat(who)}
              <p className="h2">What I do.</p>
              {simpleFormat(what)}
              <p className="h2">How I work.</p>
              {simpleFormat(how)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
