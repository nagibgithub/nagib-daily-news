import {Button} from "react-bootstrap";
import {Link, useLoaderData} from "react-router-dom";

const NewsDetails = () => {

    const {image_url, category_id, title, details} = useLoaderData()


    return (
        <div className="m-3 p-3">
            <img className="img-fluid my-1" src={image_url} alt="" />
            <h5 className="my-1">{title}</h5>
            <p className="my-1">{details}</p>
            <Link to={`/category/${ category_id }`}><Button variant="danger">All NEWS in this category</Button></Link>
        </div>
    );
};

export default NewsDetails;