import React from 'react'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Heropage from '../components/Heropage'
import LandingpageNav from '../components/LandingpageNav'
import PopularMovies from '../components/PopularMovies'

const LandingPage = () => {
  return (
   <>
   <LandingpageNav/>
    <Heropage />
    <Featured />
    <PopularMovies/> 
    <Footer/>
   </>
  )
}

export default LandingPage