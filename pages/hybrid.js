import Layout from '../components/Layout'
import HybridCard from '../components/HybridCard'


const Hybrid = () => (
    <Layout>
        <>
        <h1>Hybrid</h1>
        <HybridCard />
        <style jsx>
            {`
            h1 {
                text-align: center;
                text-decoration: underline;
            }
            `}
        </style>
        </>
    </Layout>

);

export default Hybrid;