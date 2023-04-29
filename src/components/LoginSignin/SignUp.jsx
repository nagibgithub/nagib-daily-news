import {useContext, useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AuthContext} from "../../provider/AuthProvider";

const SignUp = () => {

    const [accept, setAccept] = useState(false)
    const {creatUser} = useContext(AuthContext)
    
    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // creatUser(email, password)
        //     .then(result => {
        //         const createdUser = result.user;
        //         console.log(createdUser);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
    }

    const handleAccepted = event => {
        const check = event.target.checked
        setAccept(check)
    }


    return (
        <Container className="">
            <h1 className="text-center">Sign Up in Nagib News</h1>


            <Form onSubmit={handleSignUp} className="mx-5">

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control autoComplete="username" name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control autoComplete="current-password" name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        name="check"
                        onClick={handleAccepted}
                        type="checkbox"
                        label={<>Accept <Link to={'/log/terms_condition'}>Terms and Conditions</Link></>} />
                </Form.Group>

                <Button variant="primary" name="submit" type="submit" disabled={!accept}>Submit</Button>

            </Form>


            <p className="text-center">if you have an id plz <Link to={'/log/login'}>Log In</Link></p>
        </Container>
    );
};

export default SignUp;