import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About.tsx'
import Projects from './Projects.tsx'
import Photography from './Photography.tsx';
import Daras from './Daras.tsx';
import NavBar from './NavBar.tsx'
import NoPage from "./NoPage.tsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/daras" element={<Daras />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
