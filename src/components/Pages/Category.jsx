import {useLoaderData} from "react-router-dom";

const Category = () => {

    const categoryNews = useLoaderData()
    // console.log(categoryNews.length);

    return (
        <div>
            {categoryNews.length}
        </div>
    );
};

export default Category;