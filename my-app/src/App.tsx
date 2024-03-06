import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Button } from '@mui/material';
import Header from './component/common/Header';
import Dashboard from './component/dashboard/Dashboard';

function App() {
  return (
      <>
      <Header /><Dashboard />
      </>
  );
}

export default App;
