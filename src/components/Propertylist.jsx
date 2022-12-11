import React from 'react'
import './propertylist.css'
import pic4 from '../pictures/hotel1.jpg'
import pic5 from '../pictures/hotel2.jpg'
import pic6 from '../pictures/hotel3.jpg'
import pic7 from '../pictures/hotel4.jpg'


function Propertylist() {
  return (
    <div className='pList'>
     <div className="pListItem">
   <img src={pic4} alt="4" className="pListImg" />
   <div className="pListTitles">
       <h1>Hotels</h1>
       <h2>233 hotels</h2>
   </div>
     </div>
     <div className="pListItem">
   <img src={pic5} alt="5" className="pListImg" />
   <div className="pListTitles">
       <h1>Hotels</h1>
       <h2>233 hotels</h2>
   </div>
     </div>
     <div className="pListItem">
   <img src={pic6} alt='6' className="pListImg" />
   <div className="pListTitles">
       <h1>Hotels</h1>
       <h2>233 hotels</h2>
   </div>
     </div>
     <div className="pListItem">
   <img src={pic7} alt='7' className="pListImg" />
   <div className="pListTitles">
       <h1>Hotels</h1>
       <h2>233 hotels</h2>
   </div>
     </div>
     </div>
  )
}

export default Propertylist