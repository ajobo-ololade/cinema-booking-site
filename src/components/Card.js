import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'

const Card = () => {
    const [url1, seturl1] = useState('https://res.cloudinary.com/tila09/image/upload/v1656576681/gbpodctajun7sjrqrp2q.jpg')
  return (
    <>
    <Grid container>
        <Grid item xs={12} sm={12}>
            <Grid container sx={{display:"flex",justifyContent:'space-between'}}>
                <Grid item xs={6} sm={3.5} lg={1.8} sx={{height:'40vh'}}>
                    <Box   sx={{width:'100%',height:'100%',backgroundImage:`url(${url1})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}/>
                    <Typography variant="h6" color="initial" sx={{mt:1.5,color:'white'}}>
                        Title
                    </Typography>
                    <Box sx={{display:'flex',justifyContent:'space-between',color:'gray'}}>
                        <span>2021</span>
                        <span>+18</span>
                        <span>Action</span>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3.5} lg={1.8}>
                    lorem lorem
                </Grid>
                <Grid item xs={6} sm={3.5} lg={1.8}>
                    lorem lorem
                </Grid>
                <Grid item xs={6} sm={3.5} lg={1.8}>
                    lorem lorem
                </Grid>
                <Grid item xs={6} sm={3.5} lg={1.8}>
                    lorem lorem
                </Grid>
                <Grid item xs={6} sm={3.5} lg={1.8}>
                    lorem lorem
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    </>
  )
}

export default Card