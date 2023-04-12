import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../store/context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import ImageService from "./ImageService";


const Register = () => {
    const upload = <FontAwesomeIcon icon={faUpload} />
    const { store, actions } = useContext(Context);
    return (
        <div>
            <div className="container text-center col-3 mt-5 was-validated">
                <div className="input-group mb-3">
                    <span className="input-group-text has-validation" id="basic-addon1">Name</span>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        aria-label="Name"
                        aria-describedby="basic-addon1"
                        onChange={actions.handleChange}
                        value={store.user.name}
                        required
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Lastname</span>
                    <input
                        type="text"
                        name="lastname"
                        className="form-control"
                        placeholder="Lastname"
                        aria-label="Lastname"
                        aria-describedby="basic-addon2"
                        onChange={actions.handleChange}
                        value={store.user.lastname}
                        required
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">Username</span>
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon3"
                        onChange={actions.handleChange}
                        value={store.user.username}
                        required
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon4">E-mail</span>
                    <input nn
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon4"
                        onChange={actions.handleChange}
                        value={store.user.email}
                        required
                    />
                </div>
                <div>
                    <div className="mb-5">
                        <div className=" input-group">
                            <label htmlFor="Password" className="input-group-text">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                id="Password"
                                onChange={actions.handleChange}
                                value={store.user.password}
                                maxLength={8}
                                required
                            />
                        </div>
                        <div className="form-text">Max 8 characters</div>
                    </div>
                </div>
                <button type="submit" className="btn btn-secondary" onClick={() => actions.handleUserRegister()}>
                    SUBMIT {upload}
                </button>
                <ImageService/>
            </div>
        </div>
    )
}

export default Register;