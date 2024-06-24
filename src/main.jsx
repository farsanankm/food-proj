import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Layout from './Layout'
import Home from './Home'
import Menu from './Menu'
import Location from './Location'
import Feedback from './Feedback.jsx'
import Contact from './Contact'
import './index.css'
import './Menu.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home"element={<Home/>} />
          <Route path="menu" element={<Menu />} />
          <Route path="feedback" element={<Feedback/>} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
