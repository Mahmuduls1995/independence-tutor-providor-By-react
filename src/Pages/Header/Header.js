import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init'
import logo from '../../images/tutor.png'
const Header = () => {

    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <>

            <Navbar collapseOnSelect bg="primary" sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img style={{ height: '50px', width: '150px' }} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link className="text-white hover:bg-purple-700 ease-in duration-300 rounded mx-2" href="home#services">Services</Nav.Link>
                            
                            <Nav.Link className="text-white hover:bg-purple-700 ease-in duration-300 rounded mx-2" as={Link} to="/blogs">Blogs</Nav.Link>

                            <Nav.Link className="text-white hover:bg-purple-700 ease-in duration-300  rounded" as={Link} to="/about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <button className="btn btn-primary" onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Nav.Link className="text-white hover:bg-purple-700 ease-in duration-300 rounded" eventKey={2} as={Link} to="login">
                                        Login
                                    </Nav.Link>
                                    
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;