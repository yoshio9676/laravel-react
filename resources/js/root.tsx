import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from '../provider/AuthProvider';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PrivateContent from '../pages/PrivateContent';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/'  element={<Home />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/*' element={<PrivateContent /> }/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);