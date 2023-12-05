// Navbar.js
import React from 'react';

function Navigation() {
  return (
    < div className="container">
        
      <ul className="horizontal">
        <li style={{ marginRight: '500px', fontSize: 40, fontFamily: 'sans-serif', marginLeft: '0' }}>Decode</li>
        <li>For CTOs</li>
        <li>Projects</li>
        <li>Services</li>
        <li>How we work</li>
        <li>About us</li>
        <li>Team</li>
        <li>Careers</li>
        <li>|</li>
        <li>Let's talk &rarr;</li>
      </ul>
      <h1 className="we">We’re DECODE</h1>
      <h1 className="you">Your strategic partner in<br />creating exceptional software products.</h1>
      <h1 className='you'> Let's talk  &rarr;</h1>
      <h1 className='you'>Caring like we're in-house.</h1>
    </div>
  );
}

export default Navigation;
