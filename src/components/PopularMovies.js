import {React,useState} from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Card from './Card'

const PopularMovies = () => {
    const [url1, seturl1] = useState('https://res.cloudinary.com/tila09/image/upload/v1656576681/gbpodctajun7sjrqrp2q.jpg')
    return (
        <>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(29,30,31)' ,pb:'5rem'}}>
                <Grid item xs={12} sm={10.5}>
                    <Typography variant="body" color="initial" sx={{ color: "white", fontWeight: 900, fontSize: '1.7rem' }}>
                        POPULAR MOVIES
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={10.5} sx={{mt:5}} >
                    
                            <Grid container sx={{ display: "flex", justifyContent: 'space-between',}}>
                                <Grid item xs={5.5} sm={3.5} lg={2.2}>
                                    <Box sx={{ width: '100%', height: '40vh', backgroundImage: `url(${url1})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
                                    <Typography variant="h6" color="initial" sx={{ mt: 1.5, color: 'white' }}>
                                        Title
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'gray' }}>
                                        <span>2021</span>
                                        <span>+18</span>
                                        <span>Action</span>
                                    </Box>
                                </Grid>
                                <Grid item xs={5.5} sm={3.5} lg={2.2}>
                                    <Box sx={{ width: '100%', height: '40vh', backgroundImage: `url(${url1})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
                                    <Typography variant="h6" color="initial" sx={{ mt: 1.5, color: 'white' }}>
                                        Title
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'gray' }}>
                                        <span>2021</span>
                                        <span>+18</span>
                                        <span>Action</span>
                                    </Box>
                                </Grid>
                                <Grid item xs={5.5} sm={3.5} lg={2.2}>
                                    <Box sx={{ width: '100%', height: '40vh', backgroundImage: `url(${url1})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
                                    <Typography variant="h6" color="initial" sx={{ mt: 1.5, color: 'white' }}>
                                        Title
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'gray' }}>
                                        <span>2021</span>
                                        <span>+18</span>
                                        <span>Action</span>
                                    </Box>
                                </Grid>
                                <Grid item xs={5.5} sm={3.5} lg={2.2}>
                                    <Box sx={{ width: '100%', height: '40vh', backgroundImage: `url(${url1})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
                                    <Typography variant="h6" color="initial" sx={{ mt: 1.5, color: 'white' }}>
                                        Title
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'gray' }}>
                                        <span>2021</span>
                                        <span>+18</span>
                                        <span>Action</span>
                                    </Box>
                                </Grid>
                                <Grid item xs={5.5} sm={3.5} lg={2.2}>
                                    <Box sx={{ width: '100%', height: '40vh', backgroundImage: `url(${url1})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
                                    <Typography variant="h6" color="initial" sx={{ mt: 1.5, color: 'white' }}>
                                        Title
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'gray' }}>
                                        <span>2021</span>
                                        <span>+18</span>
                                        <span>Action</span>
                                    </Box>
                                </Grid>
                                
                            </Grid>

                   
                </Grid>
            </Grid>
        </>
    )
}

export default PopularMovies