import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'


const Cast = ({Crew,mt}) => {
    return (
        <>

                <Grid container sx={{ mt:mt ,borderTop:1, borderBottom:1,pb:5}}>
                    <Grid item xs={12} sx={{mt:2}}>
                        <Typography variant="h5" color="initial" sx={{ ml: 5, fontWeight: 700 }}>
                            {Crew}
                        </Typography>
                    </Grid>
                    <Grid item xs={3} lg={2} sx={{ mt: 3 }}>
                        <Grid container >
                            <Grid item xs={12} sx={{ display: "flex", justifyContent: 'center' }}>
                                <Box component='img' src='https://res.cloudinary.com/tila09/image/upload/v1656576681/gbpodctajun7sjrqrp2q.jpg' alt='' sx={{ width: '120px', height: '120px', borderRadius: '50%' }} />
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
                    </Grid>
                    <Grid item xs={3} lg={2} sx={{ mt: 3 }}>
                        <Grid container >
                            <Grid item xs={12} sx={{ display: "flex", justifyContent: 'center' }}>
                                <Box component='img' src='https://res.cloudinary.com/tila09/image/upload/v1656576681/gbpodctajun7sjrqrp2q.jpg' alt='' sx={{ width: '120px', height: '120px', borderRadius: '50%' }} />
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
                    </Grid>
                    <Grid item xs={3} lg={2} sx={{ mt: 3 }}>
                        <Grid container >
                            <Grid item xs={12} sx={{ display: "flex", justifyContent: 'center' }}>
                                <Box component='img' src='https://res.cloudinary.com/tila09/image/upload/v1656576681/gbpodctajun7sjrqrp2q.jpg' alt='' sx={{ width: '120px', height: '120px', borderRadius: '50%' }} />
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
                    </Grid>
                    <Grid item xs={3} lg={2} sx={{ mt: 3 }}>
                        <Grid container >
                            <Grid item xs={12} sx={{ display: "flex", justifyContent: 'center' }}>
                                <Box component='img' src='https://res.cloudinary.com/tila09/image/upload/v1656576681/gbpodctajun7sjrqrp2q.jpg' alt='' sx={{ width: '120px', height: '120px', borderRadius: '50%' }} />
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
                    </Grid>
                    <Grid item xs={3} lg={2} sx={{ mt: 3 }}>
                        <Grid container >
                            <Grid item xs={12} sx={{ display: "flex", justifyContent: 'center' }}>
                                <Box component='img' src='https://res.cloudinary.com/tila09/image/upload/v1656576681/gbpodctajun7sjrqrp2q.jpg' alt='' sx={{ width: '120px', height: '120px', borderRadius: '50%' }} />
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
                    </Grid>
                    <Grid item xs={3} lg={2} sx={{ mt: 3 }}>
                        <Grid container >
                            <Grid item xs={12} sx={{ display: "flex", justifyContent: 'center' }}>
                                <Box component='img' src='https://res.cloudinary.com/tila09/image/upload/v1656576681/gbpodctajun7sjrqrp2q.jpg' alt='' sx={{ width: '120px', height: '120px', borderRadius: '50%' }} />
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
                    </Grid>
                </Grid>


        </>
    )
}

export default Cast