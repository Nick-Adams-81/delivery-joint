import Layout from '../components/Layout'
import { Container, Row, Col } from 'reactstrap'
import fetch from 'isomorphic-unfetch'
import Index from '.';
import SativaCard from '../components/SativaCard'


const Sativa = (props) => (
    <Layout>
        <>
            <h1>Sativa</h1>
            <SativaCard />

            <style jsx>
                {
                    `
                    h1 {
                        text-align: center;
                        text-decoration: underline;
                    }
                    `
                }
            </style>
            <br />
        </>
    </Layout>

);


export default Sativa;