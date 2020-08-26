import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';





class HybridCard extends React.Component {
    state = { posts: [] };

    async componentDidMount() {
        let res = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
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
                                        <CardTitle>{post.name}</CardTitle>
                                        <br />
                                        <CardSubtitle>{post.body}</CardSubtitle>
                                        <br />
                                        <CardText>{post.email}</CardText>
                                        <br />
                                        <div id="btn">
                                        <Button>Push Me!!!</Button>
                                        </div>
                                       
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
                            margin-left: 25%;
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


export default HybridCard;