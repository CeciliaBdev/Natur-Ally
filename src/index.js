import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import Mentions from './components/Mentions'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/mentions" element={<Mentions />} />
    </Routes>
  </BrowserRouter>
)
