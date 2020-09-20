// Our dependencies
import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
// Component title
const IndicaCardHook = () => {
    // useState hooks, setting initial state(info) to an empty array
    const [info, setInfo] = useState([])
    // useEffect hook to get data from our api
    useEffect(() => {
        //axios get route
        axios
            .get("https://jsonplaceholder.typicode.com/posts/1/comments")
            .then(res => {
                // setting our state to the response from our api
                setInfo(res.data)
                // console logging our response from the api
                console.log(res.data)
            })
            // error catching
            .catch(err => {
                console.log(err)
            })

    }, [])
    // handle event functions will go here for future development( handleClick, handleSubmit, etc. )
    function handleClick() {
        const data = {
            // dummy data for testing purposes
            "userId": 300,
            "id": 4,
            "title": "whats up world",
            "body": "test of axios post route"
        }
        // our axios api call
        axios
            // our dummy post http route for testing purposes
            .post('https://jsonplaceholder.typicode.com/posts', data)
            .then(data => {
                // logging our data 
                console.log(data)
            })
            // error catching
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <div>
                {/* mapping through our state(info) and pulling out a single set of data for each card */}
                {info.map(info => (
                    <div id="card" key={info.id}>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    <div id='name'>
                                        {info.name}
                                    </div>
                                </CardTitle>
                                <CardSubtitle>
                                    <div id='body'>
                                        {info.body}
                                    </div>
                                </CardSubtitle>
                                <div id='email'>
                                    {info.email}
                                </div>
                                <div id='btn'>
                                    <Button variant="success" onClick={handleClick}>Click it!!!</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                ))}
            </div>
            {/* our jsx stylesheet */}
            <style jsx>
                {`
                #card {
                    width: 30%;
                    display: inline-block;
                    margin: 5px;
                    box-shadow: 0 2px 3px #999999, 0 2px 3px #999999;
                }
                #name {
                    color: blue;
                    border-bottom: 1px solid black;
                    margin: 3px;
                    background-color: slategrey;
                    padding: 8px;
                }
                #email {
                    color: red;
                    margin: 5px;
                }
                #btn {
                   display: flex;
                   justify-content: center;
                }

                `}
            </style>

        </>

    )

}
// exporting the indica card component
export default IndicaCardHook