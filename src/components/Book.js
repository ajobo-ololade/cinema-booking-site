import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate,useLocation} from 'react-router-dom'
import Idconfirm from './Idconfirm'
import LandingpageNav from './LandingpageNav'


const Book = () => {
    const location=useLocation()
    const [profilepic, setprofilepic] = useState("")
    const [fullname, setfullname] = useState("")
    const [email, setemail] = useState("")
    const [categorys, setcategorys] = useState("VVIP (NGN2,500)")
    const [selected, setselected] = useState("")
    const url='http://localhost:6005/sendtoken'
    const navigate=useNavigate()
    
    const avatar = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            setprofilepic(reader.result)
        }
   
    }
    const category=(e)=>{
        setcategorys(e.target.value)
    }
    const selectThis=(e)=>{
        setselected(e.target.value)
    }
     const toContinue=()=>{
        if(profilepic==""||fullname==""||email==""||selected==""){
            alert("Please you are to fill all the inputs")
        }
        const object={
            email:email,
            name:fullname,
        }
        axios.post(url,object).then((res)=>{
            if (res.data.status){
                var obj={
                    cinemaAddress:location.state.cinemaAddress,
                    cinema:location.state.cinema,
                    time:location.state.time,
                    fullname:fullname,
                    email:email,
                    profilePic:profilepic,
                    category:categorys,
                    selected:selected,
                    token:res.data.token

                }
                navigate('/payment',{state:obj})
            }
            else{
                alert(`${res.status.message} please try again in some seconds`)
            }
            console.log(res.data)
        })
    }
  return (
    <>  
        <LandingpageNav/>
        <div className='lineargrad pt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3 " ></div>
                    <div className="col-12 col-md-6" >
                    <div className="" >
                    {/* modal-dialog modal-lg modal-dialog-centered */}
                        <div className="">
                            <div className="">
                            {/* <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div> */}
                            <div class="mt-3 mb-5 bg-light p-5">
                                <div className="row">

                                    <div className='col-12 col-md-6 mt-3'>
                                        <label for="Fullname" className="form-label">Enter Fullname</label>
                                        <input type="text" className="form-control" id="Fullname" aria-describedby="emailHelp" placeholder='John Doe' onChange={(e)=>setfullname(e.target.value)} />
                                    </div>

                                    <div className='col-12 col-md-6 mt-3'>
                                        <label for="Email" className="form-label">Email</label>
                                        <input type="text" className="form-control" id="Email" aria-describedby="emailHelp" placeholder='Email address' onChange={(e)=>setemail(e.target.value)} />
                                    </div>

                                    <div className='col-12 col-md-6 mt-3'>
                                        <label for="Cinema" className="form-label">Select Cinemas</label>
                                        <input type="text" className="form-control" disabled="disabled" id="Cinema" aria-describedby="emailHelp" value={location.state.cinema} placeholder="Netflix studio"/>

                                    </div>

                                    <div className='col-12 col-md-6 mt-3'>
                                        <label for="Time" className="form-label">Time showing</label>
                                        <input type="text" className="form-control" id="Email" disabled="disabled" aria-describedby="emailHelp" value={location.state.time} placeholder="2:30pm" />
                                    </div>

                                    <div className='row ms-1 mt-3'>
                                        <h6 className='mt-1'>Choose your Sit Categories</h6> 
                                        <div className="form-check col-4 mt-2">
                                            <input class="form-check-input" type="radio"
                                             onChange={(e)=>category(e)} 
                                             name="exampleRadios" id="exampleRadios1" 
                                             value=" VVIP (NGN2,500)"
                                             checked={categorys === "VVIP (NGN2,500)"}  />
                                            <label class="form-check-label" for="exampleRadios1"> VVIP (NGN2,500) </label>
                                        </div>

                                        <div className="form-check col-4 mt-2">
                                            <input 
                                            class="form-check-input"
                                            
                                            type="radio" 
                                            name="exampleRadios" 
                                            id="exampleRadios2" 
                                            value="VIP (NGN2,300)" 
                                            onChange={(e)=>category(e)}
                                            checked={categorys === "VIP (NGN2,300)"} 
                                             />
                                            <label class="form-check-label" for="exampleRadios2">VIP (NGN2,300)</label>
                                        </div>

                                        <div className="form-check col-4 mt-2">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" 
                                            onChange={(e)=>category(e)} 
                                            checked={categorys === "Regular (NGN2,000)"} 
                                            value="Regular (NGN2,000)" />
                                            <label class="form-check-label" for="exampleRadios2">Regular (NGN2,000)</label>
                                        </div>

                                        <select className='form-control mt-4'onChange={(e)=>selectThis(e)} >
                                            <option value="" disabled="disabled" selected="selected" className='form-control'>Choose sit number</option>
                                            <option value="1">1</option>
                                            <option value="2">1</option>
                                        </select>

                                        <div className=" col-12 col-md-4 mt-3 mt-md-5">
                                            <div>
                                                <label for='formFileLg' className='form-label btn btn-outline-dark bg-danger'> Upload your Image </label>
                                                <input type="file" hidden id='formFileLg' onChange={(e)=>avatar(e)}/>
                                            </div>
                                        </div>

                                        <div className="col-4 mt-3">
                                            <img src={profilepic} className='rounded-circle' alt="" srcset="" style={{width:"100px", height:"100px"}} />
                                        </div>
                                        

                                    </div>

                                </div>
                            </div>
                            {/* data-bs-toggle="modal" data-bs-target="#exampleModal01" */}
                            <div class="modal-footer">
                                <button type="button" className="btn btn-primary"  onClick={()=>toContinue()} >Continue</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                        
                    </div>
                    <div className="col-12 col-md-3"></div>

                    
                </div>
            </div>
        </div>

    </>
  )
}

export default Book