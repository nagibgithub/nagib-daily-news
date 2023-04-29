import {useLoaderData} from "react-router-dom";
import NewsCard from "./NewsCard";

const Category = () => {

    const categoryNews = useLoaderData()
    // console.log(categoryNews.length);

    return (
        <div>
            <h6>: {categoryNews.length}</h6>
            {
                categoryNews.map(pd => <NewsCard key={pd._id} news={pd}></NewsCard>)
            }
        </div>
    );
};

export default Category;