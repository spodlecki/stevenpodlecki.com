import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';

// Parts
import { Introduction } from './components/Introduction'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Location } from './components/Location'
import { Footer } from './components/Footer'

let Social = {
  github_url: 'https://github.com/spodlecki',
  linkedin_url: 'https://www.linkedin.com/in/spodlecki',
  email: 'mailto:s.podlecki@gmail.com',
  resume_url: '/public/StevenPaulPodlecki.pdf'
}

ReactDOM.render(
  <div>
    <Introduction {...Social} />
    <About {...Social} />
    <Skills />
    <Location />
    <Footer />
  </div>,
  document.getElementById('spodlecki')
);
