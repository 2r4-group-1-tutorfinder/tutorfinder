import { auth } from '../config/firebase';
import {useEffect, useState} from "react";
import axios from "axios"
import { signOut } from 'firebase/auth';
import { useNavigate, Link } from "react-router-dom";
import { Box, Button, FormLabel, TextField, Typography } from '@mui/material';
import React from 'react';
import { UserAuth } from '../../context/AuthContext';

export default function Find () {
  const [nameList, setNameList] = useState([])
  const [search, setSearch] = useState("")
  const navigate = useNavigate();

  const { user, logout } = UserAuth();

  const handleLogout = async () => {
      try {
          await logout()
          navigate('/')
          console.loh('Logged out!')
      } catch (e) {
          console.log(e.message);
      }
  }

  const navigateToAppoint = () => {
    navigate('/appoint')
  }

  useEffect(()=>{
    axios.get("https://my-json-server.typicode.com/chavesjayemerald/forkedjsonserver/tutor")
    .then((response)=>{setNameList(response.data)})
  },[])

  const SignOff = async () => {
    try{
        await signOut(auth);
        navigate("/")
    } catch(err){
        console.error(err);
    }
    
};

  console.log(auth?.currentUser?.email);
  return (
    <>
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
                    <Link to='/'><Typography variant='inherit' color='#b2102f'>HOME</Typography></Link>
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
        </Box>
        <Box>
            <div className="App">
              <h1>Search A Subject</h1>
              <TextField type="text" placeholder="Search a subject..." onChange={(e)=>setSearch(e.target.value)}/>
              {nameList.filter((item)=>{
                if(search===""){
                
                }

                else if(item.Subject.toLowerCase().includes(search.toLowerCase())){
                  return item
                }
              })
              .map((item)=>{
                return <div 
                    className="nameContainer" 
                    key={item.Subject}>
                    <h2>{item.Firstname} {item.Middlename} {item.Lastname}</h2>
                    <div>
                        <div>
                            <FormLabel>Subject: {item.Subject}</FormLabel>
                        </div>
                        <div>
                            <FormLabel>Email Address: {item.Email}</FormLabel>
                        </div>
                        <div>
                            <FormLabel>Contact Number: {item.No}</FormLabel>
                        </div>
                        <div>
                            <FormLabel>School Affiliated: {item.School_Affiliation}</FormLabel>
                        </div>
                        <div>
                            <Button onClick={navigateToAppoint} variant='contained' color='error'>Appoint</Button>
                        </div>

                    </div>
                    </div>
              })}
            </div>
        </Box>
    </>
  );
}