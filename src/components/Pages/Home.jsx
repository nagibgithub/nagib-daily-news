import {useLoaderData} from 'react-router-dom';
import NewsCard from './NewsCard';

const Home = () => {

    const allNews = useLoaderData()

    return (
        <div >
            {
                allNews.map(pd => <NewsCard></NewsCard>)
            }
        </div>
    );
};

export default Home;