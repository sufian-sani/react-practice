import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import NotFound from './pages/NotFound';

const App5 = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/product" element={<ProductPage/>} />
                    <Route path="/profile" element={<ProfilePage/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App5;