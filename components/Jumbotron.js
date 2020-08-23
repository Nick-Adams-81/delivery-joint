import Carousel from 'react-bootstrap/Carousel';

const Jumbotron = () => (
    <>
        <Carousel id="carousel">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1569773974228-9ca9f63d824f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                    alt="First slide"
                    height="370px"
                />
                <Carousel.Caption>
                    <h3>DeliveryJoint</h3>
                    <p>Sacramento's premier cannabis delivery service.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.heart.org/-/media/images/news/2020/april-2020/0420marijuanaheart_sc.jpg"
                    alt="Third slide"
                    height="370px"
                />

                <Carousel.Caption>
                    <h3>DeliveryJoint</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.aarp.net/content/dam/aarp/health/drugs_supplements/2019/08/1140-med-marijuana-caduceus.imgcache.rev873985b7234d2a2df9a09f5cefacea57.jpg"
                    alt="Third slide"
                    height="370px"
                />

                <Carousel.Caption>
                    <h3>DeliveryJoint</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <style jsx>
            {`
            h3 {
                color: white;
                font-size: 40px;
                font-family: ;
                skew: 20deg;
            }
     
            `}
        </style>
    </>

)

export default Jumbotron;

