import { Box ,Grid,Typography} from '@mui/material'
import React from 'react'

const PreviewComponent = () => {
  return (
    <>
    <Box sx={{height:"90vh",width:'100%'}}>
        <Box sx={{height:'70vh'}}>
            <video style={{width:'100%',height:'100%'}}/>
        </Box>
        <Grid container>
            <Grid item xs={12} lg={8} sx={{ml:'7rem'}}>
                <Typography variant="h5" color="initial" sx={{fontWeight:700}}>
                    About the Movie
                </Typography>
                <p>
                A biographical drama based on the life of former ISRO scientist Nambi Narayanan, who fought years on end for justice after being falsely accused of espionage.A biographical drama based on the life of former ISRO scientist Nambi Narayanan, who fought years on end for justice after being falsely accused of espionage.
                </p>
            </Grid>
        </Grid>
    </Box>
    </>
  )
}

export default PreviewComponent