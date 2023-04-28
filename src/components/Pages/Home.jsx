import {useLoaderData} from 'react-router-dom';
import NewsCard from './NewsCard';
import LeftNav from '../shared/LeftNav';
import {Col, Container, Row} from 'react-bootstrap';

const Home = () => {

    const allNews = useLoaderData()

    return (
        <div className=''>
            <h4>Nagib News Home</h4>
            {
                allNews.map(pd => <NewsCard key={pd._id} news={pd}></NewsCard>)
            }
        </div>
    );
};

export default Home;