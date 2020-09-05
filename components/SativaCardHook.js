
import {useState, useEffect} from 'react'
import axios from 'axios'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

const SativaCardHook = () => {
    // state hook
    const [posts, setPosts] = useState([])
    //useEffect to get info from API
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res.data)
                setPosts(res.data)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <div id='card'>
                {posts.map((post) => {
                    <Card>
                        <CardBody>
                            <CardTitle>{post.title}</CardTitle>
                            <CardSubtitle>{post.body}</CardSubtitle>
                        </CardBody>
                    </Card>
                })}
                <style jsx>
                    {`

                    #card {
                        height: 125px;
                        width: 125px;
                        background-color: orange;
                    }
                    `}
                </style>

            </div>

        </>
    )


}

export default SativaCardHook