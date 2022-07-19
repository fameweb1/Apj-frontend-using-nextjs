// import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Navbar from '../Componenet/Navbar'
import Crausal from '../Componenet/crausalcomponent'
import Feature from '../Componenet/feature'
import Toppicks from '../Componenet/toppicks'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Crausal/>
      <Feature/>
      <Toppicks/>
    </div>
  )
}
