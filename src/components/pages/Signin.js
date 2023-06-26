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
            <Box diplsay='flex' alignContent='center' display='flex' flexDirection='row' justifyContent='center'
            sx={{
                boxShadow: 1,
                height: 120,
              }}  
            >
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
            <Box display='flex' alignItems='center' justifyContent='center'
                    sx={{
                        marginTop: 10,
                        transform: "scale(2)",
                      }}
                >
                    <React.StrictMode>
                        <img width={300} src={require("./img/animlogo.png")}></img>
                    </React.StrictMode>
                </Box>
            <ul><h1></h1></ul>
            <Box container alignContent='center' display='flex' justifyContent='center' alignItems='center'>
                <div id='sign-group' className='max-w-[700px]'>
                    <Box
                         sx={{
                            marginTop: 5,
                            boxShadow: 2,
                            width: 600,
                            borderRadius: 3,
                            paddingRight: 3,
                            paddingLeft: 3,
                            paddingTop: 1,
                            paddingBottom: 3,
                          }}
                    >
                    <form onSubmit={handleSubmit}>
                        <div className="App">
                            <h2>Sign-In</h2>
                            <p className='py-2'>
                                Dont have an account? <Link to='/sign-up' className='underline'>Sign-Up</Link>
                            </p>
                        </div>
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
                    </Box>
                </div>
            </Box>
        </Box>
    )
}



export default Signin;