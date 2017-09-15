import React from 'react';
import { Component } from 'react';

export class Location extends Component {
  render() {
    let api = 'AIzaSyCq2Sz-UYWGmPKH6K6xq-0QVISDtK7q3kE';
    let query = `https://www.google.com/maps/embed/v1/search?key=${api}&q=Portage, IN&zoom=8`

    return (
      <div id="location">
        <div>
          <iframe
            title="Location"
            width="100%"
            height="550"
            frameBorder="0"
            style={{border:0}}
            src={query}
            allowFullScreen="true">
          </iframe>
        </div>
      </div>
    );
  }
}
