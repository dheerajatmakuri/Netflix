import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png';

const Login = () => {
  
  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email ID' />
          <input type="password" placeholder='Password' />
          <button>Sign Up</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
          </form>
          <div className="form-switch">
            <p>New to Netflix? <span>Sign Up Now</span></p>
            <p>Already Have an Account? <span>Sign In Now</span></p>
          </div>
      </div>
    </div>
  )
}

export default Login