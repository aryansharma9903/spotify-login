import React from 'react';
import './login.css';
import { loginUrl } from './spotify';

function Login() {
  return (
    <div className='login'>
        <div className='heading'>
            <img src = "https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol-768x234.jpg"></img>
        </div>

        <div className='text'>
            <h1>Sign up to start</h1>
            <h1>listening</h1><br></br><br></br>
            <p>Email address</p><br></br>
            <input type={"text"}></input>
        </div>

        <div className='link'>
        <a href='https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=ASKXGp3VXNgPWD-8_iXQBlRvTK-nP7dSxUmCC6jJGRvFXXRrtpfPt2jNIFJ3TDD_VYWmglDGwbBz-Q&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S788903893%3A1704616008416169&theme=glif'>Sign up with Google</a>
        </div>

        <div className='linkk'>
        <a href={loginUrl} className='loginbutton'>LOGIN WITH SPOTIFY</a>
        <br></br>
        <div className='test'>
        <a href="https://www.flaticon.com/free-icons/google" title="google icons"></a>
        </div>
        </div>

    </div>
  );
}

export default Login;