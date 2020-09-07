import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

const HybridCardHook = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts/1/comments")
            .then(res => {
                setData(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })


    return (
        <>
            <div>
                {data.map(data => (
                    <div id="card">
                        <div id="name">
                            {data.name}
                        </div>
                        <div id="body">
                            {data.body}
                        </div>
                        <div id="email">
                            {data.email}
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>
                {`
                #card {
                    width: 30%;
                    display: inline-block;
                    margin: 5px;
                    box-shadow: 0 2px 3px #999999, 0 2px 3px #999999;
                }
                #name {
                    border-bottom: 1px solid black;
                    height: 25%;
                    width: 100%;
                    background-color: slategrey;
                    color: blue;
                    padding: 5px;
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
                
                `}
            </style>
        </>
    )


}

export default HybridCardHook