import React from 'react'
import "./home.css"
import Navbar from "../components/Navbar"
import Header from '../components/Header'
import Featured from '../components/Featured'
import Propertylist from '../components/Propertylist'
import Guestenjoy from '../components/Guestenjoy'
import Mailing from '../components/Mailing'
import Footer from '../components/Footer'


function Home() {
  return <>
   <Navbar/>
   <Header/>
   <div className="homeContainer">
     <Featured/>
     <h1 className="homeTitle">Browse by property type</h1>
     <Propertylist/>
     <h1 className='homeTitle'> Homes guest love </h1>
     <Guestenjoy/>
     <Mailing/>
     <Footer/>
    
   </div>
  </>
}

export default Home