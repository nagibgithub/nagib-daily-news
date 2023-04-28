import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

const NavCategory = () => {
    const [newsCategory, setNewsCategory] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => setNewsCategory(data))
            .catch(error => console.log(error.message))
    }, [])
    return (
        <div className="d-flex flex-column">
            {
                newsCategory.map(pd => <Link key={pd.id} to={`/category/${pd.id}`} className="text-decoration-none py-2 text-secondary category-list">{pd.name}</Link>)
            }            
        </div>
    );
};

export default NavCategory;