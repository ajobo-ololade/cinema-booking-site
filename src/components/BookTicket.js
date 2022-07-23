import React,{useState, useEffect,useRef} from 'react'
import Book from './Book'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const BookTicket = () => {
    const navigate=useNavigate()
    const cinema =useRef(null)
    const address=useRef(null)
    const time =  useRef(null)
    const date =  useRef(null)
    const Book=()=>{
            navigate('/book',{state:{cinema:cinema.current.innerText,cinemaAddress:address.current.innerText,date:date.current.innerText,time:time.current.innerText}})
    }
   
  return (
    <>

        <div className="container shadow-sm mt-4">
            <div className='text-left h3'>Showing At</div>
            <div className="row">
                <div className="col-12 mt-3 mb-3">
                    <div className="row ">
                        <div className="col-4">
                            <h5 id="here" ref={cinema}>Carnival: Annex Mall, Borivali</h5>
                            <p id="para"ref={address}>Carnival: Annex Mall, Borivali</p>
                        </div>
                        <div className="col-4">
                            <span ref={time} className='h6 mb-4'> 6:00am</span>
                            <div ref={date} className='h6'>2/10/2022</div>
                        </div>
                        <div className="col-4">
                            <button className='btn btn-danger' onClick={()=>Book()}>Book ticket</button>
                            {/* <Book/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default BookTicket