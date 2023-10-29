import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../loginPage/Signin';
import Home from '../common/CustomModal';

const CustomRouter = () => {
  return (
    <Routes>
      <Route path="/TechDev" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default CustomRouter;