import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Sample from '../pages/Sample';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'  element={<Home />}/>
                <Route path='/sample'  element={<Sample />} />
            </Routes>
        </BrowserRouter>
    )
}

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);