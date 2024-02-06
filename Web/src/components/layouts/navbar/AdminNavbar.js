import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.css';

const AdminNavbar = ({ darkTheme }) => {
  return (
    <section className={`navbar-container ${ darkTheme ? 'background-dark relative' : 'background-transparent' } ` }>
      <div className="container flex justify-between align-center">
        <a href="/Admin" className="logo">Book<span className="text-primary">Raider</span> </a>

        <nav className="nav-links-container">
          <Link to="/BookList" className="nav-links"> ALL Books</Link>
          <Link to="/Addbooks" className="nav-links"> Add Books</Link>
          <Link to="/Updatebooks" className="nav-links"> Update Books</Link>
          <Link to="/Removebooks" className="nav-links">Remove Books</Link>
          <Link to="/" className="nav-links">Log Out</Link> 
        </nav>
      </div>
    </section>

  );
};

export default AdminNavbar;
