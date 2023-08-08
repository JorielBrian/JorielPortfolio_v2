import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home, Navbar, Contacts, Experience } from './components/components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='w-full'>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path='experience' element={<Experience />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Contacts />
    </div>
  )
}

export default App
