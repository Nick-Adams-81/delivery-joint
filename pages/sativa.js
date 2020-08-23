import Layout from '../components/Layout'
import { Container, Row, Col } from 'reactstrap'
import fetch from 'isomorphic-unfetch'
import Index from '.';
import ItemCardContent from '../components/ItemCardContent'


const Sativa = (props) => (
    <Layout>
        <>
        <h1>Sativa</h1>
        <ItemCardContent users={props.users} />


        </>
    </Layout>

);

Index.getInitialProps = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?userid=1')
     const data = await res.json()
     console.log("hello")

     return {
         user: data.user
     }
}
 
export default Sativa;