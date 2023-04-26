import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import NavbarItem from "./Navbar";

const Header = () => {
    return (
        <div className="text-center">
            <img className="mx-auto text-center" src="https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-resources/main/assets/logo.png" alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format('dddd, MMMM D, YYYY')}</p>
            <div className="container d-flex fs-5">
                <div className="bg-danger px-3 py-1 text-white">Breaking: </div>
                <Marquee pauseOnHover={true} gradient={true} gradientColor={[255,255,255]} gradientWidth={30}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus quasi, quod excepturi illo expedita perspiciatis voluptatem necessitatibus. Tenetur dolore perferendis harum veritatis quo ab natus?</Marquee>
            </div>
            <NavbarItem></NavbarItem>
        </div>
    );
};

export default Header;