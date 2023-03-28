<<<<<<< HEAD
import React, { useState } from 'react';
import "../App.css";

=======
import Register from "../components/Register"
import Login from  "../components/Login"
>>>>>>> 937ffbaf3f8985b22449b0a2eaa99d82fa1b7751

function Signup() {
    const [login, setLogin] = useState(true);

    function handleLoginClick() {
        setLogin(true);
    }

    function handleSignupClick() {
        setLogin(false);
    }

    return (
<<<<<<< HEAD
        <div style={{
            textAlign: 'center',
            marginTop: '50px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <button
                onClick={handleLoginClick}
                disabled={login}
                style={{
                    marginRight: '20px',
                    backgroundColor: login ? '#ccc' : '#fff',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Login
            </button>
            <button
                onClick={handleSignupClick}
                disabled={!login}
                style={{
                    backgroundColor: !login ? '#ccc' : '#fff',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Sign up
            </button>  {login ? (
                <form style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <label style={{ textAlign: 'center', marginBottom: '10px' }}>Username:</label>
                    <input type="text" style={{ marginBottom: '20px', padding: '5px' }} />

                    <label style={{ textAlign: 'center', marginBottom: '10px' }}>Password:</label>
                    <input type="password" style={{ marginBottom: '20px', padding: '5px' }} />
                </form>

            ) : (
                <form style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <label style={{ textAlign: 'center', marginBottom: '10px' }}>Name:</label>
                    <input type="text" style={{ marginBottom: '20px', padding: '5px' }} />

                    <label style={{ textAlign: 'center', marginBottom: '10px' }}>Last Name:</label>
                    <input type="text" style={{ marginBottom: '20px', padding: '5px' }} />

                    <label style={{ textAlign: 'center', marginBottom: '10px' }}>Username:</label>
                    <input type="text" style={{ marginBottom: '20px', padding: '5px' }} />

                    <label style={{ textAlign: 'center', marginBottom: '10px' }}>Email:</label>
                    <input type="email" style={{ marginBottom: '20px', padding: '5px' }} />

                    <label style={{ textAlign: 'center', marginBottom: '10px' }}>Password:</label>
                    <input type="password" style={{ marginBottom: '20px', padding: '5px' }} />

                    <label style={{ textAlign: 'center', marginBottom: '10px' }}>Profile Picture:</label>
                    <input type="file" accept="image/*" style={{ marginBottom: '20px' }} />
                </form>
            )}
            <button>Submit</button>
        </div>
    );
=======
        <div className="m-3">
            <ul className="nav nav-pills mt-5 d-flex justify-content-center bg-transparent" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active text-light" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Signup</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link text-light" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Login</button>
  </li>
 
 
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
  <Register/>
  </div>
  
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
  <Login/>
  </div>
  

</div>
        </div>
    )
>>>>>>> 937ffbaf3f8985b22449b0a2eaa99d82fa1b7751
}

export default Signup;
