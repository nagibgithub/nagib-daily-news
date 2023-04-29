import {useContext} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../provider/AuthProvider";

const Login = () => {

    const navigate = useNavigate()

    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location);
    const from = location.state?.from?.pathname || "/";
    console.log(from);

    const handleLogIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
        
        navigate(from, {replace: true})
    }


    return (
        <Container className="">
            <h1 className="text-center">Login your account</h1>


            <Form onSubmit={handleLogIn} className="mx-5">

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" name="submit" type="submit">Log In</Button>

            </Form>


            <p className="text-center">If you new, Plz <Link to={"/log/signup"}>Sign Up</Link></p>
        </Container>
    );
};

export default Login;