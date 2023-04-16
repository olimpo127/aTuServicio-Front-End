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


/* function Narv({ user }) {
  const tool = <FontAwesomeIcon icon={faHammer} />;
 */
  function Narv({ user }) {
    const tool = <FontAwesomeIcon icon={faHammer} bounce />;

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
                style={{ maxWidth: 150}}
                src={logo}
              />
            </Link>
          </div>

          <li className="nav-item mt-3  px-3">

            <Link to="/detail">
            Crear Nuevo Servicio {tool}
            </Link>

            <Link to="/service">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Find your service"
                aria-label="Search"
              />
              {search}
            </Link>
          </li>

          <li className="nav-item mt-3  px-4 me-5">
            <Link to="/feed">
              servicios&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{post}
            </Link>

          </li>
          {user ? (
            <li className="nav-item mt-3 px-3 ">
              <Link to="/profile">Perfil {profile}</Link>
            </li>
          ) : (
            <div></div>
          )}

          <li>{
            user ? (

          
              <li className="nav-item mt-3 px-3 ">
                <Link to="/profile">
                  Profile {profile}
                </Link>
              </li>
            )
              : (<div></div>)}
          </li>

          <li className="nav-item mt-3  px-3">
            <Link to="/signup">Registro&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{register}</Link>
          </li>
        </ul>
      </div>
    )
  }
/* } */
export default Narv;
