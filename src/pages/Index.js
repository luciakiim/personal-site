import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Lucia Kim first website iteration"
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            Welcome&nbsp;👋🏽
          </h2>
        </div>
      </header>
      <p>
        Hi, it&apos;s Lucia!
      </p>
      <p>
        I&apos;m a UPenn alumna working as a Business Development analyst at <a href="https://www.aqr.com/">AQR Capital Management</a>.
        I have interned at <a href="https://www.aqr.com/">AQR</a> (Business Development),&nbsp;
        <a href="https://www.macquarie.com/us/en.html">Macquarie Investment Management</a>&nbsp;
        (Client Group), &nbsp;<a href="https://www.vrblabs.com/">VRB Labs</a>&nbsp;
        (Marketing and Business Development), and the <a href="https://www.thevelozgroup.com/">Veloz Group</a>&nbsp;
        (SEO Writing). This is just the start of my professional career, and I&apos;m
        excited to broaden my horizons and make high level client impact across a variety
        of spaces.
      </p>
      <p>
        In my free time, I love to stay busy trying new things— whether that&apos;s checking out a
        new restaurant, finding a hidden hiking trail, or taking random classes (painting, salsa,
        and pottery so far 💃). Since I was a little girl, I&apos;ve enjoyed journaling and
        playing the piano, and these are my main creative outlets today.
      </p>
      <p>
        I&apos;m always looking for food/book/article/song/shop/activity (really anything)
        suggestions, so let me know what you&apos;ve been up to recently!
        Feel free to <Link to="/contact">contact</Link> me if you have any questions or
        just want to say hello!
      </p>
    </article>
  </Main>
);

export default Index;
