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
            <Grid container sx={{display:'flex',justifyContent:'center',backgroundColor:'rgb(29,30,31)'}}>
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
                                <Card />
                            </TabPanel>
                            <TabPanel value="2"><UpcomingCard/></TabPanel>
                            <TabPanel value="3"><Card /></TabPanel>
                        </TabContext>
                    </Box>
                </Grid>
            </Grid>



        </>
    );
}

export default Featured