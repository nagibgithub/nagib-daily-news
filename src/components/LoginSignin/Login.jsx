import {Button, Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <Container className="">
            <h1 className="text-center">Login your account</h1>
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
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agree with all Terms and Conditions" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Log In
                </Button>
                <p>
                If you new, Plz <Link to={"/log/signup"}>Sign Up</Link>
                </p>
            </Form>
        </Container>
    );
};

export default Login;