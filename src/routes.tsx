import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StatePage from './pages/StatePage';
import CityPage from './pages/CityPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/states/:state" element={<StatePage />} />
      <Route path="/states/:state/cities/:city" element={<CityPage />} />
    </Routes>
  );
}