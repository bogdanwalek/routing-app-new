import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import Header from './components/Header';
import FooterPage from './components/FooterPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 return (
      <>
        <NavigationBar />
        <Header />
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home/>} />
            </Routes>
          </Layout>
        </Router>
        <FooterPage />

      </>
    )
}

export default App
