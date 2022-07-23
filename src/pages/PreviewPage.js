import { Grid } from '@mui/material';
import React from 'react'
import Cast from '../components/Cast';
import {useNavigate,useLocation} from 'react-router-dom'
import LandingpageNav from '../components/LandingpageNav'
import PreviewComponent from '../components/PreviewComponent';
import Footer from '../components/Footer';
import BookTicket from '../components/BookTicket';
const PreviewPage = () => {
    const location=useLocation()
    var id =location.state.urlId;
    return (
        <>
            <LandingpageNav />
            <PreviewComponent id={id} />
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={12} sm={11}>
                    {/* <Cast Crew={'Crew'} id={id} /> */}
                    <Cast Crew={'Cast'} id={id} mt={0}/>
                </Grid>
            </Grid>
            <BookTicket />
            <Footer/>

        </>
    )
}

export default PreviewPage