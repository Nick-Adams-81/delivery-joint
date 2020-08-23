import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';




class ItemCardContent extends React.Component {
    state = { posts: [] };

    async componentDidMount() {
        let res = await axios.get("https://jsonplaceholder.typicode.com/posts?userId=1")
        this.setState({ posts: res.data })
        console.log(res)

    }

    render() {
        return (
            <Container>
                <Row>
                <div className="main">
                    {this.state.posts.length > 0 ? (
                        <div>{this.state.posts.map((post) =>
                            
                            <ul className="list-group" id="list">
                                <Col>
                                <li className="list-group-item" id="one">
                                    {post.title}
                                </li>
                                </Col>
                                <Col>
                                <li className="list-group-item" id="two">
                                    {post.body}
                                    <br />
                                    <Button variant="success" id="btn">Add to cart</Button>
                                </li>
                                </Col>
                            </ul>
                        )}</div>
                    ) : (
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        )}
                    <style jsx>
                        {`
                        #list {
                            color: blue;
                            width:40%;
                        }
                        #one {
                            color: red;
                          
                        }
                        #btn {
                            margin-left: px;
                        }
                      
                    `}
                    </style>
                </div>
                </Row>
            </Container>
        )
    }

}


export default ItemCardContent;