import Layout from '../components/Layout'
import { Container, Row, Col } from 'reactstrap'
import fetch from 'isomorphic-unfetch'
import Index from '.';


const Sativa = (props) => (
    <Layout>
        <>
        <h1>Sativa</h1>


        </>
    </Layout>

);

Index.getInitialProps = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?userid=1')
     const data = await res.json()

     return {
         fake: data
     }
}
 
export default Sativa;