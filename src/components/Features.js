import { Card, Col, Container,Button, Row } from "react-bootstrap"

const Features = () => {

    const features=[
        {
            image:"images/f.png",
            title:"Asset Token Creation",
            text:"The term crypto token refers to a special virtual currency token or how cryptocurrencies are denominated. These tokens represent fungible and tradable assets or utilities that reside on their own blockchains",
        },
        {
            image:"images/f3.png",
            title:"Ownership Token Control",
            text:"A fundamental property of the blockchain is that, once something is on the blockchain, it cannot be altered or counterfeited. And a use case that has begun to pop up for the technology is as an ownership verification tool. ",
        },
        {
            image:"images/f4.png",
            title:"Assign OPFS Meta data",
            text:"Besides recording transfers of currency, the Bitcoin blockchain is being used to save metadata i.e. arbitrary pieces of data which do not affect transfers of bitcoins. This can be done by using different techniques, and for different purposes",
        },
    ]

    return (
        <div id="features" style={{minHeight:"93.2vh",padding:"0.5rem 2rem 4rem 2rem",backgroundColor:"#f5f5f5"}}>
           <p style={{textAlign:"center",fontSize:"1.5rem",paddingTop:"2rem"}}>What is RatePX Crypto</p>
           <h2 style={{textAlign:"center",fontSize:"2.5rem",fontWeight:"bolder",paddingBottom:"2rem"}}>Global decentralized currency based on blockchain technology</h2>
           <Container>
                <Row>
                        {
                            features && features.map((singleFeature)=>(
                                <Col md={4}>
                                    <Card className="featurecard" style={{ borderRadius:"20px",height:"450px", background:"rgb(41, 41, 41)",color:"white",margin:"2rem auto",width: '18rem',textAlign:"center" }}>
                                        <Card.Img variant="top" style={{ borderTopRightRadius:"20px",borderTopLeftRadius:"20px",height:"200px",objectFit:"cover",width:"100%"}} src={singleFeature.image} />
                                        <Card.Body>
                                            <Card.Title style={{fontWeight:"bolder"}}>{singleFeature.title}</Card.Title>
                                            <Card.Text style={{fontWeight:"300"}}>
                                                {singleFeature.text}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                </Row>               
           </Container> 
        </div>
    )
}

export default Features
