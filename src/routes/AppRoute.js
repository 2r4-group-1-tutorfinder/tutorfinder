import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../App.css';
import Home from "../components/pages/Home"
import Members from '../components/pages/Members'
import Find from '../components/pages/Find'
import Signup from '../components/pages/Signup'
import Signin from '../components/pages/Signin'
import Appoint from '../components/pages/Appoint'
import Apply from '../components/pages/Apply'
import ProtectedRoute from '../components/ProtectedRoute'
import ProtectedRoute2 from '../components/ProtectedRoute2'
import { AuthContextProvider } from '../context/AuthContext'

export default function AppRoute() {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <Routes>
                    <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
                    <Route path="/members" element={<ProtectedRoute><Members/></ProtectedRoute>}/>
                    <Route path="/findtutors" element={<ProtectedRoute><Find/></ProtectedRoute>}/>
                    <Route path="/apply" element={<ProtectedRoute><Apply/></ProtectedRoute>}/>
                    <Route path="/appoint" element={<ProtectedRoute><Appoint/></ProtectedRoute>}/>
                    <Route path="/sign-up" element={<ProtectedRoute2><Signup/></ProtectedRoute2>}/>
                    <Route path="/sign-in" element={<ProtectedRoute2><Signin/></ProtectedRoute2>}/>
                </Routes>   
            </AuthContextProvider>
        </BrowserRouter>
    )
}