import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Main from './pages/Main';
import Login from './pages/Login';
import Player from './pages/Player';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/player" element={<Player />} /> 
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
