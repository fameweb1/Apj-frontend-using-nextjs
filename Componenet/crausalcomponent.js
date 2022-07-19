import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
export default function Crausal() {
        return (
            <div>
              <Carousel showThumbs={false}>
                  <div style={{width:"100%",height:"500px",border:"1px solid black",marginTop:"50px",display:"flex"}}>
                      <img src="/pos1.jpeg" alt="image1" style={{width:"100%",height:"500px"}}/>
                     
                  </div>
                  {/* <div style={{width:"100%",height:"500px"}}>
                      <img src="/png1.png" alt="image2" style={{width:"100%",height:"500px"}}/>

                  </div>
                  <div style={{width:"100%",height:"500px"}}>
                      <img src="/items.jpg" alt="image3" style={{width:"100%",height:"500px"}}/>
  
                  </div>
                  <div style={{width:"100%",height:"500px"}}>
                      <img src="/png.png" alt="image4" style={{width:"100%",height:"500px"}}/>
  
                  </div>
                  <div style={{width:"100%",height:"500px"}}>
                      <img src="/items.jpg" alt="image5" style={{width:"100%",height:"500px"}}/>
  
                  </div> */}
              </Carousel>
            </div>
        );
    }