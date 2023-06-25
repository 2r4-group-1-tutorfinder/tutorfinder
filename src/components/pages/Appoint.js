import { useEffect, useState } from "react";
import { UserAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { db } from "../config/firebase";
import { getDocs, collection, addDoc } from 'firebase/firestore'
import React from 'react';
import { Box, Button, TextField, Typography } from "@mui/material";

export default function Appoint() {
    const [schedules, setSchedule] = useState([])
    const [value, onChange] = useState(new Date());

    const collectionRead = collection(db, "schedules")

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

    const [newScheduleSubject, setNewScheduleSubject] = useState("")
    const [newScheduleNumber, setNewScheduleNumber] = useState("")
    const [newScheduleDate, setNewScheduleDate] = useState("")
    const [newScheduleTime, setNewScheduleTime] = useState("")
    const [newScheduleTutorName, setNewScheduleTutorName] = useState("")

    useEffect(() => {
        const getListSchedule = async () => {
            try {
                const data = await getDocs(collectionRead)
                const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
                console.log({filteredData})
                setSchedule(filteredData);
            } catch (err) {
                console.error(err);
            }
        };

        getListSchedule();
    }, []);

    const onSubmitSchedule = async () => {
        try {
        await addDoc(collectionRead, {Subject: newScheduleSubject, Phone_Number: newScheduleNumber, Date: newScheduleDate, Time: newScheduleTime, Tutor: newScheduleTutorName})
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
                        <Link variant='contained' to='/' className='underline'>Home</Link>
                    </Box>
                    <Box
                    sx={{
                        p: 2,
                        marginRight: 6,
                      }}
                    >
                        <Link variant='contained' to='/findtutors' className='underline'>Search for tutors</Link>
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
                        <p><Typography variant='poster'>Logged in as {user && user.email}</Typography></p>
                    </div>
                </Box>
                <Box className="App">
                    <Box>
                        <div></div>
                    </Box>
                    <Box>
                        <div></div>
                    </Box>
                </Box>
            </Box>
            <Box display='flex' className='App' justifyContent='center'
            sx={{
              }}  
            >
                <h1>Set an Appointment</h1>
            </Box>
            <Box display='flex' className='App' justifyContent='center'>
                <div className='App' id='sign-group'>
                    <div className='flex flex-col py-2'>
                        <TextField onChange={(e) => setNewScheduleSubject(e.target.value)} fullWidth='true' margin='dense' label='Subject' variant='outlined' className='border p-3'/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <TextField onChange={(e) => setNewScheduleNumber(e.target.value)} fullWidth='true' margin='dense' label='Contact Number' variant='outlined' className='border p-3'/> 
                    </div>
                    <div className='flex flex-col py-2'>
                        <TextField onChange={(e) => setNewScheduleDate(e.target.value)} fullWidth='true' margin='dense' label='Date' variant='outlined' className='border p-3'/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <TextField onChange={(e) => setNewScheduleTime(e.target.value)} fullWidth='true' margin='dense' label='Time' variant='outlined' className='border p-3'/> 
                    </div>
                    <div className='flex flex-col py-2'>
                        <TextField onChange={(e) => setNewScheduleTutorName(e.target.value)} fullWidth='true' margin='dense' label='Tutor Name' variant='outlined' className='border p-3'/> 
                    </div>
                        <p></p>
                        <Button onClick={onSubmitSchedule} color="error" variant="contained" >Submit Schedule</Button>
                </div>
            </Box>
        </Box>
    )
}
