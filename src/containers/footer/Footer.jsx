import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <div className="site__footer section__padding">
            <div className="site__footer-heading">
                <h1 className="gradient__text">Do you want to step into the future before everyone else?</h1>
            </div>
            <div className="site__footer-btn">
                <p>Request Early Access</p>
            </div>
            <div className="site__footer-links">
                <div className="site__footer-links_logo">
                    <img src={logo} alt="logo"/>
                    <p>Crechterwood B12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>
                <div className="site__footer-links_div">
                    <h4>Links</h4>
                    <p>Social Media</p>
                    <p>Contact</p>
                </div>
                <div className="site__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div className="site__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Crechterwood B12 182 DK Alknjkcb</p>
                    <p>035-2358</p>
                    <p>info@payme.net</p>
                </div>
            </div>
            <div className="site__footer-copyright">
                <p>©2021 GPT. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer