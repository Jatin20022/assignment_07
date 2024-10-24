import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <div style={styles.buttons}>
        <Link to="search"><button style={styles.button}>Search</button></Link>
        <Link to="friend"><button style={styles.button}>Friend</button></Link>
        <Link to="request"><button style={styles.button}>Request</button></Link>
        <Link to="stranger"><button style={styles.button}>Stranger</button></Link>
      </div>

      <Routes>
        <Route path="search" element={<h2>Search Contact</h2>} />
        <Route path="friend" element={<h2>Friend Contact</h2>} />
        <Route path="request" element={<h2>Request Contact</h2>} />
        <Route path="stranger" element={<h2>Stranger Contact</h2>} />
      </Routes>
    </div>
  );
}

const styles = {
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#CD5C5C',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default Contact;
