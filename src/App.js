import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HashRouter as Router } from "react-router-dom";
import HomePage from './components/pages/HomePage/HomePage.jsx';
import RecipeDetailPage from './components/pages/RecipeDetailPage/RecipeDetailPage.jsx';
import AddRecipePage from './components/pages/AddRecipePage/AddRecipePage.jsx';
import SidebarMenu from './components/organisms/SidebarMenu/SidebarMenu.jsx';
import TopNavigationBar from './components/organisms/TopNavigationBar/TopNavigationBar.jsx';
import Footer from './components/organisms/Footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <TopNavigationBar />
        <SidebarMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          <Route path="/add-recipe" element={<AddRecipePage />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
