import React from 'react';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../image/logo/logo.png'
import './NavBar.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const NavBar = () => {

    const { user, handelLogOut } = useAuth()
    return (
        <div className='header-section'>
            <div>
                <Navbar variant="dark" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand >
                            <img
                                src={logo}
                                width="220"
                                height="40"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="menu-bar ms-auto">
                                <NavLink to='/home'>Home</NavLink>
                                <NavLink to='/blog'>Blog</NavLink>
                                <NavLink to='/products'>Products</NavLink>
                                <NavLink to='/dashboard'>Dashboard</NavLink>
                                <NavLink to='/contact'>Contact Us</NavLink>
                                <NavLink to='/about'>About Us</NavLink>
                                {user.email && <span className='display-name'>{user.displayName}</span>}
                                {!user.email ? <NavLink to='/login'>Login</NavLink> :
                                    <button onClick={handelLogOut} className=' btn btn-danger'>Logout</button>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default NavBar;