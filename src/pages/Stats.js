import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

import PhotoGrid from '../components/About/PhotoGrid';

const Stats = () => (
  <Main
    title="Random thing about me"
    description="Some statistics about Lucia"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/about">Things that caught my eye</Link></h2>
        </div>
      </header>
      <PhotoGrid />
      <h6 data-testid="heading"><Link to="/about">*~*</Link></h6>
    </article>
  </Main>
);

export default Stats;
