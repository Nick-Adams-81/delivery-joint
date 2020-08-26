import Layout from '../components/Layout'
import IndicaCard from '../components/IndicaCard'

const Indica = () => (
    <Layout>
        <>
        <h1>Indica</h1>
        <IndicaCard />
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