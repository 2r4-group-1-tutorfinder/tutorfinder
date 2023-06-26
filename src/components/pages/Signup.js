import React, { useState } from 'react';
import { db } from '../config/firebase';
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext';
import '../../App.css';
import Button from '@mui/material/Button';
import { Box, TextField } from '@mui/material';



const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [middlename, setInitial] = useState('');
    const [lastname, setLastname] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const { createUser } = UserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try{
            await createUser(email, password).then(cred => {
                return db.collection('users').doc(cred.user.uid).set({
                    firstname: createUser[firstname].value,
                    middlename: createUser[middlename].value,
                    lastname: createUser[lastname].value
                })
            })
            navigate('/')
        }catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }

    return(
        <Box>
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
            <Box container alignContent='center' display='flex' justifyContent='center' alignItems='center' component="span">
                <div id='sign-group' className='max-w-[700px] mx-auto my-16 p-4'>
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
                        <h2>Sign-Up</h2>
                        <p className='py-2'>
                            Already have an account? <Link to='/sign-in' className='underline'>Sign-In</Link>
                        </p>
                    </div>
                        <div className='flex flex-col py-2'>
                            <TextField fullWidth='true' margin='dense' label='Email Address' variant='outlined' type='email' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='flex flex-col py-2'>
                            <TextField fullWidth='true' margin='dense' label='Password'variant='outlined' type='password' onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className='flex flex-col py-2'>
                            <TextField fullWidth='true' margin='dense' label='First Name'variant='outlined'onChange={(e) => setFirstname(e.target.value)}/>
                        </div>
                        <div className='flex flex-col py-2'>
                            <TextField fullWidth='true' margin='dense' label='Middle Initial'variant='outlined' onChange={(e) => setInitial(e.target.value)}/>
                        </div>
                        <div className='flex flex-col py-2'>
                            <TextField fullWidth='true' margin='dense' label='Last name'variant='outlined' onChange={(e) => setLastname(e.target.value)}/>
                        </div>
                        <p></p>
                        <Button fullWidth='true' color='error' size='large' onClick={handleSubmit} variant='contained'>SIGN-UP</Button>
                    </form>
                    </Box>
                </div>
            </Box>
            
        </Box>
    )
}

export default Signup;