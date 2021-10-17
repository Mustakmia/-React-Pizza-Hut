import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import FooterQuickLinks from '../FooterQuickLinks/FooterQuickLinks';

const Footer = () => {
    return (
        <footer className="bg-dark py-5">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center text-white">
                    <div className="col-md-4 d-flex">
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '40px' }} />
                        <p className="ms-2 fw-bolder">Haed Office <br />House No:12,<br />Road No:14,<br />Uttara,Dhaka</p>
                    </div>
                    <div className="col-md-4 ">
                        <h4>Pages</h4>
                        <div>
                            <FooterQuickLinks></FooterQuickLinks>
                        </div>
                    </div>
                    <div className="col-md-4 icon">
                        <h4>About Us</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repudiandae doloremque voluptate consectetur nulla sed, labore culpa facilis saepe commodi!</p>
                        <div className='d-flex justify-content-evenly icon' style={{ fontSize: '2em' }}>
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;