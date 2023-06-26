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

  const navigateToHome = () => {
      navigate('/')
    }

  const navigateToFind = () => {
    navigate('/findtutors')
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
        <Box>
            <div className="App">
              <Box
                sx={{
                  marginTop: 5,
                  marginBottom: 3,
                  }}
              >
                <Typography color='black' variant='h3'>Search for a Subject</Typography>
              </Box>
              <Box>
              <TextField type="text" placeholder="Search a subject..." onChange={(e)=>setSearch(e.target.value)} 
                sx={{
                  marginTop: 3,
                  width: 700,
                  marginBottom: 3,
                  }}
                  />
              </Box>
              {nameList.filter((item)=>{
                if(search===""){
                  return item
                }

                else if(item.Subject.toLowerCase().includes(search.toLowerCase())){
                  return item
                }
              })
              .map((item)=>{
                return <Box display='flex' justifyContent='center' flexDirection='row'><div 
                    className="nameContainer" 
                    key={item.Subject}>
                    <Box display='flex' justifyContent='center' flexDirection='row'>
                      <Box
                        sx={{
                          marginTop: 3,
                          boxShadow: 2,
                          borderRadius: 4,
                          width: 800,
                          height: 300,
                        }}
                      
                      >
                            <Box
                              sx={{
                                boxShadow: 1,
                                borderRadius: 4,
                                pt:0.1,
                                pb:0.2,
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                              }}
                            >
                            <Typography color='#D32F2F' variant='h2'>{item.Subject}</Typography>
                            </Box>
                            <Box
                              sx={{
                                marginTop:2,
                              }}
                            >
                              <div>
                                  <Typography variant='h4'>Tutor Name: {item.Firstname} {item.Middlename} {item.Lastname}</Typography>
                              </div>
                              <div>
                                  <Typography variant='h5'>Email Address: {item.Email}</Typography>
                              </div>
                              <div>
                                  <Typography variant='h5'>Contact Number: {item.No}</Typography>
                              </div>
                              <div>
                                  <Typography variant='h5'>School Affiliated: {item.School_Affiliation}</Typography>
                              </div>
                              <div>
                                  <Box>
                                    <p></p>
                                    <Button onClick={navigateToAppoint} variant='contained' color='error'>Appoint</Button>
                                  </Box>
                              </div>
                            </Box>
                      </Box>
                    </Box>
                    </div>
                   </Box>
              })}
            </div>
        </Box>
    </>
  );
}