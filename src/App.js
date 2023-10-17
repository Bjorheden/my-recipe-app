import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage.jsx';
import RecipeDetailPage from './components/pages/RecipeDetailPage/RecipeDetailPage';
import SidebarMenu from './components/organisms/SidebarMenu/SidebarMenu.jsx';
import TopNavigationBar from './components/organisms/TopNavigationBar/TopNavigationBar.jsx';

function App() {
  return (
    <Router>
      <div className="app">
        <TopNavigationBar />
        <SidebarMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
