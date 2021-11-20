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
const Home = () => {
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
            width: "1200px",
          }}
        >
          <h4 className="font-link" style={{ fontSize: 77 }}>
            JConnect.
          </h4>
          <h1 className="font-link" style={{ fontSize: 24 }}>
            Welcome to Connect, we created this platform to reinforce
            communication inside our community. Replacing some forms of
            communication as spam or College office announcments and also making
            a place for you to announce,make plans, or also asking someone in
            your college for a charger late a night. Here you can join your
            College, Major,courses,clubs servers and start interracting through
            the Channel. Making communities well conneceted in bigger scales is
            a part of our view of tomorrow. Sign up or Log in to join your
            Major, College and floor channel automatically.
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
