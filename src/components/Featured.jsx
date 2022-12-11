import React from 'react'
import './featured.css'
import pic2 from '../pictures/pic2.jpg'
import pic3 from '../pictures/pic3.jpg'
import pic1 from '../pictures/pic1.jpg'

function Featured() {
  return (
    <div className='featured'>
    <div className='featuredItem'>
    <img src={pic2} alt="pic2" className="featuredImg" />
    <div className="featuredTitles">
      <h1>Italy</h1>
      <h2>1453 properties</h2>
    </div>
    </div>
    <div className='featuredItem'>
    <img src={pic3} alt="pic3" className="featuredImg" />
    <div className="featuredTitles">
      <h1>Miami</h1>
      <h2>123 properties</h2>
    </div>
    </div>
    <div className='featuredItem'>
    <img src={pic1} alt="pic1" className="featuredImg" />
    <div className="featuredTitles">
      <h1>Houston</h1>
      <h2>785 properties</h2>
    </div>
    </div>
   </div>
  )
}

export default Featured