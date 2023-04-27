import {Button, Col, Row} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import {Link, NavLink} from 'react-router-dom';

const NavbarItem = () => {
    return (
        <div className='my-2'>
            <Container>
                <Row>
                    <Col lg={4}></Col>
                    <Col lg={4} className='d-flex'>
                        <div className='my-2'><NavLink to='/' className={({isActive, isPending}) => isActive ? "bg-primary text-white text-decoration-none px-3 py-2" : isPending ? "pending" : "text-reset text-decoration-none px-3 py-2" }>Home</NavLink></div>
                        <div className='my-2'><NavLink to='/about' className={({isActive, isPending}) => isActive ? "bg-primary text-white text-decoration-none px-3 py-2" : isPending ? "pending" : "text-reset text-decoration-none px-3 py-2" }>About Us</NavLink></div>
                        <div className='my-2'><NavLink to='/career' className={({isActive, isPending}) => isActive ? "bg-primary text-white text-decoration-none px-3 py-2" : isPending ? "pending" : "text-reset text-decoration-none px-3 py-2" }>Career</NavLink></div>
                    </Col>
                    <Col lg={4}>
                        <Button variant="secondary">Log In</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NavbarItem;