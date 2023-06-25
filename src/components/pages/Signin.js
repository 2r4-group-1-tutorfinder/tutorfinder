import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext';
import Button from '@mui/material/Button';
import '../../App.css';
import { Box, List, TextField } from '@mui/material';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try{
            await signIn(email, password)
            navigate('/')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }
    

    return(
        <Box className='App'>
            <Box diplsay='flex' alignContent='right' display='flex' flexDirection='row' justifyContent='right'
            sx={{
                boxShadow: 1,
                pr:5,
              }}  
            >
                <h1>TUTOR FINDER</h1>
            </Box>
            <Box container alignContent='center' display='flex' flexDirection='row' justifyContent='right' alignItems='center' component="span"
            sx={{
                bgcolor: '#D32F2F',
                boxShadow: 1,
                borderRadius:1,
                pr: 2.1,
                pt: 2.5,
              }}
            >
                <p></p>
                
            </Box>
            <ul><h1></h1></ul>
            <Box container alignContent='center' display='flex' justifyContent='center' alignItems='center'>
                <div id='sign-group' className='max-w-[700px]'>
                    <div className="App">
                        <h2>Sign-In</h2>
                        <p className='py-2'>
                            Dont have an account? <Link to='/sign-up' className='underline'>Sign-Up</Link>
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col py-2'>
                            <TextField fullWidth='true' margin='dense' label='Email Address' variant='outlined' className='border p-3' type='email' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='flex flex-col py-2'>
                            <TextField fullWidth='true' margin='dense' label='Password' variant='outlined' className='border p-3' type='password' onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <p></p>
                        <div>
                            <Button fullWidth='true'  color='error' size='large' onClick={handleSubmit} variant='contained'>SIGN-IN</Button>
                        </div>
                    </form>
                </div>
            </Box>
            <Box 
                    style={{
                        transform: "scale(1)",
                        
                      }}
                >
                    <React.StrictMode>
                        <img src={require("./img/animlogo.gif")}></img>
                    </React.StrictMode>
                </Box>
        </Box>
    )
}



export default Signin;