import React from 'react'
import Home from './pages/home.jsx'
import SignIn from './pages/sign-in.jsx'
import Profile from './pages/profile.jsx'
import Transactions from './pages/transactions.jsx'
import './index.css'
import Header from "./components/header.jsx"
import Footer from './components/footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001/api/v1';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/sign-in' element={<SignIn/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/transactions' element={<Transactions/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;