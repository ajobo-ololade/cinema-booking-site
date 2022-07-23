import React,{useEffect,useState} from 'react'
import axios from 'axios'
// import Footer from './Footer'
import { TabContext, TabPanel, TabList } from '@mui/lab';
import { Box, Container, Grid, Tab } from '@mui/material';
import Card from './Card';
import UpcomingCard from './UpcomingCard';
    

const Featured = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  

    // k_ehshcpk4

    return (
        <>
            <Grid container sx={{display:'flex',justifyContent:'center',backgroundColor:'rgb(29,30,31)',pt:'5rem',pb:'5rem'}}>
                <Grid item xs={12} md={11}>
                    <Box sx={{ height: '60vh'}}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList  onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="ALL" value="1" sx={{ color: 'white' }} />
                                    <Tab label="Upcoming Movies" value="2" sx={{ color: 'white' }} />
                                    <Tab label="Popular Movies" value="3" sx={{ color: 'white' }} />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <Card url2={"https://imdb-api.com/en/API/MostPopularMovies/k_059a631y"}/>
                            </TabPanel>
                            <TabPanel value="2"><Card url2={"https://imdb-api.com/en/API/ComingSoon/k_059a631y"}/></TabPanel>
                            <TabPanel value="3"><Card url2={"https://imdb-api.com/en/API/InTheaters/k_059a631y"} /></TabPanel>
                        </TabContext>
                    </Box>
                </Grid>
            </Grid>



        </>
    );
}

export default Featured