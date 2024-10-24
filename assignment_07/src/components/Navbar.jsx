import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li><Link to="/home" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: 'red',
    padding: '10px',
    textAlign: 'center'
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-around'
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px'
  }
};

export default Navbar;
