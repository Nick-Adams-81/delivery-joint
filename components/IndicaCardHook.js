

import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

const IndicaCardHook = () => {
    const [info, setInfo] = useState([])

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts/1/comments")
            .then(res => {
                setInfo(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    function handleClick() {
        alert("clicked")
    }


    return (
        <>
            <div>
                {info.map(info => (
                    <div id="card" key={info.id}>
                        <div id='name'>
                            {info.name}
                        </div>
                        <div id='body'>
                            {info.body}
                        </div>
                        <div id='email'>
                            {info.email}
                        </div>
                        <div id='btn'>
                            <Button variant="success" onClick={handleClick}>Click it!!!</Button>
                        </div>
                    </div>

                ))}
            </div>
            <style jsx>
                {`
                #card {
                    width: 32%;
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
                    margin-left: 33%;
                    padding: 5px;
                }

                `}
            </style>

        </>

    )

}
export default IndicaCardHook