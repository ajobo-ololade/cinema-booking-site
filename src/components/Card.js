import React, { useState,useEffect} from 'react'
import { TabContext, TabPanel, TabList } from '@mui/lab';
import { Box, Container, Grid, Tab,Typography } from '@mui/material';
import axios from 'axios'
// import Card from './Card';

const Card = () => {
      //const [num, setnum] = useState(0)
      const [allMovies, setallMovies] = useState([])
      const [error, seterror] = useState("")
      const url="https://imdb-api.com/en/API/MostPopularMovies/k_lv17lnyd"
      // "https://imdb-api.com/en/API/FullCast/k_lv17lnyd/tt1375666"
      // "https://imdb-api.com/en/API/Top250Movies/k_d6a0lkoi"
      // "http://www.omdbapi.com/?i=tt3896198&apikey=c7e3c7b8"
      // "https://imdb-api.com/en/API/Top250Movies/k_lv17lnyd"
      const [isloading, setisloading] = useState(true)
      
      useEffect(()=>{
          console.log("yoyoyo")
          makeRequest()
      },[])
      
      const makeRequest=()=>{
          axios.get(url).then((res)=>{
              if (res.status===200) {
                  
             
              console.log(res.data)
              setallMovies(res.data.items) 
              setisloading(false)
                  
          }
              else{
                  console.log("error ocurred")
              }
          }).catch((err)=>{
              seterror(err)
          })
        }
    const [url1, seturl1] = useState('https://res.cloudinary.com/tila09/image/upload/v1656576681/gbpodctajun7sjrqrp2q.jpg')
  return (
    <>
     {isloading? <div>
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            </div>
        </div>:
        <Grid container>
        <Grid item xs={12} sm={12}>
            <Grid container sx={{display:"flex",justifyContent:'space-between'}}>
                {allMovies.slice(0,6).map((movie)=>(
                <Grid item xs={6} sm={3.5} lg={1.8} >
                    <Box   sx={{width:'100%',height:'40vh',backgroundImage:`url(${movie.image})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}/>
                    <Typography variant="" color="initial" sx={{mt:1.5,color:'white',fontWeight:"20px"}}>
                        {movie.title}
                    </Typography>
                    <Box sx={{display:'flex',justifyContent:'space-between',color:'gray'}}>
                        <span>{movie.year}</span>
                        <span>{movie.imDbRating}</span>
                        <span>Action</span>
                    </Box>
                </Grid>
                ))}
            </Grid>
        </Grid>
    </Grid>}
    </>
  )
}

export default Card