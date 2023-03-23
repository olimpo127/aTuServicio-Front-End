import React, { useState } from 'react';
import "../App.css";


function Signup() {
    const [login, setLogin] = useState(true);

    function handleLoginClick() {
        setLogin(true);
    }

    function handleSignupClick() {
        setLogin(false);
    }

    return (
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
}

export default Signup;
