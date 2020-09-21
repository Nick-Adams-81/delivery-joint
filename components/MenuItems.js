import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCookieBite } from '@fortawesome/free-solid-svg-icons'
import { faCannabis } from '@fortawesome/free-solid-svg-icons'
import { faJoint } from '@fortawesome/free-solid-svg-icons'
import { faBong } from '@fortawesome/free-solid-svg-icons'
import { faFirstAid } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown'


const MenuItems = () => {
    return (
        <div id="body">
                <div id="weed-1">
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            <div id='weed'>
                                <FontAwesomeIcon icon={faCannabis} height="70px" width="120px" />
                            </div>

                            <p id="lead">Flower</p>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/sativa">Sativa</Dropdown.Item>
                            <Dropdown.Item href="/indica">Indica</Dropdown.Item>
                            <Dropdown.Item href="/hybrid">hybrid</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            
                <div id="cookie-1">

                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            <div id='cookie'>
                                <FontAwesomeIcon icon={faCookieBite} height="70px" width="120px" />
                            </div>
                            <p id="lead">Edibles</p>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Sativa</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Indica</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">hybrid</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
           
                <div id="joint-1">
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            <div id='joint'>
                                <FontAwesomeIcon icon={faJoint} height="70px" width="120px" />
                            </div>
                            <p id="lead">Pre-Rolls</p>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Sativa</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Indica</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">hybrid</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

          
                <div id="bong-1">

                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            <div id='bong'>
                                <FontAwesomeIcon icon={faBong} height="70px" width="120px" />
                            </div>
                            <p id="lead">Merch</p>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Pipes/Bongs</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Lighters</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Apparel</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div id="wax-1">

                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            <div id='wax'>
                                <FontAwesomeIcon icon={faFirstAid} height="70px" width="120px" />
                            </div>
                            <p id="lead">Wax</p>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Pipes/Bongs</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Lighters</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Apparel</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
           

            <style jsx>
                {`

             
               h1 {
                   text-align: center;
                   margin-top: 10px;
                   text-decoration: underline;
                   font-family: Georgia, serif;
                
               }
               #body {
                  display: block;
                  margin-right: auto;
                  margin-left: auto;
                  width: 100%;
                
               }
               #lead {
                   margin-top: 4px;
                   font-family: "Times New Roman", Times, serif;
                   font-size: 20px;
                   color: black;
               }
               #weed {
                   color: #006400;
                   display: inline-block;
               }
               #cookie {
                   color: #DEB887;
                   display: inline-block;
               }
               #joint {
                   color: brown;
                   display: inline-block;

               }
               #bong {
                   color: blue;
                   display: inline-block;

               }
               #wax {
                   display: inline-block;
                   color: #FF7F50;
               }
               #weed-1 {
                   display: inline-block;
                   padding: 5px;
                  
               }
               #cookie-1 {
                   display: inline-block;
                   padding: 5px;
               }
               #joint-1 {
                   display: inline-block;
                   padding: 5px;
               }
               #bong-1 {
                   display: inline-block;
                   padding: 5px
               }
               #wax-1 {
                   display: inline-block;
                   padding: 5px;
               }
             
               `}
            </style>

        </div>
    )

}
export default MenuItems