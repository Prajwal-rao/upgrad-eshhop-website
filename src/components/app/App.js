// src/components/app/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './App.css';  // Import any styles specific to the App component
import Login from '../login/Login';
import SignUp from '../signup/SignUp';

const App = () => {
    const isLoggedIn = false; // Replace with actual state or prop
    const isAdmin = false; // Replace with actual state or prop

    const handleLogout = () => {
        // Implement logout logic here
    };

    const handleLogin = (username, password) => {
        // Implement login logic here (e.g., call the API /auth)
        console.log('Logging in with', username, password);
        // Redirect to home after login or display error
    };

    const handleSignUp = (userDetails) => {
        // Implement sign-up logic here (e.g., call the API /users)
        console.log('Signing up with', userDetails);
        // Redirect to login page or display success message
    };

    return (
        <Router>
            <Navbar isLoggedIn={isLoggedIn} isAdmin={isAdmin} onLogout={handleLogout} />
            <Routes>
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
            </Routes>
        </Router>
    );
};

export default App;
