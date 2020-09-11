


const Footer = () => (
    <>
     <div>
        <footer className="page-footer font-small blue">
            <div id="links">
                <a href="#" id="contact">Contact</a>
                <a href="#" id="about">About us</a>
                <a href="#" id="careers">Careers</a>
                <a href="#" id="map">Site Map</a>
            </div>
            <div className="footer-copyright text-center py-3" id="footer"> <div id="roman">© MMXX Copyright:</div>
             <a href="#" id="title">DeliveryJoint</a>
            </div>
        </footer>
        <style jsx>
            {`
        footer {
            background: black;
        }
       #footer {
           padding-top: 16px;
       }
       #title {
           color: #006400
       }
       #roman {
           font-family: Luminari, fantasy;
           font-size: 20px
       }
       #title {
           font-family: Georgia, serif;
       }
       #links {
           padding-top: 9px;
           direction: inherit;
           display: block;
           font-family: Georgia, serif;
           font-size: 25px;
           margin-left: 5%;
       }
       #contact {
           color: #006400;
           padding: 5px;
           display: block;
       }
       #about {
           display: block;
           padding: 5px;
           color: #006400;
       }
       #careers {
           display: block;
           padding: 5px;
           color: #006400;
       }
       #map {
        display: block;
        padding: 5px;
        color: #006400;
       }
      
            `}
        </style>
    </div>
    </>

)

export default Footer;