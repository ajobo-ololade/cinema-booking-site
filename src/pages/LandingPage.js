import React from 'react'
import Carousels from '../components/Carousels'
import Featured from '../components/Featured'
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
   </>
  )
}

export default LandingPage