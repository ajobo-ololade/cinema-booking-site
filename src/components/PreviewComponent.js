import { Box ,Grid,Typography} from '@mui/material'
import React,{useState,useEffect} from 'react'
import {useNavigate,Link} from 'react-router-dom'
import axios from 'axios'
const PreviewComponent = ({id}) => {
    // alert(id)
    const [isloading, setisloading] = useState(true)
    const [isloading1, setisloading1] = useState(true)
    const url=`https://imdb-api.com/en/API/Trailer/k_ak9k9uvj/${id}`
    const url1=`https://imdb-api.com/en/API/Title/k_ak9k9uvj /${id}`
    const [vid, setvid] = useState({})
    const [plot, setplot] = useState({})
    useEffect(() => {
      axios.get(url).then((res)=>{
        if (res.status === 200) {

          console.log(res.data)
          setvid(res.data)
          setisloading(false)

      }
      else {
          console.log("error ocurred")
      }
        
    })
      axios.get(url1).then((res)=>{
        if (res.status === 200) {
            console.log(res.data)
            setplot(res.data)
          
          setisloading1(false)

      }
      else {
          console.log("error ocurred")
      }
       
    })
    },[] )
    
    
    
  return (
    <>
    <Box sx={{height:"90vh",width:'100%'}}>
    {isloading ? <div>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div> :
        <Box sx={{height:'70vh',backgroundColor:'rgb(29,30,31)',width:'100%',display:'flex',justifyContent:'center'}}>
        <iframe style={{width:'50%'}} src={vid.linkEmbed}
    //   src="https://www.imdb.com/video/imdb/vi2959588889/imdb/embed"
        title="Youtube Player"
        frameborder="0"
        allowFullScreen
    />

            {/* <a href="https://imdb-api.com/en/API/Trailer/k_lv17lnyd/${id}/videogallery">hey</a> */}
          </Box>
          }
        <Grid container sx={{mt:5}}>
            <Grid item xs={12} lg={8} sx={{ml:'7rem'}}>
                <Typography variant="h5" color="initial" sx={{fontWeight:700}}>
                    About the Movie
                </Typography>
                {isloading1 ? <div>
                  <div className="d-flex justify-content-center">
                      <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                      </div>
                  </div>
                </div> :
                <p>
                  {plot.plot}
                
                </p> 
                 }
            </Grid>
        </Grid>
    </Box>
    </>
  )
}

export default PreviewComponent