<<<<<<< HEAD
import { Link, useHistory } from "react-router-dom";
=======
import "../App.css";
>>>>>>> 937ffbaf3f8985b22449b0a2eaa99d82fa1b7751
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
<<<<<<< HEAD

function Narv() {
  const tool = <FontAwesomeIcon icon={faHammer} bounce />;

  function handleClick() {
    window.location.href = "/new-url";
  }

  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
      <Link to="/" className="navbar-brand" style={{ width: 300 }} onClick={handleClick}>
      A tu Servicio{tool}
    </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
            <li className="nav-item me-4">
              <a className="nav-link active" aria-current="page" href="#">
                Post a service
              </a>
            </li>
            <li className="nav-item dropdown me-4">
              <a
                className="nav-link"
                href="#"
                role="button"
                aria-expanded="false"
              >
                Find a Service
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link">Login/Sign up</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Profile</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
=======
import { Link } from "react-router-dom";

function Narv() {
  const tool = <FontAwesomeIcon icon={faHammer} bounce />;
  return (
    
    <ul className="nav  nav-tabs">
      <h3 className="ms-3">{tool} ATúservicio</h3>
      <form className="d-flex " role="search">
        <input className="form-control me-2 ms-5" type="search" placeholder="Search" style={{width:600}}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
     
    <li className="nav-item ms-auto mt-3">
      <Link to="/" >Home</Link>
    </li>
    <li className="nav-item ms-3 mt-3">
      <Link to="/signup">Register</Link>
    </li>
    <li className="nav-item ms-3 mt-3">
      <Link to="profile" >Profile</Link>
    </li>
 
  </ul>
>>>>>>> 937ffbaf3f8985b22449b0a2eaa99d82fa1b7751
  );
}

export default Narv;
