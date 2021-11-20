import React, { useState } from "react";
import { Tabs, Tab, Table, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import PasswordChecklist from "react-password-checklist";
async function get1(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
async function post1(url, username1, password) {
  const json = JSON.stringify({
    Username: username1,
    Password: password,
    Wins: 0,
  });
  const res = await axios.post(url, json, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

const Register = () => {
  var CryptoJS = require("crypto-js");
  const [users, setUsers] = useState([]);
  async function reload() {
    let data = await get1("https://azertyha78.pythonanywhere.com/user");
    setUsers(data);
  }

  const [usernameregister, setUsernameregister] = useState("");
  function onChangeusername3(e) {
    setUsernameregister(e.target.value);
  }
  const [passwordregister, setPasswordregister] = useState("");
  function onChangeusername4(e) {
    setPasswordregister(e.target.value);
  }
  async function postit() {
    let data = await post1(
      "https://azertyha78.pythonanywhere.com/user",
      usernameregister,
      passwordregister
    );
  }
  async function onregister() {
    if (!(usernameregister === "" || passwordregister === "")) {
      var state = true;
      for (var i = 0; i < users.length; i++) {
        var obj = users[i];
        if (usernameregister === obj["Username"]) {
          state = false;
        }
      }
      if (state) {
        if (passwordregister.length >= 7) {
          if (passwordregister.length < 19) {
            if (hasNumber(passwordregister)) {
              postit();
              setUsernameregister("");
              setPasswordregister("");
            } else {
              alert("Password doesn't contain a number");
            }
          } else {
            alert("Password too long");
            setPasswordregister("");
          }
        } else {
          alert("Password too short");
          setPasswordregister("");
        }
      } else {
        alert("Username Already used");
        setUsernameregister("");
      }
    } else {
      alert("Enter the required fields");
    }
  }
  function hasNumber(myString) {
    return /\d/.test(myString);
  }

  async function set_to_online(user) {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        User_ID: user["User_ID"],
        Username: user["Username"],
        Password: user["Password"],
        Is_online: true,
      }),
    };
  }
  return (
    <div
      id="r"
      style={{ display: "flex", justifyContent: "center", textalign: "center" }}
    >
      <div>
        <br />
        <br />
        <br />
        <br />
        <div className="display_center">
          <form>
            <div
              className="p-5 rounded "
              style={{ backgroundColor: "rgba(32, 41, 69, 0.4)" }}
            >
              <h3
                className="m-3 d-flex justify-content-center"
                style={{ color: "white" }}
              >
                Register
              </h3>
              <h6 style={{ color: "white" }}>Username :</h6>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="usernameregister"
                value={usernameregister}
                required
                onChange={onChangeusername3}
              />
              <br />
              <h6 style={{ color: "white" }}>Password :</h6>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="passwordregister"
                value={passwordregister}
                required
                onChange={onChangeusername4}
              />
              <br />
              <PasswordChecklist
                rules={["minLength", "maxLength", "number"]}
                minLength={7}
                maxLength={18}
                value={passwordregister}
                onChange={(isValid) => {}}
              />
              <br />
              <button
                type="button"
                className="btn btn-primary "
                onClick={() => onregister()}
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <br />
        <br />
        <br />
      </div>
      <br />
    </div>
  );
};

export default Register;
