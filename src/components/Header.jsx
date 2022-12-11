import React from 'react'
import "./header.css"
import {MdLocalHotel} from 'react-icons/md'
import {FaPlane} from 'react-icons/fa'
import {AiFillCar} from 'react-icons/ai'
import {FaTaxi} from 'react-icons/fa'
import {MdOutlineMuseum} from 'react-icons/md'
import {BsCalendar2Day} from 'react-icons/bs'
import {GiPerson} from 'react-icons/gi'
import {DateRange} from 'react-date-range'
import {useState} from 'react'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {format} from 'date-fns'
import {useNavigate} from 'react-router-dom'


function Header({type}) {
// Destination
const [destination,setDestination] = useState('')



// calender 
const [openDate, setOpenDate] = useState(false)
const [date,setDate] = useState([
  {
    startDate: new Date(),
    endDate: new Date(),
    key:'selection'
  }
])

//options
const [openOptions, setOpenOptions] = useState(false)
const [options, setOptions] = useState({
  adult: 1,
  children: 0,
  room:1,
})


const handleOption = (name,operation) => {
setOptions(prev => { 
  return {...prev, [name]: operation === 'i' ? options[name] +1 : options[name] -1 }
})
}

const navigate = useNavigate()

const handleSearch = () => {
navigate("/hotels" , {state:{destination,date,options}} )
}

  return (
    <div className='header'>
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
    <div className="headerList">
      <div className="headerListItem active">
     <MdLocalHotel/>
     <span>Stays</span>
      </div>
      <div className="headerListItem">
     <FaPlane/>
     <span>Flights</span>
      </div>
      <div className="headerListItem">
     <AiFillCar/>
     <span>Car Rentals</span>
      </div>
      <div className="headerListItem">
     <MdOutlineMuseum/>
     <span>Attractions</span>
      </div>
      <div className="headerListItem">
     <FaTaxi/>
     <span>Airport taxi</span>
      </div>
    </div>
  { type !== 'list' &&
  
  <> 
  <h1 className="headerTitle">A lifetime of discounts? Its Genius.</h1>
   <p className="headerDesc">Get reward for your travels - unlock instant savings of 10% or more
    with free HersiBooking account</p>
   <button className="headerBtn">
    Sign in / Register
   </button>
<div className="headerSearch">
<div className="headerSearchItem">
  <MdLocalHotel className='headerIcon'/>
  <input 
  type='text' 
  placeholder='Where are you going?' 
  className='headerSearchInput' 
  onChange={(e) => setDestination(e.target.value)}
  
  />
</div>
<div className="headerSearchItem">
  <BsCalendar2Day className='headerIcon'/>
<span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
{ openDate && <DateRange 
editableDateInputs = {true}
onChange={item => setDate([item.selection])}
moveRangeOnFirstSelection = {false}
ranges={date}
className='date'
 minDate={new Date()}
           
/>}
</div>
<div className="headerSearchItem">
  <GiPerson className='headerIcon'/>
 <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
 { openOptions && <div className="options">
   <div className="optionItem">
     <span className="optionText">Adult</span>
     <div className="optionCounter">
     <button  disabled = {options.adult <= 1} className="optionCounterButton" onClick={() => handleOption('adult','d')}>-</button>
     <span className="optionCounterNumber">{options.adult}</span>
     <button className="optionCounterButton" onClick={() => handleOption('adult','i')}>+</button>
     </div>
   </div>
   <div className="optionItem">
     <span className="optionText">Children</span>
      <div className="optionCounter">
     <button disabled = {options.children <= 0} className="optionCounterButton" onClick={() => handleOption('children','d')}>-</button>
     <span className="optionCounterNumber">{options.children}</span>
     <button className="optionCounterButton" onClick={() => handleOption('children','i')}>+</button>
     </div>
   </div>
   <div className="optionItem">
     <span className="optionText">Room</span>
      <div className="optionCounter">
     <button disabled = {options.children <= 1} className="optionCounterButton" onClick={() => handleOption('room','d')}>-</button>
     <span className="optionCounterNumber">{options.room}</span>
     <button className="optionCounterButton" onClick={() => handleOption('room','i')}>+</button>
     </div>
   </div>
 </div>}
</div>
<div className="headerSearchItem">
 <button className="headerBtn" onClick={handleSearch}>Search</button>
</div>
</div> </>}


    </div>
    </div>
  )
}

export default Header