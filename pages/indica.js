import Layout from '../components/Layout'
// import IndicaCard from '../components/Indica/IndicaCard'
import IndicaCardHook from '../components/Indica/IndicaCardHook'

const Indica = () => (
    <Layout>
        <>
            <h1>Indica</h1>
            <IndicaCardHook />
            <style jsx>
                {`
            h1 {
                text-align: center;
                text-decoration: underline;
                margin-top: 5px;
            }
            `}
            </style>

        </>
    </Layout>

);

export default Indica;