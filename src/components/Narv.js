import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Narv() {
  const tool = <FontAwesomeIcon icon={faHammer} bounce />;
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <h1 className="one navbar-brand" href="#">
          {" "}
          A tu Servicio  {tool}
        </h1>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ms-5">
              <Link to="/">
                <button type="button" className="btn btn-warning">Home</button>
              </Link>
            </li>
            <li className="ms-5">
              <Link to="/profile"><button type="button" className="btn btn-warning ">Profile</button></Link>
            </li>
            
          
<div class="btn-group">
  <button type="button" className="btn btn-warning ms-5">Quick access
</button>
  <button type="button" className="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
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
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Narv;
