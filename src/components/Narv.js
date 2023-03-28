import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer, faUser, faAddressCard, faMagnifyingGlass, faUpload} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Narv() {
  const tool = <FontAwesomeIcon icon={faHammer} bounce />;
  const profile = <FontAwesomeIcon icon={faUser} />
  const register = <FontAwesomeIcon icon={faAddressCard} />
  const search = <FontAwesomeIcon icon={faMagnifyingGlass} />
  const post = <FontAwesomeIcon icon={faUpload} />
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
      <div>
        <li className="ms-3 home bg-light rounded-pill px-5 mt-3">
          <h3><Link to="/" >{tool} ATúservicio</Link></h3>
        </li>
      </div>
      <li className="nav-item mt-3 bg-warning rounded-pill px-3">
        <Link to="/signup">Register&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{register}</Link>
      </li>

      <li className="nav-item mt-3 bg-danger rounded-pill px-3">
      <Link to="/profile">Profile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{profile}</Link>

      </li>
      <li className="nav-item mt-3 bg-primary rounded-pill px-3">
        <Link to="/service" >Find your service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{search}</Link>
      </li>
      <li className="nav-item mt-3 bg-success rounded-pill px-4 me-5">
        <Link to="/detail" >Post your service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{post}</Link>
      </li>
    </ul>
  );
}

export default Narv;
