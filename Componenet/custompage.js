import styles from "../styles/homescreen.module.css"
export default function CustomInformation(){

    return(
      <div className={styles.maindiv}>
        <div className={styles.contentdiv}>
            <div className={styles.custom}>
                <p style={{fontSize:"30px",fontWeight:"bold",color:"black",lineHeight:"1px",textAlign:"center"}}>Custom Made</p>
            </div>
            <div className={styles.content}>
                <p>Fugiat sit velit aute quis. Voluptate est mollit eu Lorem id
                velit irure cillum ut deserunt quis cupidatat. Reprehenderit
                proident aliquip nisi non reprehenderit pariatur eu laborum
                nulla dolor duis ad. Elit nostrud amet tempor mollit tempor ex.
                Nostrud pariatur sit consequat voluptate quis sit minim laborum
                proident. Ex sit cillum eiusmod non pariatur exercitation
                adipisicing sit elit ex sunt enim aute deserunt.</p>
            </div>
            <div className={styles.button}>
                CONTACT US
            </div>
            <div></div>
        </div>
        <div className={styles.imgdiv}>
            <img src="/ss.jpg" style={{width:"100%",height:"100%"}}/>
        </div>
        <div></div>
      </div>
    )
}
