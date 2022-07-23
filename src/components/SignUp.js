import React from 'react'

const SignUp = () => {
  return (
    <>
        <section className="vh-100 ">
                <div className="m d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{borderRadius: "15px"}}>
                                    <div className="card-body p-5">
                                        <h3 className="text-uppercase text-left mb-3">Sign Up</h3>
                                        <form>
                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                                                <label className="form-label" for="form3Example1cg">Full Name</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
                                                <label className="form-label" for="form3Example3cg">Your Email</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="number" id="form3Example4cg" className="form-control form-control-lg" />
                                                <label className="form-label" for="form3Example4cg">Phone Number</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                                                <label className="form-label" for="form3Example4cdg">Password</label>
                                            </div>

                                            <div className="form-check d-flex mb-4">
                                                <input className="form-check-input" type="checkbox" value="" id="form2Example3cg" />
                                                <label className="form-check-label" for="form2Example3g">
                                                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button type="button"
                                                    className="btn btn-danger btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                            </div>

                                            <p className="text-center text-muted mt-3 mb-0">Have already an account? <a href="#!"
                                                className="fw-bold text-body"><u style={{textDecoration: "none"}}>Login here</u></a></p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
    </>
  )
}

export default SignUp