import { auth } from '../config/firebase';
import React from 'react';
import { UserAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import '../../App.css';


const Home = () => {

    const { user, logout } = UserAuth();

    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logout()
            navigate('/')
            console.loh('Logged out!')
        } catch (e) {
            console.log(e.message);
        }
    }

    const navigateToApply = () => {
        navigate('/apply')
      }

    const navigateToHome = () => {
        navigate('/')
      }

    const navigateToFind = () => {
        navigate('/findtutors')
      }

    const navigateToMembers = () => {
        navigate('/members')
      }
    

    return (
        <Box class="mui-container-fluid">
            <Box class="mui-container-fluid">
            <Box container alignContent='center' display='flex' flexDirection='row' justifyContent='right' alignItems='center'
                sx={{
                    boxShadow: 1,
                    height: 120,
                  }}      
            >
            <ul><h1></h1></ul>
                <Box
                sx={{
                    width:100,
                  }}
                >
                    
                    <div>
                        <Button variant='outlined' color='error' onClick={navigateToHome} className='border px-6 py-2 my-4'
                            sx={{
                                width:150,
                                height:65,
                                borderRadius: 10,
                              }}
                        >Home</Button>
                    </div>
                </Box>
                <Box
                sx={{
                    p: 2,
                    width:145,
                  }}
                >
                    <div>
                        <Button variant='outlined' color='error' onClick={navigateToFind} className='border px-6 py-2 my-4'
                            sx={{
                                ml:10,
                                mr:10,
                                width:150,
                                height:65,
                                borderRadius: 10,
                              }}
                        >Find Tutor</Button>
                    </div>
                </Box>
                <Box
                sx={{
                    marginRight: 6,
                  }}
                >
                    <div colorclassName=''>
                        <Button variant='contained' color='error' onClick={handleLogout} className='border px-6 py-2 my-4'
                            sx={{
                                ml:14,
                                width:150,
                                height:65,
                                borderRadius: 10,
                              }}
                        >Logout</Button>
                    </div>
                </Box>
            </Box>
            <Box container alignContent='center' display='flex' flexDirection='row' justifyContent='right' alignItems='center' component="span"
            sx={{
                bgcolor: '#D32F2F',
                boxShadow: 1,
                pr: 7,
              }}
            >
                <div>      
                    <p><Typography color='#ffffff' variant='poster'>Logged in as {user && user.email}</Typography></p>
                </div>
            </Box>
        </Box>
            <Box className="App">
                <Box 
                    style={{
                        width:'100%',
                      }}
                >
                    <React.StrictMode>
                        <img src={require("./img/animlogo.png")}></img>
                    </React.StrictMode>
                </Box>
                <div>
                    <h1>Apply now as a Tutor!</h1>
                    <Button onClick={navigateToApply} variant='contained' color='error'>Apply</Button>
                </div>
                <Box 
                    style={{
                        marginTop:200,
                        
                      }}
                >
                    <Typography color='#b2102f' variant='h6'>Tutor Finder is a Web Application that allows the user to search for tutors and appoint a schedule for tutor sessions.</Typography>
                    <Typography color='#b2102f' variant='h8'>Note: This is made from Scratch by Group 1 using many references inlcuding Sir Jomar's recordings.</Typography>
                
                </Box>
                <Button onClick={navigateToMembers} variant='text' color='error'>See the Creators</Button>
            </Box>
        </Box>
        
    );
};

export default Home;