import React from 'react'
import './guestenjoy.css'
import pic8 from '../pictures/room1.jpg'
import pic9 from '../pictures/room2.jpg'
import pic10 from '../pictures/room3.jpg'
import pic11 from '../pictures/room4.jpg'

function Guestenjoy() {
  return (
    <div className='ge'>
    <div className="geItem">   
   <img src={pic8} alt="8" className="geImg" />
   <span className="geName">Aparthhotel</span>
   <span className="geCity">Madrid</span>
   <span className="gePrice">Starting from 120$</span>
   <div className="geRating">
       <button>8.9</button>
       <span>Excellent</span>
       </div>
       </div> 
    <div className="geItem">   
   <img src={pic9} alt="9" className="geImg" />
   <span className="geName">Aparthhotel</span>
   <span className="geCity">Madrid</span>
   <span className="gePrice">Starting from 120$</span>
   <div className="geRating">
       <button>8.9</button>
       <span>Excellent</span>
       </div>
       </div> 
    <div className="geItem">   
   <img src={pic10} alt="10" className="geImg" />
   <span className="geName">Aparthhotel</span>
   <span className="geCity">Madrid</span>
   <span className="gePrice">Starting from 120$</span>
   <div className="geRating">
       <button>8.9</button>
       <span>Excellent</span>
       </div>
       </div> 
    <div className="geItem">   
   <img src={pic11} alt="11" className="geImg" />
   <span className="geName">Aparthhotel</span>
   <span className="geCity">Madrid</span>
   <span className="gePrice">Starting from 120$</span>
   <div className="geRating">
       <button>8.9</button>
       <span>Excellent</span>
       </div>
       </div> 
    </div>
  )
}

export default Guestenjoy