import { Col,Row, Container } from "react-bootstrap"

const Services = () => {
    const services=[
        {
            image:"images/s2.png",
            title:"The RatePX Project",
            text:"The RatePX project is a rewards and loyalty solution built using blockchain and smart contact technology",
        },
        {
            image:"images/s3.png",
            title:"Our Mission",
            text:"We believe everyone should have access to and be part of the biggest transfer of wealth happening in the crypto space",
        },
        {
            image:"images/s4.png",
            title:"Our Vision",
            text:"Empowering people to 'Act' today for their future",
        },
    ]
    return (
        <div id="services" style={{minHeight:"93.2vh",color:"white"}}>
            <Container style={{textAlign:"center"}}>
                <h1 style={{marginTop:"2rem"}}>SERVICES</h1>
                <h5 style={{marginTop:"1rem"}}>We Provide exclusive Services for our clients</h5>
                <Row>
                    {
                        services && services.map((singleService,index)=>(
                            <Col md={4} key={index}>
                                <div className="services services2" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                                    <div className="parentImg">
                                        <img className="serviceImg" style={{height:"100%",width:"100%"}} src={singleService.image} alt="s2"></img>
                                    </div>
                                    <h3>{singleService.title}</h3>
                                    <p>{singleService.text}</p>
                                </div>    
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Services
