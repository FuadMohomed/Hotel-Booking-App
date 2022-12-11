import React from 'react'
import './searchitem.css'
import p1 from '../pictures/p1.jpg'
import p2 from '../pictures/p2.jpg'
import p3 from '../pictures/p3.jpg'
import p4 from '../pictures/p4.jpg'
import p5 from '../pictures/p5.jpg'
import p6 from '../pictures/p6.jpg'
import p7 from '../pictures/p7.jpg'
import p8 from '../pictures/p8.jpg'

function SearchItem() {
  return (
    <div className='searchItem'>
      <img src={p1} alt="1" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio .1 bathroom 21m Square 1 full bed
        </span>
        <span className="siCancelOp"> Free cancellation</span>
        <span className="siCancelOpSubtitle">
          you can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailsTexts">
          <span className="siPrice">$120</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className='siCheckButton'>See availability</button>
        </div>
        </div>
      </div>
  )
}

export default SearchItem