"use client";
import { connect } from "@/config/db";
// import User from "@/models/user";
import { NextRequest,NextResponse } from "next/server";
// import bcrypt from "bcrypt";
import React, { useState } from 'react';

// connect();// src/components/SignUp.js

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulating API call
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setIsSignedUp(true);
    } else {
      const errorData = await response.json();
      setErrorMessage(errorData.message || 'Signup failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        {isSignedUp ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-500 mb-4">Sign Up Successful!</h2>
            <p className="text-lg">Welcome, {formData.username}!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <div className="mb-4">
              <label htmlFor="username" className="block text-lg font-medium mb-2">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-lg font-medium mb-2">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition duration-200"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
