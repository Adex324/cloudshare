import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Waitlist.css'
import header from "../assets/cloudshare_header.svg";
import main_cloud from "../assets/main_cloud.svg";
import drive from "../assets/drive_icon.svg";
import cloud from "../assets/cloud_icon.svg";
import dropbox from "../assets/dropbox_icon.svg";
import mega from "../assets/mega_icon.svg";
import waitlist_arrow from "../assets/waitlist_button_arrow.svg";
import ig_icon from "../assets/ig_icon.svg";
import x_icon from "../assets/x_icon.svg"

const Waitlist = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // later, you can send this to your backend API
  };

  return (
    <div className='waitlist_body'>
      <img src={header} alt="" className='header_img' />
      <div className="waitlist_text">
        <div className="waitlist_left_img">
          <img src={drive} alt="" className='drive_icon'/>
          <img src={cloud} alt="" className='cloud_icon'/>
        </div>

        <div className="waitlist_first_text">
          <img src={main_cloud} alt="" className='main_cloud' />
          <h1>Cloud. Sync. Transfer.</h1>  

          <div className="waitlist_second_text">
            <h2>We dey move your Data, Files, Docs, Videos and plenty more.</h2>
            <h2>Everything go reach complete, nothing go miss</h2>

            {/* Email Input + Button */}
            <form className="waitlist_inputs" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="waitlist_email"
              />
              <button type="submit" className="waitlist_button">
                Join wait-list
                <img src={waitlist_arrow} className='waitlist_arrow' />
              </button>
            </form>
          </div>
        </div>

        <div className="waitlist_right_img">
          <img src={dropbox} alt="" className='dropbox_icon'/>
          <img src={mega} alt="" className='mega_icon'/>
        </div>
        
      </div>
      <footer
       className="waitlist_footer">
          <h3>Cloudshare © 2025</h3>

          <div className="waitlist_footer_img">
            <img src={ig_icon} alt="" className='ig_icon' />
            <img src={x_icon} alt="" className='x_icon' />
          </div>

          <div className="waitlist_footer_link">
             <Link to="/">Terms of use</Link>
             <Link to="/waitlist">Privacy Policy</Link>
              
          </div>
        </footer>
      
    </div>
  )
}

export default Waitlist
