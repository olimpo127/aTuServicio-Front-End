import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../store/context"


const Login = () => {
    const { store, actions } = useContext(Context);
    return (
        <div>
            <div className="container text-center col-3 mt-5">
                <div className="input-group m-3">
                    <span className="input-group-text bg-dark text-light" id="basic-addon3">Username</span>
                    <input
                        type="text"
                        name="username"
                        className="form-control bg-dark text-light"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon3"
                        onChange={actions.handleChange}
                        value={store.user.username}
                    />
                </div>
                <div className=" input-group m-3">
                    <label htmlFor="Password" className="input-group-text bg-dark text-light">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control bg-dark text-light"
                        id="Password_login"
                        onChange={actions.handleChange}
                        value={store.user.password}
                    />
                </div>
                <button type="submit" className="btn btn-secondary" onClick={() => actions.handleUserLogin()}>
                    SUBMIT
                </button>
            </div>
        </div>
    )
}

export default Login;