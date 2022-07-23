import React, { useState } from 'react'
import Success from './Success'

const Idconfirm = () => {
    const [uniqueID, setuniqueID] = useState("")
    const [email, setemail] = useState("")
    const [fullname, setfullname] = useState("")
    const [phonenumber, setphonenumber] = useState("")

  return (
    <>  
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3 " ></div>
                    <div className="col-12 col-md-6" style={{border: "solid 2px red"}}>
                    <div className="modal fade" id="exampleModal01" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg modal-dialog-centered">
                            <div className="modal-content">

                            {/* <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div> */}
                            
                            <div class="modal-body mb-5 mt-3">
                                <div className="row">

                                    <div className='col-12 col-md-6 mt-2'>
                                        <label for="uniqueID" className="form-label">Enter the ID sent to your email</label>
                                        <input type="text" className="form-control" id="uniqueID" aria-describedby="emailHelp" placeholder='074924' onChange={(e)=>setuniqueID(e.target.value)}/>
                                    </div>

                                    <div className='col-12 col-md-6 mt-2'>
                                        <label for="Amount" className="form-label">Amount</label>
                                        <input type="text" className="form-control" disabled="disabled" id="Amount" aria-describedby="emailHelp" placeholder='NGN2,500' />
                                    </div>

                                    <div className='col-12 col-md-12 mt-2'>
                                        <label for="Email" className="form-label">Email</label>
                                        <input type="text" className="form-control" id="Email" aria-describedby="emailHelp" placeholder='johndoe@gmail.com' onChange={(e)=>setemail(e.target.value)}/>

                                    </div>

                                    <div className='col-12 col-md-6 mt-2'>
                                        <label for="fullname" className="form-label">Fullname</label>
                                        <input type="text" className="form-control" id="fullname" aria-describedby="emailHelp" placeholder='John doe' onChange={(e)=>setfullname(e.target.value)} />
                                    </div>

                                    <div className='col-12 col-md-6 mt-2'>
                                        <label for="Phonenumber" className="form-label">Phone Number</label>
                                        <input type="text" className="form-control" id="fullname" aria-describedby="emailHelp" placeholder='+2347068364394' onChange={(e)=>setphonenumber(e.target.value)}/>
                                    </div>

                                    

                                </div>
                            </div>

                            <div class="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal02">Pay Now</button>
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