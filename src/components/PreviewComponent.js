import { Box ,Grid,Typography} from '@mui/material'
import React,{useState,useEffect} from 'react'
import {useNavigate,Link} from 'react-router-dom'
import axios from 'axios'
const PreviewComponent = ({id}) => {
    // alert(id)
      const url=`https://imdb-api.com/en/API/Trailer/k_k7roe474/${id}`
      const url1=`https://imdb-api.com/en/API/Title/k_k7roe474/${id}`
    const [vid, setvid] = useState({})
    const [plot, setplot] = useState({})
    useEffect(() => {
      axios.get(url).then((res)=>{
        console.log(res.data)
        setvid(res.data)
    })
      axios.get(url1).then((res)=>{
        console.log(res.data)
        setplot(res.data)
    })
    },[] )
    
    
    
  return (
    <>
    <Box sx={{height:"90vh",width:'100%'}}>
        <Box sx={{height:'70vh'}}>
        <iframe style={{width:"1500px", height:"500px"}} src={vid.linkEmbed}
    //   src="https://www.imdb.com/video/imdb/vi2959588889/imdb/embed"
        title="Youtube Player"
        frameborder="0"
        allowFullScreen
    />

            {/* <a href="https://imdb-api.com/en/API/Trailer/k_lv17lnyd/${id}/videogallery">hey</a> */}
        </Box>
        <Grid container>
            <Grid item xs={12} lg={8} sx={{ml:'7rem'}}>
                <Typography variant="h5" color="initial" sx={{fontWeight:700}}>
                    About the Movie
                </Typography>
                <p>
                  {plot.plot}
               
                </p>
            </Grid>
        </Grid>
    </Box>
    </>
  )
}

export default PreviewComponent