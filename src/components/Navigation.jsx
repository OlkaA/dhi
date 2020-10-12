import React from "react";
import { Link } from "react-router-dom";
import '../styles/nav.css';

const Navigation = () => {
  return (
    <nav className='flex'>
      <ul className='menu flex'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
