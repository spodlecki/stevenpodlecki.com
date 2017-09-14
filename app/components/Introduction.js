import React from 'react';
import { Component } from 'react';

export class Introduction extends Component {
  render() {
    return (
      <div id="introduction">
        <div className="overlay"></div>
        <div className="container text-center">
          <div className="pic"></div>
          <h1>Steven Podlecki</h1>
          <p className="h4">Sr. Full Stack Rails Engineer</p>
          <div className="external-links">
            <a href={this.props.github_url} target="_blank" rel="noopener">
              <i className="fa fa-github"></i>
            </a>
            <a href={this.props.linkedin_url} target="_blank" rel="noopener">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href={this.props.email}>
              <i className="fa fa-envelope"></i>
            </a>
            <a href={this.props.resume_url} target="_blank" rel="noopener">
              <i className="fa fa-file-pdf-o"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
