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
        console.log(res.data)

        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleClick() {
        alert('hello')
    }

    handleSubmit() {
        axios.post("https://jsonplaceholder.typicode.com/posts")
             alert("data posted")
            
    }

    render() {
        return (
            <Container>
                <Row>
                    <div className="main">
                        {this.state.posts.length > 0 ? (
                            <div>{this.state.posts.map((post) =>
                                <div id="card-body" onSubmit={this.handleSubmit}>
                                    <Card>
                                        <CardBody key={post.id}>
                                            <div id='title'>
                                            <CardTitle>{post.title}</CardTitle>
                                            </div>
                                            <br />
                                            <CardSubtitle>{post.body}</CardSubtitle>
                                            <br />
                                           <div id="btn">
                                           <Button onClick={this.handleSubmit}>Click it!</Button>
                                           </div>
                                          
                                        </CardBody>
                                    </Card>
                                </div>

                            )}
                                <br />
                                <br />
                            </div>
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
                            margin-left: 28%;
                        }
                        #card-body {
                            width: 30%;
                            display: inline-block;
                            margin: 5px;
                            box-shadow: 0 2px 3px #999999, 0 2px 3px #999999;
                        }
                        #title {
                            border-bottom: 1.5px solid black;
                            height: 25%;
                            width: 100%;

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