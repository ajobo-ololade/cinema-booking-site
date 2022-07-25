import { Container,Box ,Grid,Typography} from '@mui/material'
import React,{useState,useEffect} from 'react'
import {useNavigate,Link} from 'react-router-dom'
import axios from 'axios'
const Cast = ({Crew,mt,id}) => {
    
    const url1=`https://imdb-api.com/en/API/FullCast/k_ak9k9uvj/${id}`
    const [info, setinfo] = useState({})
    const [isloading, setisloading] = useState(true)
    useEffect(() => {
      axios.get(url1).then((res)=>{
        console.log(res.data)
        if (res.status === 200) {


            console.log(res.data)
            setinfo(res.data)
            setisloading(false)

        }
        else {
            console.log("error ocurred")
        }
    })
    },[] )
    
    return (
        <>
            {isloading ? <div>
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div> :
                <Grid container sx={{ mt:mt ,borderTop:1, borderBottom:1,pb:5}}>
                    <Grid item xs={12} sx={{mt:2}}>
                        <Typography variant="h5" color="initial" sx={{ ml: 5, fontWeight: 700 }}>
                            {Crew}
                        </Typography>
                    </Grid>
                    {info.actors.slice(0,6).map((actor)=>(
                    <Grid item xs={3} lg={2} sx={{ mt: 3 }}>
                        

                        
                        <Grid container >
                            <Grid item xs={12} sx={{ display: "flex", justifyContent: 'center' }}>
                                <Box component='img' src={actor.image} alt='' sx={{ width: '120px', height: '120px', borderRadius: '50%' }} />
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", justifyContent: 'center' }}>
                                <Typography variant="body1" color="initial" sx={{ fontWeight: 700 }}>
                                    Ravi Raghavend
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", justifyContent: 'center' }}>
                                <Typography variant="body1" color="initial">
                                    Actor
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>))}
                   
                </Grid>

                    }
        </>
    )
}

export default Cast