import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';




// Class component name
class SativaCard extends React.Component {
    // setting initial state to an empty array
    state = { posts: [] };
    // Lifecycle method used for api data retrieving(using async await instead of promises)
    async componentDidMount() {
        // storing our api endpoint in a variable 
        let res = await axios.get("https://jsonplaceholder.typicode.com/posts?userId=1")
        // setting our state to the data we get from our api
        this.setState({ posts: res.data })
        // logging the response from the api
        console.log(res.data)
        // binding the 'this' key to our functions
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
     // functions set up for future development( api calls )
    handleClick() {
        alert('hello')
    }
     
    handleSubmit() {
             alert("data posted")
    }
      
    render() {
        // returning our data to be displayed in the browser
        return (
            <Container>
                <Row>
                    <div className="main">
                        {/* function mapping over our posts array */}
                        {this.state.posts.length > 0 ? (
                            <div>{this.state.posts.map((post) =>
                                <div id="card-body" onSubmit={this.handleSubmit}>
                                    <Card>
                                        <CardBody key={post.id}>
                                            <div id='title'>
                                            <CardTitle key={post.id}>{post.title}</CardTitle>
                                            </div>
                                            <br />
                                            <CardSubtitle key={post.id}>{post.body}</CardSubtitle>
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
                            // if the page is loading a spinner icon will display, else the page will display in the browser
                        ) : (
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            )}
                            {/* our stylesheet (jsx format) */}
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

// exporting the entire component 
export default SativaCard;