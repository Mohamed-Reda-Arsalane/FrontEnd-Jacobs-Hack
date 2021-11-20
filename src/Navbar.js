import React, { useState } from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import logo from "./images1.png";
import keyboard from "./keyboard.jpg";
import "./App.css";

const Nav = styled.nav`
  background-color: #004380;
  height: 100px;
  width: 100%;
  display: flex;
  text-decoration: none;
  z-index: 10;
`;
const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.5rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #fff;
    text-decoration: none;
  }
  &:hover {
    color: #7595ae;
    text-decoration: none;
  }
`;
const Navbar = () => {
  return (
    <div>
      <Nav>
        <li style={{ marginTop: 5 }}>
          <a href="/">
            <img height="90" src={logo} alt="" onClick="/" />
          </a>
        </li>
        <NavLink
          style={{ marginTop: -10, fontSize: 100, marginRight: "950px" }}
          to="/"
        >
          <h1 className="font-link" style={{ fontSize: 25 }} onClick="/">
            JConnect.
          </h1>
        </NavLink>
        <NavLink style={{ marginTop: 0, fontSize: 25 }} to="/Login">
          <h4
            style={{
              fontSize: 25,
              marginTop: "14px",
              marginRight: "55px",
            }}
            onClick="/Login"
          >
            Login
          </h4>
        </NavLink>
        <NavLink style={{ marginTop: 0, fontSize: 25 }} to="/Register">
          <h4
            style={{
              fontSize: 25,
              marginTop: "14px",
              marginRight: "55px",
            }}
            onClick="/SignUp"
          >
            Sign up
          </h4>
        </NavLink>
      </Nav>
    </div>
  );
};
export default Navbar;
