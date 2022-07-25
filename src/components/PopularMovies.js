import { React, useState, useEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Card from './Card'
import axios from 'axios'

const PopularMovies = () => {
    const [isloading, setisloading] = useState(true)
    const [allMovies, setallMovies] = useState([])
    const [error, seterror] = useState("")
    const [pixs, setpixs] = useState({})
    const url2 = "https://imdb-api.com/en/API/MostPopularMovies/k_ak9k9uvj "
    useEffect(() => {
        console.log("yoyoyo")
        makeRequest()
    }, [])

    const makeRequest = () => {
        axios.get(url2).then((res) => {
            if (res.status === 200) {


                console.log(res.data)
                setallMovies(res.data.items)
                setisloading(false)

            }
            else {
                console.log("error ocurred")
            }
        }).catch((err) => {
            seterror(err)
        })
    }
    const [url1, seturl1] = useState('https://res.cloudinary.com/tila09/image/upload/v1656576681/gbpodctajun7sjrqrp2q.jpg')
    return (
        <>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(29,30,31)', pb: '5rem' }}>
                <Grid item xs={12} sm={10.5}>
                    <Typography variant="body" color="initial" sx={{ color: "white", fontWeight: 900, fontSize: '1.7rem' }}>
                        POPULAR MOVIES
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={10.5} sx={{ mt: 5 }} >
                    <Grid container>
                        <Grid item xs={12} sm={12}>
                            <Grid container sx={{ display: "flex", justifyContent: 'space-between', flexWrap: 'revert-layer' }}>
                                {allMovies.slice(0, 5).map((movie, index) => (
                                    <Grid item xs={5.5} sm={3.5} lg={2.2}>
                                        <Box sx={{ width: '100%', height: '40vh', backgroundImage: `url(${movie.image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
                                        <Typography variant="h6" color="initial" sx={{ mt: 1.5, color: 'white' }}>
                                            {movie.title}
                                        </Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'gray' }}>
                                            <span>{allMovies.year}</span>
                                            <span>{movie.imDbRating}</span>
                                            {/* <span>Action</span> */}
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container sx={{ display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(29,30,31)', pb: '5rem' }}>
                <Grid item xs={12} sm={10.5}>
                    <Typography variant="body" color="initial" sx={{ color: "white", fontWeight: 900, fontSize: '1.7rem' }}>
                        TRENDING MOVIES
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={10.5} sx={{ mt: 5 }} >
                    <Grid container>
                        <Grid item xs={12} sm={12}>
                            <Grid container sx={{ display: "flex", justifyContent: 'space-between', flexWrap: 'revert-layer' }}>
                                {allMovies.slice(0, 5).map((movie, index) => (
                                    <Grid item xs={5.5} sm={3.5} lg={2.2}>
                                        <Box sx={{ width: '100%', height: '40vh', backgroundImage: `url(${movie.image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
                                        <Typography variant="h6" color="initial" sx={{ mt: 1.5, color: 'white' }}>
                                            {movie.title}
                                        </Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'gray' }}>
                                            <span>{allMovies.year}</span>
                                            <span>{movie.imDbRating}</span>
                                            {/* <span>Action</span> */}
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>


                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    </>
                )
}

export default PopularMovies