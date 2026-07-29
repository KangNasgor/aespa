import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Karina from './pages/members/Karina.tsx'
import Giselle from './pages/members/Giselle.tsx'
import Ningning from './pages/members/Ningning.tsx'
import Winter from './pages/members/Winter.tsx'
import Members from './pages/Members.tsx'

import './index.css'
import App from './App.tsx'

import { ThemeProvider } from './context/ThemeContext.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/member" element={<Members />}/>
          <Route path='/member/karina' element={<Karina />}/>
          <Route path='/member/giselle' element={<Giselle />}/>
          <Route path='/member/winter' element={<Winter />}/>
          <Route path='/member/ningning' element={<Ningning />}/>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
