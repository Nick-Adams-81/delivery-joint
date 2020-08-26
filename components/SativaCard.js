import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';





class SativaCard extends React.Component {
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
                                <div id="card-body">
                                    <CardBody>
                                        <CardTitle>{post.title}</CardTitle>
                                        <br />
                                        <CardSubtitle>{post.body}</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <Button>Button</Button>
                                    </CardBody>
                                </div>

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
                        #card-body {
                            width: 30%;
                            display: inline-block;
                        }
                      
                    `}
                        </style>
                    </div>
                </Row>
            </Container>
        )
    }

}


export default SativaCard;