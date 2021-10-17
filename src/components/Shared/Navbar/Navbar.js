import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Navbar = () => {
    const { logOut, user } = useAuth();
    console.log(user);
    return (
        <div className="container bg-dark w-100%">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="d-flex">
                        <img className="h-8 w-8" src="https://image.freepik.com/free-vector/chef-pizza-cartoon-character_215665-87.jpg" style={{ height: '50px', width: '100px' }} alt="" />
                        <p className="text-light">   Pizza Hut</p>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">

                            <Link to="/home" className="nav-link text-light">Home</Link>
                            <Link to="/Contacts" className="nav-link text-light">About us</Link>
                            <Link to="/home" className="nav-link text-light">Products</Link>

                            {
                                <Link to="/admin/orderList" className="nav-link text-light">Admin</Link>
                            }
                            <Link to="/home" className="nav-link text-light">Contact</Link>
                            {user.email ?
                                <Link to="/login">
                                    <button onClick={logOut} className="btn btn-warning me-2" >Log-out</button>
                                </Link>
                                :
                                <Link to="/login">
                                    <button className="btn btn-warning me-2" >Log In</button>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;