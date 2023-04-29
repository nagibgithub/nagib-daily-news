import {useEffect, useState} from "react";
import {Link, NavLink, useParams} from "react-router-dom";

const NavCategory = () => {
    const [newsCategory, setNewsCategory] = useState([]);
    useEffect(() => {
        fetch('https://local-server-nodemon-nagibgithub.vercel.app/categories')
            .then(res => res.json())
            .then(data => setNewsCategory(data))
            .catch(error => console.log(error.message))
    }, [])
    return (
        <div className="d-flex flex-column">
            {
                newsCategory.map(pd => <NavLink key={pd.id} to={`/category/${ pd.id }`} className={({isActive, isPending}) =>
                    isActive
                        ? "category-list text-decoration-none bg-primary text-white"
                        : isPending
                            ? "category-list text-decoration-none"
                            : "category-list text-decoration-none"}>{pd.name}</NavLink>)
            }            
        </div>
    );
};

export default NavCategory;