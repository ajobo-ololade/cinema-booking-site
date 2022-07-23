import React from 'react'

const Footer = () => {
  return (
    <>

        <footer className="text-center text-white" style={{backgroundColor:"#f1f1f1"}}>
        {/* <!-- Grid container --> */}
        <div className="container pt-4">
            {/* <!-- Section: Social media --> */}
            <section className="mb-4">

            {/* <!-- Facebook --> */}
            <a className=" text-dark m-1 me-3 fs-5" role="button" ><i className="fab fa-facebook-f"></i></a>

            {/* <!-- Twitter --> */}
            <a className=" text-dark m-1 me-3 fs-5" href="#" role="button"><i className="fab fa-twitter"></i></a>

            {/* <!-- google --> */}
            <a className=" text-dark m-1 me-3 fs-5" href="trailblazerforhackelite@gmail.com" role="button"><i className="fab fa-google"></i></a>

            {/* <!-- instagram --> */}
            <a className="text-dark m-1 me-3 fs-5" href="#" role="button"><i className="fab fa-instagram"></i></a>
            
            </section>
        </div>
        {/* <!-- Copyright --> */}

        <div className="text-center text-white p-3" style={{backgroundColor:"rgba(0, 0, 0, 0.9)"}}>
            © 2022 Copyright:
            <a className="text-white" href="#" style={{textDecoration:"none"}}>Ava Cinema</a>
        </div>
        {/* <!-- Copyright --> */}
        </footer>


    </>
  )
}

export default Footer