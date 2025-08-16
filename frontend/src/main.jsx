import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from './landing_page/home/HomePage.jsx'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './landing_page/auth/Signup.jsx'
import Login from './landing_page/auth/Login.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx'
import SupportPage from './landing_page/support/SupportPage.jsx'
import ProductPage from './landing_page/products/ProductPage.jsx'
import PricingPage from './landing_page/pricing/PricingPage.jsx'
import Navbar from './landing_page/Navbar.jsx'
import Footer from './landing_page/Footer.jsx'
import NotFound from './landing_page/NotFound.jsx'
import ScrollToTop from './landing_page/ScrollToTop.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/pricing" element={<PricingPage/>} />
        <Route path="/support" element={<SupportPage/>} />   
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </BrowserRouter>
    <Footer/>
  </StrictMode>
)
