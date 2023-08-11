import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function MenuBar() {
    return (
        <Navbar className="bg-body-tertiary">
            <NavLink to='/home'> Home </NavLink>
            <NavLink to='/login'> LogIn </NavLink>
        </Navbar>
    );
}

export default MenuBar;