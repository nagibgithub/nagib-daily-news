import {Outlet} from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;