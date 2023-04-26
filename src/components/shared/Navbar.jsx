import {Col, Row} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

const NavbarItem = () => {
    return (
        <div>
            <Navbar bg="light">
                <Container>
                    <Row>
                        <Link to='/'><Navbar.Brand>Home</Navbar.Brand></Link>
                        <Link to='/about'><Navbar.Brand>About</Navbar.Brand></Link>
                        <Link to='/career'><Navbar.Brand>Career</Navbar.Brand></Link>
                    </Row>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarItem;