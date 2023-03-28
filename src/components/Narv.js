import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
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
    <li className="nav-item ms-3 mt-3">
      <Link to="/detail" >New Post</Link>
    </li>
 
  </ul>
  );
}

export default Narv;
