import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
// Component name
const HybridCardHook = () => {
    // useState hook(initial state(data), and function to setState(setData), our initial state is set to an empty array)
    const [data, setData] = useState([]);
    // useEffect for our api call(axios)
    useEffect(() => {
        axios
            // Get http route(currently from jsonplaceholder api, future development it will be another api)
            .get("https://jsonplaceholder.typicode.com/posts/1/comments")
            // promise converting our data to json format for mapping purposes    
            .then(res => {
                // Setting our state to the response from the api        
                setData(res.data)
                // Console logging the response from the api        
                console.log(res.data)
            })
            // Error catching    
            .catch(err => {
                // Console logging any errors        
                console.log(err)
            })
    }, []);
    // Function for future development(api post route)
    function clickMe(data) {
       
        // our axios api call
        axios
            // our dummy post http route for testing purposes
            .post('https://jsonplaceholder.typicode.com/posts', {data})
            .then(data => {
                // logging our data 
                console.log(data)
            })
            // error catching
            .catch((err) => {
                console.log(err)
            })
    };

    // Our return which will be displayed in the browser
    return (
        <>
            <div>
                {/* Function that maps over our data(state) array so we can pull out single 
                    pieces of data and displays the data in the form of a card in the browser */}
                {data.map(data => (
                    <div id="card-body" key={data.id}>
                        <Card>
                            <CardBody>
                                <div id="card">
                                    <CardTitle>
                                        <div id="name">
                                            {data.name}
                                        </div>
                                    </CardTitle>
                                    <CardSubtitle>
                                        <div id="body">
                                            {data.body}
                                        </div>
                                    </CardSubtitle>
                                    
                                        <div id="email">
                                            {data.email}
                                        </div>
                                    
                                    <div id='btn'>
                                        <Button variant="success" onClick={() => {clickMe(data)}}>Click me!</Button>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                ))}
                <br />
                <br />
            </div>
            {/* our stylesheet(in jsx format) */}
            <style jsx>
                {`
                #card-body {
                    width: 30%;
                    display: inline-block;
                    margin-left: 2%;
                    box-shadow: 0 2px 3px #999999, 0 2px 3px #999999;
                }
            
                #name {
                    border-bottom: 1px solid black;
                    height: 25%;
                    width: 100%;
                    background-color: slategrey;
                    color: blue;
                    padding: 5px;
                    margin: 5px;
                }
                #body {
                    padding: 3px;
                }
                #email {
                    color: red;
                    margin: 5px;
                    padding: 3px;
                    text-align: center;
                }
                #btn {
                    display: flex;
                    justify-content: center;
                    padding: 3px;
                }
                
                `}
            </style>
        </>
    );


}
// Exporting the entire component
export default HybridCardHook