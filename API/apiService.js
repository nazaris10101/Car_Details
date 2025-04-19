// src/services/apiService.js
import axios from 'axios';

// USER APIs
const API_GET_USER = import.meta.env.VITE_API_USER_GET;
const API_REGISTER = import.meta.env.VITE_API_USER_SIGNIN;
const API_LOGIN = import.meta.env.VITE_API_USER_LOGIN;
const API_UPDATE_USER = import.meta.env.VITE_API_USER_UPDATE;
const API_LOGOUT = import.meta.env.VITE_API_USER_DELETE;

// CARS API
const API_GET_CARS = import.meta.env.VITE_API_CARS_GET;

// Axios instance 
const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

// ---------------------
// USER FUNCTIONS
// ---------------------

export const getCurrentUser = async (token) => {
  return api.get(API_GET_USER, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const registerUser = async (userData) => {
  return api.post(API_REGISTER, userData);
};

export const loginUser = async (credentials) => {
  return api.post(API_LOGIN, credentials);
};

export const updateUser = async (userData, token) => {
  return api.put(API_UPDATE_USER, userData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const logoutUser = async (token) => {
  return api.post(API_LOGOUT, null, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// ---------------------
// CAR FUNCTIONS
// ---------------------

export const getAllCars = async () => {
  return api.get(API_GET_CARS);
};
