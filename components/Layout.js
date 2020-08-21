import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import Head from 'next/head';



const Layout = (props) => (
    <>
        <Head>
            <title>DeliveryJoint</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/spacelab/bootstrap.min.css" />
            
        </Head>
        <div className="body">
            <Navbar />
            <Jumbotron />

            {props.children}
            <Footer />

        </div>

    </>
)

export default Layout