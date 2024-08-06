import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import CV from './components/CV';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import './App.css';

const App = () => (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
);

export default App;
