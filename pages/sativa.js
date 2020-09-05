import Layout from '../components/Layout'
//import SativaCard from '../components/SativaCard'
import SativaCardHook from '../components/SativaCardHook'


const Sativa = (props) => (
    <Layout>
        <>
            <h1>Sativa</h1>
            <SativaCardHook />

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