import { Col, Container,Button, Row } from "react-bootstrap"
import "../App.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Trust from "./Trust";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Services from "./Services";

const MainContent = () => {
    const handleDragStart = (e) => e.preventDefault();

const items = [
  <img className="phoneimg"  src="images/photo1.png" onDragStart={handleDragStart} />,
  <img className="phoneimg"  src="images/photo2.png" onDragStart={handleDragStart} />,
  <img className="phoneimg"  src="images/photo3.png" onDragStart={handleDragStart} />,
  <img className="phoneimg"  src="images/photo4.png" onDragStart={handleDragStart} />,
  <img className="phoneimg"  src="images/photo5.png" onDragStart={handleDragStart} />,
];


    return (
        <div style={{marginTop:"3rem"}}>
            <Container style={{padding:"2rem"}}>
                <Row>
                    <Col md={6}>
                        <div className="contents move" >
                            <h1>THE BLOCKCHAIN WALLET TRUSTED BY MILLIONS</h1>
                            <h4 style={{marginTop:"1.5rem"}}>Securely store, manage and exchange Bitcoin, Ethereum, and more than 1,770 other blockchain assets.</h4>
                            <div style={{marginTop:"1.5rem",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <Button size="lg" style={{marginRight:"1rem"}} variant="warning">Download</Button>
                                <Button size="lg"  variant="info">Learn More</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="imgMove" style={{marginBottom:"1rem",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <AliceCarousel controlsStrategy="responsive" disableButtonsControls="true" mouseTracking items={items} />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Features/>
            <Services/>
            <Testimonials/>
            <Trust/>

        </div>
    )
}

export default MainContent
