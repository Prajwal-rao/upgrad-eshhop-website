// src/components/signup/SignUp.js
import React, { useState } from 'react';
import { Button, TextField, Typography, Paper } from '@mui/material';
import './SignUp.css';

const SignUp = ({ onSignUp }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    const handleSignUp = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        // Call sign-up function (e.g., API endpoint /users) here
        onSignUp({ firstName, lastName, email, password, contactNumber });
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <Typography variant="h4" className="signup-title">Sign Up</Typography>
                <form onSubmit={handleSignUp}>
                    <TextField
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextField
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        type="email"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        label="Confirm Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <TextField
                        label="Contact Number"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Sign Up
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
