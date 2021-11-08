import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const typeWriterStyle = {
  fontFamily: 'courier new',
  fontWeight: 'bold',
};

const luciaHeadlines = [
  'Music Lover',
  'Hiking Enthusiast 🧗‍♀️',
  'Newfound Pottery Lover',
  'Korean Food Junkie',
  'Aspiring Gym go-er 🏋️‍♀️',
];

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Lucia Kim</h2>
        <Typewriter
          options={{
            strings: luciaHeadlines,
            autoStart: true,
            loop: true,
          }}
          style={typeWriterStyle}
        />
      </header>
    </section>

    <section className="blurb">
      <ul className="actions">
        <li>
          <Link to="/contact" className="button">Contact Me</Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Lucia Kim <Link to="/">luciahkim.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
