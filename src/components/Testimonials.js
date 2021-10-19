import { Col, Container, Row } from "react-bootstrap"

const Testimonials = () => {
    const info =[
        {
            image:"images/p1.png",
            content:"“We’re hugely excited to be launching RatePX. We believe it brings a new, fairer, more transparent investment opportunity to everyone.“",
            name:"Liam Robertson",
            position:"Alphabit CEO",
        },
        {
            image:"images/p2.png",
            content:"RatePX is an exciting new offering in the space. Seeing RatePX set a level playing field for all investors is very welcome. We look forward to being part of many investors' successes.“",
            name:"Harry Yeh",
            position:"Protocol Ventures GP",
        },
        {
            image:"images/p3.png",
            content:"“Community driven investing is one of the next logical steps for the crypto space. RatePX will be a leader in this field.”",
            name:"Tom Sweeney",
            position:"Jun Capital CEO",
        }
    ]
    return (
        <div id="testimonials" style={{minHeight:"93.2vh",backgroundColor:"#f5f5f5"}}>
            <Container>
            <h2 style={{textAlign:"center",paddingTop:"2rem",fontSize:"3rem"}}>TESTIMONIALS</h2>
                    
                <Row>
                    {
                        info && info.map((singleInfo)=>(
                            <Col md={4}>
                                <div className="cards">
                                    <div className="imgbox">
                                        <img className="testImg" src={singleInfo.image}   alt="person1"></img>
                                    </div>
                                    <div className="content pt-3">
                                        <p>{singleInfo.content}</p>
                                        <h2 style={{color:"yellow"}}>{singleInfo.name}</h2>
                                        <p className="text-primary">{singleInfo.position}</p>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Testimonials
