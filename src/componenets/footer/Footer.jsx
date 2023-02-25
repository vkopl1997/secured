import React from 'react';
import './FooterStyles.css';
import { SiDatabricks } from 'react-icons/si';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi'
import { FaDribbble, FaFacebook, FaGithub, FaLinkedin,FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';


export const Footer = () => {
  return (
    <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                        <SiDatabricks className='icon' />
                        <h2>Secured.</h2>
                    </div>
                    <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='icon' />
                    </Link>

                </div>
                <div className="col-container">
                    <div className="col">
                        <h4>Navigation</h4>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div>
                    <div className="col">
                        <h4>My Account</h4>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div>
                    <div className="col">
                        <h4>Information</h4>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div>
                    <div className="col">
                        <h4>Legal</h4>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div>
                    <form>
                        <h3>Join Our Team</h3>
                        <input type="email" placeholder='Enter your email' />
                        <FiMail className='mail-icon' />
                        <div className="social-group">
                            <FaInstagram className='social-icon' />
                            <FaFacebook className='social-icon' />
                            <FaLinkedin className='social-icon' />
                            <FaDribbble className='social-icon' />
                            <FaGithub className='social-icon' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}
