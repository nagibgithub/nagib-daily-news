import {Outlet} from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import {Col, Container, Row} from "react-bootstrap";
import LeftNav from "./components/shared/LeftNav";
import RightNav from "./components/shared/RightNav";
import {useEffect, useState} from "react";

const App = () => {

  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={2}><LeftNav></LeftNav></Col>
          <Col lg={7}><Outlet></Outlet></Col>
          <Col lg={3}><RightNav></RightNav></Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default App;