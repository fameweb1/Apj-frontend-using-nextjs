// import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Navbar from '../Componenet/Navbar'
import Crausal from '../Componenet/crausalcomponent'
import Feature from '../Componenet/feature'
import Toppicks from '../Componenet/toppicks'
import Silvercollection from '../Componenet/Silvercollection'
import CustomInformation from '../Componenet/custompage'
import Footer from '../Componenet/Footer'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Crausal/>
      <Feature/>
      <Toppicks head="Top picks for you"/>
      <Silvercollection/>
      <Toppicks head="New Products"/>
      <Toppicks head="Best Selling"/>
      <CustomInformation/>
      <Toppicks head="On Sale"/>
      <Footer/>
    </div>
  )
}
