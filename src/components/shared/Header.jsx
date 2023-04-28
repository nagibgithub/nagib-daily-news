import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import NavbarItem from "./Navbar";
import {useState} from "react";
import {Link} from "react-router-dom";


const Header = ({allNews}) => {

    const todayPic = allNews.filter(pd => pd.others_info.is_todays_pick === true)

    return (
        <div className="text-center">
            <img className="mx-auto text-center" src="https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-resources/main/assets/logo.png" alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format('dddd, MMMM D, YYYY')}</p>
            <div className="container d-flex fs-5">
                <div className="bg-danger px-3 py-1 text-white">Breaking: </div>
                <Marquee pauseOnHover={true} gradient={true} gradientColor={[255, 255, 255]} gradientWidth={30} speed={70}>
                    {
                        todayPic.map(news => <Link className="text-decoration-none text-reset" to={`/news/${news._id}`} key={news._id}>| {news.title} |</Link>)
                    }
                </Marquee>
            </div>
            <NavbarItem></NavbarItem>
        </div>
    );
};

export default Header;