import { useState, useEffect } from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './Footer'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode () {
    setDarkMode(prevMode => !prevMode);
  }

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <div className="container">
      <Header darkMode = {darkMode} toggleDarkMode = {toggleDarkMode} />
      <MainContent darkMode = {darkMode} />
      <Footer darkMode = {darkMode} />
    </div>
  )
}

export default App
