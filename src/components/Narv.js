import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Narv() {
  const tool = <FontAwesomeIcon icon={faHammer} bounce />;
  return (
    
    <ul class="nav  nav-tabs">
      <h3 class="ms-3">{tool} ATúservicio</h3>
      <form class="d-flex " role="search">
        <input class="form-control me-2 ms-5" type="search" placeholder="Search" style={{width:600}}/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
     
    <li class="nav-item ms-auto mt-3">
      <Link to="/" >Home</Link>
    </li>
    <li class="nav-item ms-3 mt-3">
      <Link to="/signup">Register</Link>
    </li>
    <li class="nav-item ms-3 mt-3">
      <Link to="profile" >Profile</Link>
    </li>
 
  </ul>
  );
}

export default Narv;
