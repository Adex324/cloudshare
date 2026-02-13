import React, { useState } from 'react';
import './Signup.css'
import drive from "../assets/drive_icon.svg";
import cloud from "../assets/cloud_icon.svg";
import dropbox from "../assets/dropbox_icon.svg";
import mega from "../assets/mega_icon.svg";
import cloud_grid from "../assets/cloud_grid_icon.svg";
import number_1_icon from "../assets/number_1_icon.svg";
import number_2_icon from "../assets/number_2_icon.svg";
import number_3_icon from "../assets/number_3_icon.svg";
import password_eye from "../assets/password_eye.svg";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";


const Signup = () => {
    const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  password: ""
}); 
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData);
};
  return (
    <div className='signup_grid'>
      <div className="left_grid_signup">
        
        <div className="left_grid_left_img">
                  <img src={drive} alt="" className='drive_icon'/>
                  <img src={cloud} alt="" className='cloud_icon'/>
        </div>
        <div className="left_grid_text">
            <img src={cloud_grid} alt="" className='cloud_grid'/>
            <h1>Get Started with Us</h1>
        <p className='left_grid_text_paragraph'>Complete these easy steps to register your account</p>
        
        

        <div className="signup_options">
            <div className="signup_option">
                <img src={number_1_icon} alt="" className='number_1_icon' />
              <p>Sign up your account</p>
            </div>
            <div className="signup_option">
                <img src={number_2_icon} alt="" className='number_2_icon' />
                <p>Verify your account</p>
            </div>
            <div className="signup_option">
                <img src={number_3_icon} alt="" className='number_3_icon' />
                <p>Get started</p>
            </div>
            
        </div>
        </div>
        <div className="left_grid_right_img">
                  <img src={dropbox} alt="" className='dropbox_icon'/>
                  <img src={mega} alt="" className='mega_icon'/>
        </div>
      </div>
      <div className="right_grid_signup">
        <div className="right_grid_text">
        <h1>Sign Up Account</h1>
        <p>Enter your personal data to create your account</p>
        </div>

    <form className="signup_form" onSubmit={handleSubmit}>
     <div className="signup_names">
    <div className="input_group signup_name">
      <label>First Name</label>
      <input
        type="text"
        name="firstName"
        placeholder="e.g John"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
    </div>

    <div className="input_group  signup_name">
      <label>Last Name</label>
      <input
        type="text"
        name="lastName"
        placeholder="e.g Francisco"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
    </div>
    </div>

    <div className="input_group">
      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="e.g johnfrans@gmail.com"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>

    <div className="input_group password_wrapper">
      <label>Password</label>

      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleChange}
        required
        
      />
        <img src={password_eye} alt="" className='password_icon'/>
    </div>

    <button type="submit" className="signup_btn">
      Sign Up
    
    </button>

  </form>
  <div className="or_section">
    <hr />
    <p> Or</p>
    <hr />
  </div>
  <div className="account_option">
    <div className="google_div">
      <img src={google} alt="" />
      <p>Google</p>
    </div>
    <div className="apple_div">
      <img src={apple} alt="" />
      <p>Apple</p>
    </div>
  </div>
  <div className="already">
  <p className="alreadyp">Already have an account? </p>
  <p className="alreadylog" >Log in</p>
  </div>
      </div>
    </div>
  )
}

export default Signup
