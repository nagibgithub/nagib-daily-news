import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useContext} from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import {Link, NavLink} from 'react-router-dom';
import {AuthContext} from '../../provider/AuthProvider';

const NavbarItem = () => {

    const {user} = useContext(AuthContext)
    // console.log(user);


    return (
        <div className='my-2'>
            <Container>
                <Row>
                    <Col lg={4}></Col>
                    <Col lg={4} className='d-flex justify-content-center'>
                        <div className='my-2'><NavLink to='/' className={({isActive, isPending}) => isActive ? "bg-primary text-white text-decoration-none px-3 py-2" : isPending ? "pending" : "text-reset text-decoration-none px-3 py-2"}>Home</NavLink></div>
                        <div className='my-2'><NavLink to='/about' className={({isActive, isPending}) => isActive ? "bg-primary text-white text-decoration-none px-3 py-2" : isPending ? "pending" : "text-reset text-decoration-none px-3 py-2"}>About Us</NavLink></div>
                        <div className='my-2'><NavLink to='/career' className={({isActive, isPending}) => isActive ? "bg-primary text-white text-decoration-none px-3 py-2" : isPending ? "pending" : "text-reset text-decoration-none px-3 py-2"}>Career</NavLink></div>
                    </Col>
                    <Col lg={4} className='text-end'>
                        {
                            user ?
                                <h6>{user.displayName} <span><Link><Button variant="secondary">Log Out</Button></Link></span></h6>
                                :
                                <>
                                    <FontAwesomeIcon className='text-secondary mx-2' size='2xl' icon={faCircleUser} />
                                    <h6><span><Link to={'/log/login'}><Button variant="secondary">Log In</Button></Link></span></h6>
                                </>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NavbarItem;