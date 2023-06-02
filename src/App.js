import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Login from "./auth/login";


function App() {
  return (
    <React.StrictMode>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
    </React.StrictMode>
    );
}

export default App;