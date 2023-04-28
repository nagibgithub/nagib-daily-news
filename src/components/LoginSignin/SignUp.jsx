import {Button, Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <Container className="">
            <h1 className="text-center">Sign Up in Nagib News</h1>
            <Form className="mx-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>if you have an id plz <Link to={'/log/login'}>Log In</Link></p>
            </Form>
        </Container>
    );
};

export default SignUp;