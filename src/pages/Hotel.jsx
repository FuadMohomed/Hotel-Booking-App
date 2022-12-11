import React from 'react'
import './hotel.css'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Mailing from '../components/Mailing'
import Footer from '../components/Footer'
import {MdLocationOn} from 'react-icons/md'
import p1 from '../pictures/p1.jpg'
import p2 from '../pictures/p2.jpg'
import p3 from '../pictures/p3.jpg'
import p4 from '../pictures/p4.jpg'
import p5 from '../pictures/p5.jpg'
import p6 from '../pictures/p6.jpg'
import p7 from '../pictures/p7.jpg'
import p8 from '../pictures/p8.jpg'
import {useState} from 'react'
import { set } from 'date-fns'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {GiCrossMark} from 'react-icons/gi'
import Images from '../data'


function Hotel() {

const [slideNumber, setSlideNumber] = useState(0)
const [open, setOpen] = useState(false)

const handleOpen = (index) => {
setSlideNumber(index)  
setOpen(true)
}

const handleMove = (direction) => {
let newSlideNumber 
if (direction === 'l') {
  newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
} else {
   newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
}
setSlideNumber(newSlideNumber)

}




  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">

       { open && <div className="slider"> 
       <GiCrossMark className='close' onClick={() => setOpen(false)}/>
       <div className="sliderWrapper">
           <BsFillArrowLeftCircleFill className='arrow' onClick={() => handleMove('l')}/>
         <img src={ Images[slideNumber].src}  alt="pic" className="sliderImg" />
             <BsFillArrowRightCircleFill className='arrow' onClick={() => handleMove('r')}/>
       </div>
        </div>}

        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
           <MdLocationOn/>
           <span>Elton ST 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
           Book a stay over $114 at this property and get a free airport taxi
          </span>
           
           <div className="hotelImages">
           {Images.map((item,index)=> {
            return <div key={index} className='hotelImgWrapper'> 
              <img onClick={() => handleOpen(index)}  src={item.src} alt='pic' className='hotelImg'/>
            </div>
           })}
          </div>
          
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle"> Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ad nemo, quisquam quas eius dicta inventore sequi. 
                Minima consequuntur nemo debitis ad iste dolorem accusantium animi officiis et non similique corporis porro,
                 maxime qui dolore, 
                id natus soluta consequatur mollitia magni, fugiat asperiores repellat sunt. 
                Accusamus similique totam exercitationem reprehenderit qui.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night Stay!</h1>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Culpa adipisci, consectetur harum reprehenderit aut nesciunt iure ducimus accusamus expedita consequatur at nulla quo sequi,
                 sint natus unde numquam! Odio, voluptas.</span>
                 <h2>
                   <b>$987</b> (9 nights)
                 </h2>
                 <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
          <Mailing/>
        <Footer/>
      </div>
    
    </div>
  )
}

export default Hotel




