import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../components/misc/ErrorNotice";

export default function Login() {
 
    return (
        <div className="page">
            <h1>Enter your login</h1>

            <form className="form">
                <label htmlFor="login-email"> Email  </label>
                <input
                    id="login-email"
                    type="email"
                    // onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="login-password"> Password  </label>
                <input
                    id="login-password"
                    type="password"
                    // onChange={(e) => setPassword(e.target.value)}
                />

                <input type="submit" value="Log in" />
            </form>
            <br></br>
        </div>
    );
}