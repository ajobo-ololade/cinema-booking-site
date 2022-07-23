import { Box } from '@mui/material'
import React,{useReact,useEffect} from 'react'
import ImageSlider from './ImageSlider'
import axios from 'axios'
const Heropage = () => {
   
    const slides = [
        {
            url: 'https://res.cloudinary.com/tila09/image/upload/v1658579538/action1_omnhkh.jpg',
            title: 'CITY DREAMS',
            about:'A small town cinema in rural Ireland becomes the setting for a dramatic struggle between faith and passion'
        },
        {
            url: 'https://res.cloudinary.com/tila09/image/upload/v1658581034/Nollywood_zdp0ax.jpg',
            title: 'PAIR',
            about:'A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep'
        },
        {
            url: 'https://res.cloudinary.com/tila09/image/upload/v1658579692/meangirls_ev8vd0.jpg',
            title: 'MEAN GIRLS',
            about:'A Hollywood studio executive is being sent death threats by a writer whose script he rejected, but which one?'
        },
        
        {
            url: 'https://res.cloudinary.com/tila09/image/upload/v1658581701/birdofprey1_cqmzrf.jpg',
            title: 'HIGH SCHOOL GIRLS',
            about:'A director is forced to work with his ex-wife, who left him for the boss of the studio bankrolling his new film.'
        }
    ]

    return (
        <>
            <Box sx={{ width: '100%', height:{xs:'50vh',md:'35rem',lg:'93vh'}}}>
                <ImageSlider slides={slides} />
            </Box>
        </>
    )
}

export default Heropage