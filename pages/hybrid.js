import Layout from '../components/Layout'
import HybridCardHook from '../components/Hybrid/HybridCardHook'


const Hybrid = () => (
    <Layout>
        <>
            <h1>Hybrid</h1>
            <HybridCardHook />
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