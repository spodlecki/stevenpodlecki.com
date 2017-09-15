import React from 'react';
import { Component } from 'react';

const ExternalLink = (params) => {
  return <a href={params.url} target="_blank">{params.label}</a>;
}

export class Footer extends Component {
  render() {
    let links = () => {
      return (
        <span>
          <ExternalLink url="https://github.com/spodlecki/stevenpodlecki.com" label="This source" />,&nbsp;
          <ExternalLink url="https://www.heroku.com/pricing" label="Free Heroku Dyno" />,&nbsp;
          <ExternalLink url="https://facebook.github.io/react/" label="React" />,&nbsp;
          <ExternalLink url="https://nodejs.org/en/" label="NodeJS" />,&nbsp;
          <ExternalLink url="https://yarnpkg.com/en/" label="Yarn" />
        </span>
      );
    }

    return (
      <footer className="text-muted text-center">
        &copy; 2017 Steven Podlecki. Est. 1986. | {links()}
      </footer>
    );
  }
}
