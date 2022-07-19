
import styles from "../styles/Navbar.module.css"
import Image from "next/image"
export default function Navbar(){
    return(
        <div className={styles.heading}>
            <div className={styles.topsection}>
                <div className={styles.imagesection}>
                    <Image src="/logo.png" width="100" height="100"></Image>
                </div>
                    <div className={styles.searchsection}>
                        <div className={styles.searchicon}>
                        <Image src="/search.png" width="25" height="25"></Image>
                        </div>
                        <input className={styles.input} type="text" placeholder="Search item or product"></input>
                    </div>
                <div className={styles.iconssection}>
                    <div className={styles.loginsection}>
                        <Image src="/user.png" width="30" height="30"></Image>
                    </div>
                    <div className={styles.loginsection}>
                        <Image src="/wishlist.png" width="30" height="30"></Image>
                    </div>
                    <div className={styles.loginsection}>
                        <Image src="/shopping-cart.png" width="30" height="30"></Image>
                    </div>
                </div>
            </div>
            <div className={styles.menubar}>
              <p>Silver</p>
              <p>Silver ocean</p>
              <p>Silverware</p>
              <p>collection</p>
              <p>Divine</p>
              <p>Rudraksh</p>
              <p>Gifts & gold coins</p>
              <p>Flexi saving</p>
              <p>Utensils</p>
            </div>
        </div>
    )
}