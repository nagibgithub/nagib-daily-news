import moment from "moment/moment";
import {Card, Col, Row} from "react-bootstrap";
import {FaBookmark, FaEye, FaRegStar, FaShareAlt, FaStar, FaStarHalf, FaStarHalfAlt} from 'react-icons/fa';
import Rating from "react-rating";
import {Link} from "react-router-dom";

const NewsCard = ({news}) => {

    // console.log(news);
    // const logId = useParams()
    // console.log(logId.id);

    // const sliceNews = news.details.slice(0, 200)

    return (
        <div className="mb-4">
            <Card className="text-center">
                <Card.Header>
                    <Row>
                        <Col className="text-start">
                            <div className="d-flex">
                                <img className="author-image" src={news.author.img} alt="" />
                                <div className="ms-2 text-secondary">
                                    <h6>{news.author.name}</h6>
                                    <h6>{moment(news.author.published_date).format("YYYY-MM-DD")}</h6>
                                </div>
                            </div>
                        </Col>
                        <Col className="text-end">
                            <FaBookmark />
                            <FaShareAlt />
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Card.Title className="text-start">{news.title}</Card.Title>
                    <img className="card-main-image" src={news.image_url} alt="" />
                    <Card.Text className="text-start">
                        {
                            news.details.length < 200 ? <>{news.details}</> : <>{news.details.slice(0, 200)}... <Link to={`/news/${ news._id }`}>Read More</Link> </>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <Row>
                        <Col className="text-start d-flex align-items-center">
                            <Rating
                                placeholderRating={news.rating.number}
                                emptySymbol={<FaRegStar />}
                                placeholderSymbol={<FaStar />}
                                fullSymbol={<FaStar />}
                                readonly
                            />
                            <div className="">{news.rating.number}</div>
                        </Col>
                        <Col className="text-end">
                            <FaEye />
                            {news.total_view}
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;