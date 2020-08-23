import Link from 'next/link';

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
                            <Link href="#"><a className="nav-link">test link</a></Link>
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