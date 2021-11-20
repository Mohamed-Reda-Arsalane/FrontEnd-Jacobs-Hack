import React, { useState } from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import logo from "./images.png";
import keyboard from "./keyboard.jpg";

const Nav = styled.nav`
  background-color: #004380;
  height: 130px;
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
const Home = () => {
  return (
    <div>
      <Nav>
        <li style={{ marginTop: 17 }}>
          <a href="/">
            <img height="70" src={logo} alt="" onClick="/" />
            <img height="70" src={keyboard} alt="" onClick="/" />
          </a>
        </li>
        <NavLink
          style={{ marginTop: -10, fontSize: 100, marginRight: "1070px" }}
          to="/"
        >
          <h1 style={{ fontSize: 30 }} onClick="/">
            Jacobs Chat
          </h1>
        </NavLink>
        <NavLink style={{ marginTop: 0, fontSize: 30 }} to="/Imprint">
          <h4
            style={{
              fontSize: 30,
              marginTop: "14px",
              marginRight: "55px",
            }}
            onClick="/Login"
          >
            Login
          </h4>
        </NavLink>
        <NavLink style={{ marginTop: 0, fontSize: 30 }} to="/Maintenance">
          <h4
            style={{
              fontSize: 30,
              marginTop: "14px",
              marginRight: "55px",
            }}
            onClick="/SignUp"
          >
            Sign up
          </h4>
        </NavLink>
      </Nav>
      <br />
      <br />
      <br />
      <br />
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="p-5 rounded"
          style={{
            backgroundColor: "rgba(32, 41, 69, 0.4)",
            width: "1200px",
          }}
        >
          <h1 style={{ fontSize: 24 }}>
            Welcome to ***, we created this platform to reinforce communicationn
            inside our community. Replacing some forms of communication as spam
            or College office announcments and also making a place for you to
            announce,make plans, or also asking someone in your college for a
            charger late a night. Here you can join your College,
            Major,courses,clubs servers and start interracting through the
            Channel. Making communities well conneceted in bigger scales is a
            part of our view of tomorrow. Sign up or Log in to join your Major,
            College and floor channel automatically.
          </h1>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
export default Home;
