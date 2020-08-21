


const Footer = () => (
    <>
     <div>
        <footer className="page-footer font-small blue">
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
       a {
           color: #006400
       }
       #roman {
           font-family: Luminari, fantasy;
           font-size: 20px
       }
       #title {
           font-family: Georgia, serif;
       }
      
            `}
        </style>
    </div>
    </>

)

export default Footer;