import { Box } from '@mui/material'
import React,{useReact,useEffect} from 'react'
import ImageSlider from './ImageSlider'
import axios from 'axios'
const Heropage = () => {
   
    const slides = [
        {
            url: 'https://res.cloudinary.com/tila09/image/upload/v1656576681/gbpodctajun7sjrqrp2q.jpg',
            title: '',
        },
        {
            url: 'https://res.cloudinary.com/tila09/image/upload/v1656576463/wgnkk9satepaycuvpxlz.jpg',
            title: '',
        },
        {
            url: 'https://res.cloudinary.com/tila09/image/upload/v1655993056/h5om2bp3dsoylir2uva4.jpg',
            title: '',
        },
        {
            url: 'https://res.cloudinary.com/tila09/image/upload/v1656070645/wxidu1jvks2exaqmjt68.jpg',
            title: '',
        }
    ]

    return (
        <>
            <Box sx={{ width: '100%', height:{xs:'50vh',lg:'93vh'}}}>
                <ImageSlider slides={slides} />
            </Box>
        </>
    )
}

export default Heropage