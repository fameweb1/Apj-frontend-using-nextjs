import React from "react"
import styles from "../styles/Silvercollection.module.css"
export default function Silvercollection(){

    return(
        <div>
            <h1 style={{textAlign:"center",marginTop:"100px"}}>APJ Silver Collection</h1>
            <div className={styles.maindiv}>
                <div className={styles.innerdiv}>
                    <div className={styles.imagediv}>
                        <img src="/1.jpg" style={{width:"100%",height:"100%"}}/>
                    </div>
                    <div className={styles.textsection}>
                        <p style={{textAlign:"center",lineHeight:"1px"}}>Silver Ocean</p>
                    </div>
                </div>
                <div className={styles.innerdiv}>
                    <div className={styles.imagediv}>
                        <img src="/2.jpg" style={{width:"100%",height:"100%"}}/>
                    </div>
                    <div className={styles.textsection}>
                        <p style={{textAlign:"center",lineHeight:"1px"}}>SilverWare</p>
                    </div>
                </div>
                <div className={styles.innerdiv}>
                    <div className={styles.imagediv}>
                        <img src="/3.jpg" style={{width:"100%",height:"100%"}}/>
                    </div>
                    <div className={styles.textsection}>
                        <p style={{textAlign:"center",lineHeight:"1px"}}>Divine</p>
                    </div>
                </div>
                <div className={styles.innerdiv}>
                    <div className={styles.imagediv}>
                        <img src="/4.jpg" style={{width:"100%",height:"100%"}}/>
                    </div>
                    <div className={styles.textsection}>
                        <p style={{textAlign:"center",lineHeight:"1px"}}>Rudraksh</p>
                    </div>
                </div>
            </div>
        </div>
    )
}