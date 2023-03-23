import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Narv() {
  const tool = <FontAwesomeIcon icon={faHammer} bounce/>;
  return (
    <nav className="navbar navbar-expand-lg bg-secondary rounded-4">
      <div className="container-fluid">
        <h1 className="navbar-brand fs-2 d-flex flex-wrap justify-content-center" href="#">
          {""}
          {tool} A tu Servicio  
        </h1>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ms-5">
              <Link to="/">
                <h5>Home</h5>
              </Link>
            </li>
            <li className="ms-5">
              <Link to="/profile"><h5>Profile</h5></Link>
            </li>
            
          
<div class="btn-group">
  <h5 className="ms-5">Quick access
</h5>
  <button type="button" className="btn btn-warning dropdown-toggle dropdown-toggle-split " data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Register</a></li>
    <li><a class="dropdown-item" href="#">Search service</a></li>
    <li><a class="dropdown-item" href="#">Post Service</a></li>
  </ul>
</div>

          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Busca Tu servicio"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Narv;
