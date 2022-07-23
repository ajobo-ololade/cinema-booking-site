import { Box, Grid } from '@mui/material'
import { React, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Landingpage from './Landingpage.css'

const ImageSlider = ({ slides }) => {

    const [currentIndex, setcurrentIndex] = useState(0)
    const sliders = {
        backgroundImage: 'linear-gradient(to right,#fffdc2)'
    }
    const goPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setcurrentIndex(newIndex)
    }
    const goNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setcurrentIndex(newIndex)
    }

    return (
        <>
            <Box sx={{ height: '100%', position: "relative" }}>
                <ArrowForwardIosIcon sx={{ position: 'absolute', top: '50%', transform: 'translate(0, -50%)', right: '35px', fontSize: '45px', color: '#fff', zIndex: 1, cursor: 'pointer' }} onClick={goNext} />
                <ArrowBackIosIcon sx={{ position: 'absolute', top: '50%', transform: 'translate(0, -50%)', left: '35px', fontSize: '45px', color: 'white', zIndex: 1, cursor: 'pointer' }} onClick={goPrevious} />
                <Box style={{ backgroundImage: `url(${slides[currentIndex].url})`, width: '100%', height: '100%', backgroundPosition: "right", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                </Box>
       
                    <Grid container sx={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }} className='tee'>
                        <Grid item xs={12} className='overlay' sx={{height:'100%'}}>
                        </Grid>
                    </Grid>
            
            </Box>

        </>
    )
}

export default ImageSlider