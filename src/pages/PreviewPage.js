import { Grid } from '@mui/material';
import React from 'react'
import Cast from '../components/Cast';
import LandingpageNav from '../components/LandingpageNav'
import PreviewComponent from '../components/PreviewComponent';
const PreviewPage = () => {
    return (
        <>
            <LandingpageNav />
            <PreviewComponent />
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={12} sm={11}>
                    <Cast Crew={'Crew'} />
                    <Cast Crew={'Cast'} mt={0}/>
                </Grid>
            </Grid>

        </>
    )
}

export default PreviewPage