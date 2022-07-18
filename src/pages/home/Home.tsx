import React from 'react'
import Body from '../../Components/home/body/Body'
import Footer from '../../Components/home/footer/Footer'
import TopBar from '../../Components/home/topbar/TopBar'
import './home.css'

const Home = () => {
  return (
    <div className='homeContainer'>
       <TopBar />
       <Body />
       <Footer/>
    </div>
  )
}

export default Home