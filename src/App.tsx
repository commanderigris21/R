import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: #0a192f;
    color: #e6f1ff;
  }

  html {
    scroll-behavior: smooth;
  }
`;

const MainContainer = styled.div`
  padding-top: 80px; /* Space for fixed navbar */
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  background-color: #1a1a2e;
  margin-top: 3rem;
  
  p {
    color: #8892b0;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainContainer>
      <Footer>
        <p>© {new Date().getFullYear()} Khushant. All rights reserved.</p>
      </Footer>
    </Router>
  );
}

export default App;
