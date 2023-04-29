import {Outlet} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import RightNav from "../shared/RightNav";

const NewsLayout = () => {

    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => setAllNews(data))
            .catch(error => console.log(error.message))
    }, [])

    return (
        <div>
            <Header allNews={allNews}></Header>
            <Container>
                <Row>
                    <Col lg={9}><Outlet></Outlet></Col>
                    <Col lg={3}><RightNav></RightNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;