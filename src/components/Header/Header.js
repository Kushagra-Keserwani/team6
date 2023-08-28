import React from 'react'
import ReactBootstrap, {Jumbotron, Dropdown ,Nav, NavDropdown, Container, Navbar, Button, Col, Grid, Panel, FormGroup} from 'react-bootstrap'
// import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { BoxArrowRight, EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';

const Header = () => {

    // const { logout, currentUser } = useAuth()
    const currentUser=null;
    const navigate = useNavigate()

    async function handleLogout() {

        try {
            // console.log(logout)
            // await logout()
            let res = await axios.delete("http://localhost:5000/user", {withCredentials: true})
            console.log(res)
            navigate("/login")
        } catch (err) {
            alert(err.message.substring(
                err.message.indexOf(":") + 1,
                err.message.lastIndexOf("(")))
            
        }
    }
    
    return (
    <>

        <Navbar style={{background:'#CD1409'}}>
        <Container>
            <Navbar.Brand>
                <h3 style={{color:'white'}}>DOTBank</h3></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end" >
                <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic" style={{color:'white'}}>
                    Contact
                </Dropdown.Toggle>

                <Dropdown.Menu style={{height:'90px'}}>
                    <Dropdown.Item href="#/action-1"><EnvelopeFill/>&nbsp;<a href="mailto:atmsystem123@gmail.com" style={{textDecoration:'none', color:'black'}}>b12wellsfargo@gmail.com</a></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><TelephoneFill/> &nbsp; +91 99999 99999</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>

            {currentUser ? <div onClick={handleLogout} style={{cursor:'pointer', color:'white'}}><BoxArrowRight size={25}/> Logout</div> : <div></div>}
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
    )
}

export default Header;