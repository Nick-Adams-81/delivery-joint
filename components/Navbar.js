import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => (
    <div>
        <nav className="navbar navbar-expand navbar dark bg-dark mb-4" id="navbar">
            <div className="container">
                <a className="navbar-brand" href="/">DeliveryJoint</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/"><a className="nav-link">Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#">
                                <a className="nav-link">
                                    <FontAwesomeIcon icon={faShoppingCart} height="40px" width="40px" />
                                </a>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        <style jsx>{`
        #navbar {
            width: 100%;   
        }
        a {
            color: #006400;
        }
        `}</style>
    </div>
);

export default Navbar;