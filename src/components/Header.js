import React from "react";

import { Link } from "react-router-dom";
import Photo from "./pwc.jpeg";

const Header = () => {
  return (
    <header>
      <div>
        <img src={Photo} alt="" width="40" height="40" />
      </div>
      <div>
        <h3>PwC Career Website</h3>
      </div>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/contactUs">Contact Us</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/Studentform">Student form</Link>
        <Link to="/aboutUs">About Us</Link>
        <Link to="/Studentdata">Students Data</Link>
        <Link to="/Posts">Posts</Link>
        <Link to="/Todos">Todos</Link>
        <Link to="/Users">Users</Link>
        <Link to="/Loginpage">Loginpage</Link>
        <Link to="/Singleblogpost">Singleblogpost</Link>
      </div>
    </header>
  );
};

export default Header;
