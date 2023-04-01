import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer, faUser, faAddressCard, faMagnifyingGlass, faUpload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Narv() {
  const tool = <FontAwesomeIcon icon={faHammer} bounce />;
  const profile = <FontAwesomeIcon icon={faUser} />
  const register = <FontAwesomeIcon icon={faAddressCard} />
  const search = <FontAwesomeIcon icon={faMagnifyingGlass} />
  const post = <FontAwesomeIcon icon={faUpload} />
  return (
    <div>
      <ul className="nav  nav-tabs">

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
      <li className=" nav-item mt-3 ">
        <Link to="/signup">Register {register}</Link>
      </li>

      <li className="nav-item mt-3 px-3 ">
      <Link to="/profile">Profile {profile}</Link>
      </li>
      <li className="nav-item mt-3 bg-success rounded-pill px-4 me-5">
        <Link to="/feed" >Feed service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{post}</Link>
      </li>
    </ul>
    </div>
  );
}

export default Narv;
