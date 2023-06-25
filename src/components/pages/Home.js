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

    return (
        <Box class="mui-container-fluid">
            <Box container alignContent='center' display='flex' flexDirection='row' justifyContent='right' alignItems='center'
                sx={{
                    boxShadow: 1,

                  }}      
            >
                <Box
            sx={{
              }}  
            >
                <h1>TUTOR FINDER</h1>
            </Box>
            <ul><h1></h1></ul>
                <Box
                sx={{
                    minWidth: 100,
                    pl: 0.7,
                    marginLeft: 3,
                  }}
                >
                    <Link variant='contained' to='/' className='underline'><Typography variant='inherit' color='#b2102f'>HOME</Typography></Link>
                </Box>
                <Box
                sx={{
                    p: 2,
                    marginRight: 6,
                  }}
                >
                    <Link to='/findtutors'><Typography variant='inherit' color='#b2102f'>SEARCH</Typography></Link>
                </Box>
                <Box
                sx={{
                    marginRight: 2,
                  }}
                >
                    <div colorclassName=''>
                        <Button variant='contained' color='error' onClick={handleLogout} className='border px-6 py-2 my-4'>Logout</Button>
                    </div>
                </Box>
            </Box>
            <Box container alignContent='center' display='flex' flexDirection='row' justifyContent='right' alignItems='center' component="span"
            sx={{
                bgcolor: '#D32F2F',
                boxShadow: 1,
                pr: 2.1,
              }}
            >
                <div>      
                    <p><Typography color='#ffffff' variant='poster'>Logged in as {user && user.email}</Typography></p>
                </div>
            </Box>
            <Box className="App">
                <Box 
                    style={{
                        transform: "scale(1)",
                        
                      }}
                >
                    <React.StrictMode>
                        <img src={require("./img/animlogo.gif")}></img>
                    </React.StrictMode>
                </Box>
                <Box>
                    <Typography color='#b2102f' variant='h5'>Tutor Finder is a Web Application that allows the user to search for tutors and appoint a schedule for tutor sessions.</Typography>
                    <Typography color='#b2102f' variant='h8'>Note: This is made from Scratch by Group 1 using many references inlcuding Sir Jomar's recordings.</Typography>
                </Box>
            </Box>
        </Box>
        
    );
};

export default Home;