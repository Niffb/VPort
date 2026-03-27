/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackgroundShapes } from './components/BackgroundShapes';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Project } from './pages/Project';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Podcast } from './pages/Podcast';
import { PodcastEpisode } from './pages/PodcastEpisode';
import { Contact } from './pages/Contact';
import { About } from './pages/About';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-hidden bg-paper">
        <BackgroundShapes />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:id" element={<Project />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/podcast" element={<Podcast />} />
              <Route path="/podcast/:id" element={<PodcastEpisode />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
