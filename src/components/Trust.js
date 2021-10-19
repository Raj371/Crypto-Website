import React,{useState} from 'react'
import "../App.css"
import AliceCarousel from 'react-alice-carousel';
import { Card, Carousel,CarouselItem,Container } from 'react-bootstrap'

const Trust = () => {
    const handleDragStart = (e) => e.preventDefault();

    const items = [
      <img className="timage"  src="images/t1.png" onDragStart={handleDragStart} />,
      <img className="timage"  src="images/t2.png" onDragStart={handleDragStart} />,
      <img className="timage"  src="images/t3.png" onDragStart={handleDragStart} />,
      <img className="timage"  src="images/t4.png" onDragStart={handleDragStart} />,
      <img className="timage"  src="images/t5.png" onDragStart={handleDragStart} />,
      <img className="timage"  src="images/t6.png" onDragStart={handleDragStart} />,
      <img className="timage"  src="images/t7.png" onDragStart={handleDragStart} />,
      <img className="timage"  src="images/t8.png" onDragStart={handleDragStart} />,
      <img className="timage"  src="images/t9.png" onDragStart={handleDragStart} />,
      <img className="timage"  src="images/t10.png" onDragStart={handleDragStart} />,
      <img className="timage"  src="images/t11.png" onDragStart={handleDragStart} />,
      <img className="timage"  src="images/t12.png" onDragStart={handleDragStart} />,
      <img className="timage"  src="images/t13.png" onDragStart={handleDragStart} />,
    ];

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    const responsive= {
        0: {
            items: 1,
        },
        1024: {
            items: 3
        }
      }
    
    return (
        <div className="text-white"  style={{paddingBottom:"1.5rem" , minHeight:"93.2vh",backgroundColor:"black"}}>
           <Container>
                <div style={{position:"relative",display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <h2 style={{paddingTop:"1rem",fontSize:"3rem"}}>They <span className="text-primary">Trust Us</span></h2>
                    <AliceCarousel activeIndex="1" infinite   mouseTracking responsive={responsive}   items={items} />
                </div>
                <div className="footer">
                    <div style={{marginTop:"5rem"}}><h4 style={{color:"Yellow"}}>Company</h4>
                    <p className="para">About Us</p>
                    <p className="para">Careers</p>
                    <p className="para">Brand Assets</p>
                    <p className="para">Contact</p></div>
                    <div style={{marginTop:"5rem"}}><h4 style={{color:"green"}}>Community</h4>
                    <p className="para">Help and Support</p>
                    <p className="para">Get Listed</p>
                    <p className="para">Tools</p>
                    <p className="para">Blog</p>
                    <p className="para">Youtube</p>
                    <p className="para">Github</p>
                    <p className="para">LinkedIn</p></div>
                    <div style={{marginTop:"5rem"}}><h4 style={{color:"red"}}>Social</h4>
                    <p className="para">Twitter</p>
                    <p className="para">Telegram</p>
                    <p className="para">Reddit</p>
                    <p className="para">Facebook</p>
                    <p className="para">Instagram</p></div>
                    <div style={{marginTop:"5rem"}}><h4 style={{color:"blue"}}>Downloads</h4>
                    <p className="para">Android</p>
                    <p className="para">IOS</p>
                    <p className="para">Windows</p>
                    <p className="para">macOS</p>
                    <p className="para">Linux</p>
                    </div>
                    
                </div>
            </Container> 
        </div>
    )
}

export default Trust
