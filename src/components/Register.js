import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../store/context"


const Register = () => {
    const { store, actions } = useContext(Context);
    return (
        <div>
            <div className="container text-center col-3 mt-5">
                <div className="input-group m-3">
                    <span className="input-group-text bg-dark text-light" id="basic-addon1">Name</span>
                    <input
                        type="text"
                        name="name"
                        className="form-control bg-dark text-light"
                        placeholder="Name"
                        aria-label="Name"
                        aria-describedby="basic-addon1"
                        onChange={actions.handleChange}
                        value={store.user.name}
                    />
                </div>
                <div className="input-group m-3">
                    <span className="input-group-text bg-dark text-light" id="basic-addon2">Lastname</span>
                    <input
                        type="text"
                        name="lastname"
                        className="form-control bg-dark text-light"
                        placeholder="Lastname"
                        aria-label="Lastname"
                        aria-describedby="basic-addon2"
                        onChange={actions.handleChange}
                        value={store.user.lastname}
                    />
                </div>
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
                <div className="input-group m-3">
                    <span className="input-group-text bg-dark text-light" id="basic-addon4">E-mail</span>
                    <input
                        type="text"
                        name="email"
                        className="form-control bg-dark text-light"
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon4"
                        onChange={actions.handleChange}
                        value={store.user.email}
                    />
                </div>
                <div className=" input-group m-3">
                    <label htmlFor="Password" className="input-group-text bg-dark text-light">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control bg-dark text-light"
                        id="Password"
                        onChange={actions.handleChange}
                        value={store.user.password}
                    />
                </div>
                <div className="input-group m-3">
                    <label className="input-group-text" for="inputGroupFile01">Subir Foto</label>
                    <input type="file" className="form-control" id="inputGroupFile01" />
                </div>

                <button type="submit" className="btn btn-secondary" onClick={() => actions.handleUserRegister()}>
                    SUBMIT
                </button>
            </div>
        </div>
    )
}

export default Register;