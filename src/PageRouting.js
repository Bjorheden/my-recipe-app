// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage.jsx'
import RecipeDetailPage from './components/pages/RecipeDetailPage/RecipeDetailPage';

function PageRouting() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage></HomePage>} />
        <Route exact path="/recipe/:id" element={<RecipeDetailPage/>} />
      </Routes>
    </Router>
  );
}

export default PageRouting;