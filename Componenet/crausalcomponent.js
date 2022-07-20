import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
export default function Crausal() {
        return (
            <div>
              <Carousel showThumbs={false}>
                  <div style={{width:"100%",height:"500px",marginTop:"200px",display:"flex"}}>
                      <img src="/pos1.jpeg" alt="image1" style={{width:"100%",height:"500px"}}/>
                     
                  </div>
                  <div style={{width:"100%",height:"500px",marginTop:"200px",display:"flex"}}>
                      <img src="/poster1.jpg" alt="image1" style={{width:"100%",height:"500px"}}/>
                     
                  </div>
                  <div style={{width:"100%",height:"500px",marginTop:"200px",display:"flex"}}>
                      <img src="/poster2.jpg" alt="image1" style={{width:"100%",height:"500px"}}/>
                     
                  </div>
              </Carousel>
            </div>
        );
    }