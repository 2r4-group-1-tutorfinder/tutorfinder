import { Box, Grid, Typography } from '@mui/material';
import { auth } from '../config/firebase';
import React from 'react';

export default function Members () {
    console.log(auth?.currentUser?.email);
    return (
        <>
            <Box className='App'
                    style={{
                        transform: "scale(1)",
                      }}
                >
                    <React.StrictMode>
                        <img src={require("./img/animlogo.png")}></img>
                    </React.StrictMode>
            </Box>
            <Box display='flex' justifyContent='center'>
                <Box display='flex' flexDirection='column'>
                    <Grid>
                        <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center'
                            sx={{
                                minWidth: 100,
                                margin: 2,
                              }}
                        >
                            <React.StrictMode>
                            <img src={require("./img/img2.png")}></img>
                            </React.StrictMode>
                            <Typography variant='h6'>JAY EMERALD V. CHAVES</Typography>
                        </Box>
                        <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center'
                            sx={{
                                minWidth: 100,
                                margin: 2,
                              }}
                        >
                            <React.StrictMode>
                            <img src={require("./img/img3.png")}></img>
                            </React.StrictMode>
                            <Typography variant='h6'>DAVE L. GARGUEÑA</Typography>
                        </Box>
                    </Grid>
                </Box>
                <Box display='flex' flexDirection='column'>
                    <Grid>
                        <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center'
                            sx={{
                                minWidth: 100,
                                margin: 2,
                              }}
                        >
                            <React.StrictMode>
                            <img src={require("./img/img1.png")}></img>
                            </React.StrictMode>
                            <Typography variant='h6'>IBRAHIM B. CAMID</Typography>
                        </Box>
                        <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center'
                            sx={{
                                minWidth: 100,
                                margin: 2,
                              }}
                        >
                            <React.StrictMode>
                            <img src={require("./img/img4.png")}></img>
                            </React.StrictMode>
                            <Typography variant='h6'>NEIL ANGELO L. PANGAN</Typography>
                        </Box>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}