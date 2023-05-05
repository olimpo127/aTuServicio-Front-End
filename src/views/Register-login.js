import Register from "../components/Register"
import Login from "../components/Login"

function Signup() {
  return (
    <div className="m-3" id="signup">
      <ul className="nav nav-pills mt-5 d-flex justify-content-center bg-transparent" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active text-dark" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Crear Cuenta</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link text-dark" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Login</button>
        </li>


      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
          <Register />
        </div>

        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
          <Login />
        </div>


      </div>
    </div>
  )
}

export default Signup;
