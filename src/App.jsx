import {Outlet} from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import {Col, Container, Row} from "react-bootstrap";
import LeftNav from "./components/shared/LeftNav";
import RightNav from "./components/shared/RightNav";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}><LeftNav></LeftNav></Col>
          <Col lg={6}><Outlet></Outlet></Col>
          <Col lg={3}><RightNav></RightNav></Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default App;