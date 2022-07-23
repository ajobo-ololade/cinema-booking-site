import { Box, Button, Grid, Typography } from '@mui/material'
import { React, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Landingpage from './Landingpage.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';

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
            <Box sx={{ height: '100%', position: "relative"}}>
                <ArrowForwardIosIcon sx={{ position: 'absolute', top: '50%', transform: 'translate(0, -50%)', right: {xs:0,lg:'35px'}, fontSize: '45px', color: '#fff', zIndex: 1, cursor: 'pointer' }} onClick={goNext} />
                <ArrowBackIosIcon sx={{ position: 'absolute', top: '50%', transform: 'translate(0, -50%)', left:{xs:0,lg:'35px'}, fontSize: '45px', color: 'white', zIndex: 1, cursor: 'pointer' }} onClick={goPrevious} />
                <Box style={{ backgroundImage: `url(${slides[currentIndex].url})`, width: '100%', height: '100%', backgroundPosition: "right", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                </Box>

                <Grid container sx={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', display: "flex", alignItems: 'center', justifyContent: 'center' }} className='tee'>
                    <Grid item xs={11} sm={10.5}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography variant="b" color="initial" sx={{ background: 'rgb(257,179,14)', fontSize: {xs:'.8rem',sm:'1rem',lg:'1.5rem'}, fontWeight: 700, p: .5 }}>
                                    New
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ mt:{xs:2,md:3 }}}>
                                <Typography variant="h2" color="initial" sx={{ color: 'white', fontWeight: 900,fontSize: {xs:'1.5rem',sm:'2.4rem',md:'2.8rem',lg:'4rem'} }}>
                                  {slides[currentIndex].title}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ mt:{xs:2,md:3} }}>
                                <Box sx={{ width: '50%', display: 'flex' }}>
                                    <Typography variant="body1" color="initial" sx={{ mr: 2, color: 'white' }}>2021</Typography>
                                    <Typography variant="body1" color="initial" sx={{ mr: 2, color: 'white', border: 1, pl: 1, pr: 1, borderRadius: '33px', borderColor: 'red' }}>+18</Typography>
                                    <Typography variant="body1" color="initial" sx={{ color: 'white' }}>Action</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sx={{ mt:{xs:2,md:3}  }}>
                                <Grid container>
                                    <Grid item xs={12} sm={4.5}>
                                        <Typography variant="body1" color="initial" sx={{color:'white',fontSize: {xs:'.8rem',sm:'1rem',lg:'1.3rem'}}}>
                                        {slides[currentIndex].about}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{mt:{xs:2,md:3}  }}>
                                <Grid container>
                                    <Grid item xs={12} sm={6}>
                                       <Button variant='contained' sx={{backgroundColor:'red',pl:3,pr:3,pb:1,pt:1,mr:5}}><PlayArrowIcon/>Play Now</Button>
                                       <Button variant='contained' sx={{backgroundColor:'red',pl:3,pr:3,pb:1,pt:1}}><AddIcon/>My List</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}

export default ImageSlider