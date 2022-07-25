import React, { useState,} from 'react'
import Success from './Success'
import { PaystackButton } from "react-paystack"
import {useNavigate,useLocation, Navigate} from 'react-router-dom'
import axios from 'axios'

const Idconfirm = () => {
    const navigate=useNavigate()
    const publicKey = "pk_test_840ddcce8233c2f6cba3e456d5c832cf541fedc0"
    const url="http://localhost:6005/sendticket"
    const location=useLocation()
    // const paid = useRef(null)
    const [uniqueID, setuniqueID] = useState("")
    const [ind, setind] = useState(1)
    const [phonenumber, setphonenumber] = useState("")
    
    // const [componentProps, setcomponentProps] = useState({})
    var email=location.state.email
    var name=location.state.fullname
    var phone=phonenumber
    var amount=250000
    let newDate = new Date();
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let d = newDate.getDay();
    var date=month + '/' + d + '/' + year;
    console.log(location.state) 
    const obj=location.state
    const componentProps = {
            email,
            amount,
            metadata: {
            name,
            phone,
            },
            publicKey,
            text: "Pay Now",
            onSuccess: () =>

                axios.post(url,{obj,phonenumber:phonenumber,amount:amount,date:date}).then((res)=>{
                    console.log(res)
                    if(res.data.status){
                        alert(res.data.response)
                        navigate("/", {})
                    }
                    else{
                        alert('An error occured please try again')
                        navigate("/", {})
                    }
                }),
            // alert("Thanks for doing business with us! Come back soon!!"),
            onClose: () => alert("Wait! Don't leave :("),
        }
        const payNow=()=>{
            // data-bs-toggle="modal" data-bs-target="#exampleModal02"
        
            if(uniqueID=="" ||phonenumber==""){
                alert("you are yet to fill the id and your number")
            }
            else if(uniqueID==location.state.token && phonenumber!=""){
                setind(0)
                            
                } 
                                
                else{
                    alert('incorrect token submitted')
                }
                
            
        }

  return (
    <>  
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3 " ></div>
                    <div className="col-12 col-md-6" style={{border: "solid 2px red"}}>
                    <div>
                        <div className="">
                            <div className="modal-content">

                            {/* <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div> */}
                            
                            <div class="mb-5 mt-3">
                                <div className="row">

                                    <div className='col-12 col-md-6 mt-2'>
                                        <label for="uniqueID" className="form-label">Enter the ID sent to your email</label>
                                        <input type="text" className="form-control" id="uniqueID" aria-describedby="emailHelp" placeholder='074924' onChange={(e)=>setuniqueID(e.target.value)}/>
                                    </div>

                                    <div className='col-12 col-md-6 mt-2'>
                                        <label for="Amount" className="form-label">Amount</label>
                                        <input type="text" className="form-control" disabled="disabled" id="Amount" aria-describedby="emailHelp" value={location.state.category} placeholder='NGN2,500' />
                                    </div>

                                    <div className='col-12 col-md-12 mt-2'>
                                        <label for="Email" className="form-label">Email</label>
                                        <input type="text" className="form-control" id="Email" aria-describedby="emailHelp" value={location.state.email} disabled="disabled" placeholder='johndoe@gmail.com'/>

                                    </div>

                                    <div className='col-12 col-md-6 mt-2'>
                                        <label for="fullname" className="form-label">Fullname</label>
                                        <input type="text" className="form-control" disabled="disabled" id="fullname" aria-describedby="emailHelp"value={location.state.fullname} placeholder='John doe' />
                                    </div>

                                    <div className='col-12 col-md-6 mt-2'>
                                        <label for="Phonenumber" className="form-label">Phone Number</label>
                                        <input type="number" className="form-control" aria-describedby="emailHelp" placeholder='+2347068364394' onChange={(e)=>setphonenumber(e.target.value)}/>
                                    </div>

                                    

                                </div>
                            </div>

                            <div class="modal-footer">
                                <button type="button" className={ind==1?"btn btn-danger":"d-none"}onClick={()=>payNow()}  >Review</button>
                                
                             <PaystackButton style={{display:"none"}} className={ind==1?"d-none":"btn btn-success"}   {...componentProps} >Pay Now</PaystackButton>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                        
                    </div>
                    <div className="col-12 col-md-3"></div>

                    
                </div>
            </div>
        </div>

        <Success />
    </>
  )
}

export default Idconfirm