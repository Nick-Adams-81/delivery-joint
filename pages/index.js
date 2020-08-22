import Layout from '../components/Layout'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCookie } from '@fortawesome/free-solid-svg-icons'
import { faCannabis } from '@fortawesome/free-solid-svg-icons'
import { faJoint } from '@fortawesome/free-solid-svg-icons'
import { faBong } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown'


const Index = () => (
    <Layout>
        <>
            <Container fluid>
                <h1>The Menu</h1>
                <Row>
                   
                    <Col xs={6} sm={3}>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <FontAwesomeIcon icon={faCannabis} height="130px" width="130px" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Sativa</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Indica</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">hybrid</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                    </Col>
                    
                    <Col xs={6} sm={3}>
                        
                        <Dropdown>
                                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                                <FontAwesomeIcon icon={faCookie} height="130px" width="130px" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Sativa</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Indica</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">hybrid</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        
                    </Col>
                    
                    <Col xs={6} sm={3}>
                        
                        <Dropdown>
                                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                <FontAwesomeIcon icon={faJoint} height="130px" width="130px" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Sativa</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Indica</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">hybrid</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
            
                        
                    </Col>

                    <Col xs={6} sm={3}>
                       
                        <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                <FontAwesomeIcon icon={faBong} height="130px" width="130px" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Sativa</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Indica</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">hybrid</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        
                    </Col>

                </Row>
                <br />

                <style jsx>
                    {`

             
               h1 {
                   text-align: center;
                   margin-top: 10px;
                   text-decoration: underline;
               }
             
               `}
                </style>

            </Container>
        </>
    </Layout>
)

export default Index;