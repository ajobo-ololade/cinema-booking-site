import React from 'react'

const BookTicket = () => {
  return (
    <>

        <div className="container shadow-sm mt-4">
            <div className="row">
                <div className="col-12 mt-3 mb-3">
                    <div className="row ">
                        <div className="col-4">
                            <h5>Carnival: Annex Mall, Borivali</h5>
                            <p>Carnival: Annex Mall, Borivali</p>
                        </div>
                        <div className="col-4">
                            <span className='h6 mb-4'> 6:00am</span>
                            <div className='h6'>2/10/2022</div>
                        </div>
                        <div className="col-4">
                            <button>Book ticket</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default BookTicket