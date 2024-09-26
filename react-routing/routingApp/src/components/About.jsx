import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>About</div>
      <Link to="/about/abouts"> Go to child contact</Link>
      <Outlet />
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "Green" : "#61dafb",
          textDecoration: "none",
          fontSize: "18px",
        })}
        to="/"
      >
        Home
      </NavLink>
    </>
  );
};

export default About;
