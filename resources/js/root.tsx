import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from '../provider/AuthProvider.js';
import Header from '../components/common/Header.js';
import Footer from '../components/common/Footer.js';
import Home from '../pages/Home.js';
import Login from '../pages/Login.js';
import PrivateContent from '../pages/PrivateContent.js';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <>
                    <Header/>
                    <div className='main-content'>
                        <Routes>
                            <Route path='/'  element={<Home />}/>
                            <Route path='/login' element={<Login />}/>
                            <Route path='/*' element={<PrivateContent /> }/>
                        </Routes>
                    </div>
                    <Footer/>
                </>
            </AuthProvider>
        </BrowserRouter>
    )
}

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);