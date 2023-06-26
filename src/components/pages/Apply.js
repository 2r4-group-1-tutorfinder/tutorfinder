import { useEffect, useState } from "react";
import { UserAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { db } from "../config/firebase";
import { getDocs, collection, addDoc } from 'firebase/firestore'
import React from 'react';
import { Box, Button, TextField, Typography } from "@mui/material";

export default function Apply() {
    const [applicants, setApplication] = useState([])
    const [value, onChange] = useState(new Date());

    const collectionRead = collection(db, "applicants")

    const { user, logout } = UserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logout()
            navigate('/')
            console.loh('Sent!')
        } catch (e) {
            console.log(e.message);
        }
    }

    const navigateToHome = () => {
        navigate('/')
      }
  
    const navigateToFind = () => {
      navigate('/findtutors')
    }

    const [newEmail, setEmail] = useState("")
    const [newFirstname, setFirstname] = useState("")
    const [newLastname, setLastname] = useState("")
    const [newMiddlename, setMiddlename] = useState("")
    const [newNo, setNo] = useState("")
    const [newSchoolAffiliation, setSchoolAffiliation] = useState("")
    const [newSubject, setSubject] = useState("")

    const onSubmitApply = async () => {
        try {
    await addDoc(collectionRead, {Email: newEmail, Firstname: newFirstname, Lastname: newLastname, Middlename: newMiddlename, No: newNo, School_Affiliation: newSchoolAffiliation, Subject: newSubject})
        navigate('/')
        } catch (err) {
            console.error(err);
        }
    }
    

    return (
        <Box>
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
                        width:'100%',
                      }}
                >
                    <React.StrictMode>
                        <img width={300} src={require("./img/animlogo.png")}></img>
                    </React.StrictMode>
                </Box>
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
            <Box display='flex' className='App' justifyContent='center'
            sx={{
              }}  
            >
                <h1>Personal Details</h1>
            </Box>
            <Box display='flex' className='App' justifyContent='center'
            >
                <div className='App' id='sign-group'>
                    <Box 
                        sx={{
                            width: 800,
                          }}
                    >
                        <div className='flex flex-col py-2'>
                            <TextField onChange={(e) => setEmail(e.target.value)} fullWidth='true' margin='dense' label='Emai Address' variant='outlined' className='border p-3'/>
                        </div>
                        <div className='flex flex-col py-2'>
                            <TextField onChange={(e) => setFirstname(e.target.value)} fullWidth='true' margin='dense' label='First Name' variant='outlined' className='border p-3'/> 
                        </div>
                        <div className='flex flex-col py-2'>
                            <TextField onChange={(e) => setMiddlename(e.target.value)} fullWidth='true' margin='dense' label='Middle Initial' variant='outlined' className='border p-3'/>
                        </div>
                        <div className='flex flex-col py-2'>
                            <TextField onChange={(e) => setLastname(e.target.value)} fullWidth='true' margin='dense' label='Last Name' variant='outlined' className='border p-3'/> 
                        </div>
                        <div className='flex flex-col py-2'>
                            <TextField onChange={(e) => setNo(e.target.value)} fullWidth='true' margin='dense' label='Contact Number' variant='outlined' className='border p-3'/> 
                        </div>
                        <div className='flex flex-col py-2'>
                            <TextField onChange={(e) => setSchoolAffiliation(e.target.value)} fullWidth='true' margin='dense' label='School Affiliated' variant='outlined' className='border p-3'/> 
                        </div>
                        <div className='flex flex-col py-2'>
                            <TextField onChange={(e) => setSubject(e.target.value)} fullWidth='true' margin='dense' label='Subject' variant='outlined' className='border p-3'/> 
                        </div>
                        <p></p>
                        <Button onClick={onSubmitApply} color="error" variant="contained" >Submit Application</Button>
                    </Box>
                </div>
            </Box>
        </Box>
    )
}
