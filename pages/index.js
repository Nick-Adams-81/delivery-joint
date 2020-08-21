import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faCannabis } from '@fortawesome/free-solid-svg-icons'
import { faJoint } from '@fortawesome/free-solid-svg-icons'
import { faBong } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'


const Index = () => (
    <Layout>
        <>
            <h1>The Menu</h1>
            <div id="icons">
                <div id="coffee">
                    <FontAwesomeIcon icon={faCoffee} height="150px" width="150px">
                        
                    </FontAwesomeIcon>
                    <br />
                    <button type="button" className="btn btn-success" id="btn-weed">Coffee</button>
                </div>

                <div id="cannabis">
                    <FontAwesomeIcon icon={faCannabis} height="150px" width="150px" />
                    <br />
                    <button type="button" className="btn btn-success" id="btn-weed">Flower</button>
                </div>
                <div id="joint">
                    <FontAwesomeIcon icon={faJoint} height="150px" width="150px" />
                    <br />
                    <button type="button" className="btn btn-success" id="btn-weed">Pre-Rolls</button>
                </div>
                <div id="bong">
                    <FontAwesomeIcon icon={faBong} height="150px" width="150px" />
                    <br />
                    <button type="button" className="btn btn-success" id="btn-weed">Merch</button>
                </div>
                <br />
                <br />
            </div>
            <style jsx>
                {`
               h1 {
                   text-align: center;
                   margin-top: 10px;
               }
               #coffee {
                   color: brown;
                   display: inline-block;
                   margin-left: 19%;
                   border: 1px solid black;
                   border-radius: 25px;

               }
               #cannabis {
                   color: green;
                   display: inline-block;
                   margin-left: 15px;
                   border: 1px solid black;
                   border-radius: 25px;
               }
               #joint {
                   color: brown;
                   display: inline-block;
                   margin-left: 15px;
                   border: 1px solid black;
                   border-radius: 25px;
               }
               #bong{
                display: inline-block;
                margin-left: 15px;
                color: blue;
                border: 1px solid black;
                border-radius: 25px;
               } 
               #btn-weed {
                   display: flex;
                   margin-left: 35px;
                   margin-top: 5px;
                   margin-bottom: 3px;
               }
             
               `}
            </style>
        </>
    </Layout>
)

export default Index;