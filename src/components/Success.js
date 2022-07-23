import React from 'react'

const Success = () => {
  return (
    <>  
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3 " ></div>
                    <div className="col-12 col-md-6" style={{border: "solid 2px red"}}>
                    <div className="modal fade" id="exampleModal02" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal modal-dialog-centered">
                            <div className="modal-content">
                                <div class="modal-body mt-3 mb-3">
                                    <div className="row">
                                        <div className="ph-check-circle" style={{fontSize:"80px", margin:" 0 0 0 180px", color:"#25DB6D"}}></div>
                                        <p className='mt-3' style={{ fontSize:"30pt", margin:" 0 0 0 60px", color:"#25DB6D"}}>Payment Successful </p>
                                    </div>
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

export default Success