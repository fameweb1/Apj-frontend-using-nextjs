// import { Carousel } from 'react-responsive-carousel';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/toppicks.module.css"
import Rate from "./rating";
export default function Toppicks({head}) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div style={{marginTop:"100px"}}>
        <h1 style={{textAlign:"center",marginBottom:"30px"}}>{head}</h1>
      <div style={{ position: "relative" }}>
        <Carousel responsive={responsive} className={styles.maindiv}>
          <div className={styles.card}>
            <div className={styles.imagecontainer}>
                <img src="/IMG_0954.JPG" alt="image1" style={{width:"100%",height:"100%",borderTopRightRadius:"15px",borderTopLeftRadius:"15px"}}></img>
            </div>
            <div className={styles.textSection}>
                <p style={{lineHeight:"1px",textAlign:"center"}}>Silver ring</p>
                <p  style={{lineHeight:"10px",textAlign:"center"}}>SGD 100</p>
            </div>
            <div className={styles.starSection}>
                
            </div>
            <div className={styles.iteration}>
                <div className={styles.icons}>
                    <img src="/cart.png" className={styles.iconsImage}/>
                </div>
                <div className={styles.icons}>
                    <img src="/heart.png" className={styles.iconsImage}/>
                </div>
                <div className={styles.icons}>
                    <img src="/view1.png" className={styles.iconsImage}/>
                </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imagecontainer}>
            <img src="/IMG_0954.JPG" alt="image1" style={{width:"100%",height:"100%",borderTopRightRadius:"15px",borderTopLeftRadius:"15px"}}></img>
            </div>
            <div className={styles.textSection}>
                <p style={{lineHeight:"1px",textAlign:"center"}}>Silver ring</p>
                <p  style={{lineHeight:"10px",textAlign:"center"}}>SGD 100</p>
            </div>
            <div className={styles.starSection}>
                
            </div>
            <div className={styles.iteration}>
                <div className={styles.icons}>
                    <img src="/cart.png" className={styles.iconsImage}/>
                </div>
                <div className={styles.icons}>
                    <img src="/heart.png" className={styles.iconsImage}/>
                </div>
                <div className={styles.icons}>
                    <img src="/view1.png" className={styles.iconsImage}/>
                </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imagecontainer}>
                <img src="/IMG_0954.JPG" alt="image1" style={{width:"100%",height:"100%",borderTopRightRadius:"15px",borderTopLeftRadius:"15px"}}></img>
            </div>
            <div className={styles.textSection}>
            <p style={{lineHeight:"1px",textAlign:"center"}}>Silver ring</p>
                <p  style={{lineHeight:"10px",textAlign:"center"}}>SGD 100</p>
            </div>
            <div className={styles.starSection}></div>
            <div className={styles.iteration}>
                <div className={styles.icons}>
                    <img src="/cart.png" className={styles.iconsImage}/>
                </div>
                <div className={styles.icons}>
                    <img src="/heart.png" className={styles.iconsImage}/>
                </div>
                <div className={styles.icons}>
                    <img src="/view1.png" className={styles.iconsImage}/>
                </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imagecontainer}>
                <img src="/IMG_0954.JPG" alt="image1" style={{width:"100%",height:"100%",borderTopRightRadius:"15px",borderTopLeftRadius:"15px"}}></img>
            </div>
            <div className={styles.textSection}>
            <p style={{lineHeight:"1px",textAlign:"center"}}>Silver ring</p>
                <p  style={{lineHeight:"10px",textAlign:"center"}}>SGD 100</p>
            </div>
            <div className={styles.starSection}></div>
            <div className={styles.iteration}>
                <div className={styles.icons}>
                    <img src="/cart.png" className={styles.iconsImage}/>
                </div>
                <div className={styles.icons}>
                    <img src="/heart.png" className={styles.iconsImage}/>
                </div>
                <div className={styles.icons}>
                    <img src="/view1.png" className={styles.iconsImage}/>
                </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imagecontainer}>
                <img src="/IMG_0954.JPG" alt="image1" style={{width:"100%",height:"100%",borderTopRightRadius:"15px",borderTopLeftRadius:"15px"}}></img>
            </div>
            <div className={styles.textSection}>
            <p style={{lineHeight:"1px",textAlign:"center"}}>Silver ring</p>
                <p  style={{lineHeight:"10px",textAlign:"center"}}>SGD 100</p>
            </div>
            <div className={styles.starSection}></div>
            <div className={styles.iteration}>
                <div className={styles.icons}>
                    <img src="/cart.png" className={styles.iconsImage}/>
                </div>
                <div className={styles.icons}>
                    <img src="/heart.png" className={styles.iconsImage}/>
                </div>
                <div className={styles.icons}>
                    <img src="/view1.png" className={styles.iconsImage}/>
                </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imagecontainer}>
                <img src="/IMG_0954.JPG" alt="image1" style={{width:"100%",height:"100%",borderTopRightRadius:"15px",borderTopLeftRadius:"15px"}}></img>
            </div>
            <div className={styles.textSection}>
            <p style={{lineHeight:"1px",textAlign:"center"}}>Silver ring</p>
                <p  style={{lineHeight:"10px",textAlign:"center"}}>SGD 100</p>
            </div>
            <div className={styles.starSection}></div>
            <div className={styles.iteration}>
                <div className={styles.icons}>
                    <img src="/cart.png" className={styles.iconsImage}/>
                </div>
                <div className={styles.icons}>
                    <img src="/heart.png" className={styles.iconsImage}/>
                </div>
                <div className={styles.icons}>
                    <img src="/view1.png" className={styles.iconsImage}/>
                </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imagecontainer}>
                <img src="/IMG_0954.JPG" alt="image1" style={{width:"100%",height:"100%",borderTopRightRadius:"15px",borderTopLeftRadius:"15px"}}></img>
            </div>
            <div className={styles.textSection}>
            <p style={{lineHeight:"1px",textAlign:"center"}}>Silver ring</p>
                <p  style={{lineHeight:"10px",textAlign:"center"}}>SGD 100</p>
            </div>
            <div className={styles.starSection}></div>
            <div className={styles.iteration}>
                <div className={styles.icons}>
                    <img src="/cart.png" className={styles.iconsImage}/>
                </div>
                <div className={styles.icons}>
                    <img src="/heart.png" className={styles.iconsImage}/>
                </div>
                <div className={styles.icons}>
                    <img src="/view1.png" className={styles.iconsImage}/>
                </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imagecontainer}>
                <img src="/IMG_0954.JPG" alt="image1" style={{width:"100%",height:"100%",borderTopRightRadius:"15px",borderTopLeftRadius:"15px"}}></img>
            </div>
            <div className={styles.textSection}>
            <p style={{lineHeight:"1px",textAlign:"center"}}>Silver ring</p>
                <p  style={{lineHeight:"10px",textAlign:"center"}}>SGD 100</p>
            </div>
            <div className={styles.starSection}></div>
            <div className={styles.iteration}>
                <div className={styles.icons}>
                    <img src="/cart.png" className={styles.iconsImage}/>
                </div>
                <div className={styles.icons}>
                    <img src="/heart.png" className={styles.iconsImage}/>
                </div>
                <div className={styles.icons}>
                    <img src="/view1.png" className={styles.iconsImage}/>
                </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imagecontainer}>
                <img src="/IMG_0954.JPG" alt="image1" style={{width:"100%",height:"100%",borderTopRightRadius:"15px",borderTopLeftRadius:"15px"}}></img>
            </div>
            <div className={styles.textSection}>
                <p style={{lineHeight:"1px",textAlign:"center"}}>Silver ring</p>
                <p  style={{lineHeight:"10px",textAlign:"center"}}>SGD 100</p>
            </div>
            <div className={styles.starSection}></div>
            <div className={styles.iteration}>
                <div className={styles.icons}>
                    <img src="/cart.png" className={styles.iconsImage}/>
                </div>
                <div className={styles.icons}>
                    <img src="/heart.png" className={styles.iconsImage}/>
                </div>
                <div className={styles.icons}>
                    <img src="/view1.png" className={styles.iconsImage}/>
                </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}


