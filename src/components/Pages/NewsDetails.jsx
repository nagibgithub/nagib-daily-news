import {Button} from "react-bootstrap";
import {Link, useLoaderData} from "react-router-dom";

const NewsDetails = () => {

    const newsDetails = useLoaderData()
    // console.log(newsDetails);

    return (
        <div>
            <div>

            </div>
            <Link to={`/category/${ newsDetails.category_id }`}><Button variant="danger">All NEWS in this category</Button></Link>
        </div>
    );
};

export default NewsDetails;