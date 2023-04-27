import {FaGoogle, FaGithub, FaTwitter, FaInstagram, FaFacebook} from 'react-icons/fa';
import {Button} from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';

const RightNav = () => {
    return (
        <div>
            <div className='my-4'>
                <h4>Login With</h4>
                <Button variant="outline-primary" className='w-12'><FaGoogle /> Login with Google</Button>
                <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>
            </div>
            <div className='my-4'>
                <h4>Find Us</h4>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" ><FaFacebook /> FaceBook</ListGroup.Item>
                    <ListGroup.Item as="li"><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item as="li" ><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='bg-secondary my-4 p-3 rounded'>
                <h4 className='text-white py-2'>Q-Zone</h4>
                <img className='m-2 img-fluid' src="https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-resources/main/assets/qZone1.png" alt="" />
                <img className='m-2 img-fluid' src="https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-resources/main/assets/qZone2.png" alt="" />
                <img className='m-2 img-fluid' src="https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-resources/main/assets/qZone3.png" alt="" />
            </div>
        </div>
    );
};

export default RightNav;