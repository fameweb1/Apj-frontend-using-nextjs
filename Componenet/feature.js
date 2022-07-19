import styles from "../styles/Feature.module.css"
export default function Feature(){

    return(
        <div className={styles.mainsection}>
            <div className={styles.contentsection}>
                <div className={styles.imagesection}>
                    <img src="/fast.png" style={{width:"100%",height:"100%"}}/>
                </div>
                <div className={styles.textsection}>
                    <h5 style={{lineHeight:"1px",textAlign:"center"}}>Free Shipping</h5>
                    <p style={{textAlign:"center",lineHeight:"10px"}}>As per location and price</p>
                </div>
            </div>
            <div className={styles.contentsection}>
                <div className={styles.imagesection}>
                <img src="/support.png" style={{width:"100%",height:"100%"}}/>
                </div>
                <div className={styles.textsection}>
                <h5 style={{lineHeight:"1px",textAlign:"center"}}>Free Shipping</h5>
                    <p style={{textAlign:"center",lineHeight:"10px"}}>As per location and price</p>
                </div>
            </div>
            <div className={styles.contentsection}>
                <div className={styles.imagesection}>
                    <img src="/return.png" style={{width:"100%",height:"100%"}}/>
                </div>
                <div className={styles.textsection}>
                <h5 style={{lineHeight:"1px",textAlign:"center"}}>Free Shipping</h5>
                    <p style={{textAlign:"center",lineHeight:"10px"}}>As per location and price</p>
                </div>
            </div>
            <div className={styles.contentsection}>
                <div className={styles.imagesection}>
                    <img src="/creditcard.png" style={{width:"100%",height:"100%"}}/>
                </div>
                <div className={styles.textsection}>
                <h5 style={{lineHeight:"1px",textAlign:"center"}}>Free Shipping</h5>
                    <p style={{textAlign:"center",lineHeight:"10px"}}>As per location and price</p>
                </div>
            </div>
        </div>
    )
}