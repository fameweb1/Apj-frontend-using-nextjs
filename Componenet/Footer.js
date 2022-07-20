
import styles from "../styles/footer.module.css"
export default function Footer(){

    return(
        <div className={styles.maindiv}>
            <div className={styles.topsection}>
                <div className={styles.icon}>
                    {/* <div className={styles.images}></div> */}
                    <img className={styles.images} src="/email3.png"/>
                </div>
                <div className={styles.textsection}>
                    <div style={{width:"100%",height:"25px"}}>
                        <p style={{lineHeight:"1px",fontWeight:"bolder"}}>Subscribe Newsletter</p>
                    </div>
                    <div style={{width:"110%",height:"25px"}}>
                        <p style={{lineHeight:"0px",fontSize:"11px",fontWeight:"bolder",color:"green"}}>Get e-mail updates about our shop and special offers</p>
                    </div>
                </div>
                <div className={styles.serachsection}>
                    <input className={styles.input} type="text" placeholder="Enter Email here"></input>
                    <button className={styles.button}>SUBSCRIBE</button>
                </div>
            </div>
            <div className={styles.middlesection}>
                <div className={styles.contentsection}>
                    <div className={styles.firstbox}>
                        <div className={styles.apjiconsection}>
                            <img style={{width:"100%",height:"80"}}src="/apjlogo.png"/>
                        </div>
                        <div className={styles.apjiconsection}>
                            <h3 style={{color:"green",textAlign:"center"}}>Follow Us</h3>
                        </div>
                        <div className={styles.apjsocialiconsection}>
                            <img style={{width:"30px",height:"30px",borderRadius:"15px",barkgroung:"rgb(179, 163, 163)"}} src="/twitter.png"/>
                            <img style={{width:"30px",height:"30px",borderRadius:"15px",barkgroung:"rgb(179, 163, 163)"}} src="/social.png"/>
                            <img style={{width:"30px",height:"30px",borderRadius:"15px",barkgroung:"rgb(179, 163, 163)"}} src="/facebook.png"/>
                            <img style={{width:"30px",height:"30px",borderRadius:"15px",barkgroung:"rgb(179, 163, 163)"}} src="/instagram.png"/>
                        </div>
                    </div>
                </div>
                <div className={styles.contentsection}>
                <div className={styles.firstbox}>
                    <p style={{lineHeight:"1px",fontWeight:"bolder",color:"green"}}>Quick Links</p>
                    <p style={{lineHeight:"10px",fontSize:"14px",fontWeight:"bolder"}}>About Us</p>
                    <p style={{lineHeight:"10px",fontSize:"14px",fontWeight:"bolder"}}>Categories</p>
                    <p style={{lineHeight:"10px",fontSize:"14px",fontWeight:"bolder"}}>Shop</p>
                    <p style={{lineHeight:"10px",fontSize:"14px",fontWeight:"bolder"}}>Products</p>
                    <p style={{lineHeight:"10px",fontSize:"14px",fontWeight:"bolder"}}>Contact Us</p>
                </div>
                </div>
                <div className={styles.contentsection}>
                <div className={styles.firstbox}>
                        <p style={{lineHeight:"1px",fontWeight:"bolder",color:"green",textAlign:"center"}}>Contact Us</p>
                        <div className={styles.apjiconsection}>
                            <img src="/location1.png" className={styles.homeicon}></img>
                           <div className={styles.textsectionhome}>
                                <p style={{fontSize:"11px",fontWeight:"bolder"}}>29 Upper Dickson Rd,Singapore 217988</p>
                           </div>
                        </div>
                        <div className={styles.apjiconsection}>
                        <img src="/email1.png" className={styles.homeicon}></img>
                           <div className={styles.textsectionhome}>
                                <p style={{fontSize:"11px",fontWeight:"bolder"}}>enquiry@apjsilvermart.com</p>
                           </div>
                        </div>
                        <div className={styles.apjsocialiconsection}>
                        <img src="/phone1.png" className={styles.homeicon}></img>
                           <div className={styles.textsectionhome}>
                                <p style={{fontSize:"11px",fontWeight:"bolder"}}>8368929791</p>
                           </div>
                        </div>
                </div>
                </div>
                <div className={styles.contentsection}>
                <div className={styles.lastbox}>
                    <img style={{width:"100%",height:"100%"}}src="/location.png"/>
                </div>
                <div className={styles.precaution}>
                    <img style={{width:"100%",height:"100%"}}src="/logooo.png"/>
                </div>
                </div>
            </div>
            <div className={styles.bottomfirst}>
                <div className={styles.paymenticontext}>
                    <p style={{lineHeight:"0px",fontWeight:"bolder",color:"green"}}>Powered by</p>
                    <span style={{lineHeight:'30px',marginLeft:"10px",color:"orange"}}>AiTichHive</span>
                </div>
                <div className={styles.paymenticon}>
                    <img style={{width:"100%",height:"100%"}}src="/enets.png"/>
                </div>
                <div className={styles.paymenticon}>
                    <img style={{width:"100%",height:"100%"}}src="/mastercard.png"/>
                </div>
                <div className={styles.paymenticon}>
                    <img style={{width:"120%",height:"100%"}}src="/atome.png"/>
                </div>
                <div className={styles.paymenticonpaypal}>
                    <img style={{width:"100%",height:"100%"}}src="/paypal.png"/>
                </div>
                <div  className={styles.paymenticon}>
                    <img style={{width:"110%",height:"100%"}}src="/visa.png"/>
                </div>
            </div>
            <div className={styles.bottom}>
                <p className={styles.p}>Privacy Policy</p>
                <p className={styles.p}>Term and Conditions</p>
                <p className={styles.p}>Refund Policy</p>
                <p className={styles.p}>Shipping Policy</p>
                <p className={styles.p}>Cancellation Policy</p>
            </div>
        </div>
    )
}