import React from 'react'
import Featured from '../components/Featured'
import Heropage from '../components/Heropage'
import LandingpageNav from '../components/LandingpageNav'

const LandingPage = () => {
  return (
   <>
   <LandingpageNav/>
    <Heropage />
    <Featured />
   </>
  )
}

export default LandingPage