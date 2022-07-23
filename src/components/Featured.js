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
  

    

    return (
        <>
            <Grid container sx={{display:'flex',justifyContent:'center',backgroundColor:'rgb(29,30,31)',pt:'5rem',pb:'5rem'}}>
                <Grid item xs={12} md={10}>
                    <Box >
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Item One" value="1" sx={{ color: 'white' }} />
                                    <Tab label="Item Two" value="2" sx={{ color: 'white' }} />
                                    <Tab label="Item Three" value="3" sx={{ color: 'white' }} />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <Card url2={"https://imdb-api.com/en/API/MostPopularMovies/k_ehshcpk4"}/>
                            </TabPanel>
                            <TabPanel value="2"><Card url2={"https://imdb-api.com/en/API/ComingSoon/k_ehshcpk4"}/></TabPanel>
                            <TabPanel value="3"><Card url2={"https://imdb-api.com/en/API/InTheaters/k_ehshcpk4"} /></TabPanel>
                        </TabContext>
                    </Box>
                </Grid>
            </Grid>



        </>
    );
}

export default Featured