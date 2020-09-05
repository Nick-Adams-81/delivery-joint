
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

const SativaCardHook = () => {
        //  setting our state and function to update our state
    const [posts, setPosts] = useState([])
        // useEffect to get info from API
    useEffect(() => {
        // axios api call
        axios
            // get route for data
            .get('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then(response => {
            // console logging incoming data
                console.log(response.data)
            // updating our state with api incoming data
                setPosts(response.data)
            })
            // error catching
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <div id='card'>
                {posts.map((post) => {
                    <div>
                        <h1>{post.title}</h1>
                        <h1>{post.body}</h1>
                    </div>
                })}
            </div>
            <style jsx>
                {`

                    #card {
                        height: 125px;
                        width: 125px;
                        background-color: orange;
                    }
                    h1 {
                        color: blue;
                        font-size: 20px;
                    }
                    `}
            </style>



        </div>
    )


}

export default SativaCardHook