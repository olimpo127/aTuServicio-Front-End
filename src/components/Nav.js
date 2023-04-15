import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHammer,
  faUser,
  faAddressCard,
  faMagnifyingGlass,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png"



function Nav({ user }) {
  const tool = <FontAwesomeIcon icon={faHammer}  />;



  const profile = <FontAwesomeIcon icon={faUser} />;
  const register = <FontAwesomeIcon icon={faAddressCard} />;
  const search = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  const post = <FontAwesomeIcon icon={faUpload} />;
  
  return (
    <div>
      <ul className="nav  nav-tabs">
        <div>
          <Link to="/">
            <img
              className="img-fluid "  
              style={{ width: 150, height: 60 }}
              src={logo}
            />
          </Link>
        </div>

        <li className="nav-item mt-3  px-3">

          <Link to="/detail">
            Nueva ublicación {tool}
            </Link>

    
        </li>

        <li className="nav-item mt-3  px-4 me-5">
          <Link to="/feed">
            Feed service{post}
          </Link>

        </li>
        {user ? (
          <li className="nav-item mt-3 px-3 ">
            <Link to="/profile">Perfil {profile}</Link>
          </li>
         
        ) : (
          <div></div>
        )}
       
       {
        user ? (

          
          <li className="nav-item mt-3 px-3 ">
          <Link to="/profile">
            Profile {profile}
            </Link>
        </li>
          )
        :(<div></div>)}


        <li className="nav-item mt-3  px-3">
          <Link to="/signup">Regístrate{register}</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav
