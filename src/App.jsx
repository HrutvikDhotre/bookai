import './App.css'
import Navbar from './components/Navbar'
import Overview from './components/Overview'
import Authentication from './components/Authentication'
import { useState, useEffect } from 'react'
import Endpoints from './components/Endpoints'
import ApiPricing from './components/ApiPricing'
import Tutorial from './components/Tutorial'
import CodeExample from './components/CodeExample'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <div className='bg-backgroundColor dark:bg-white pt-16 sm:pt-40 md:pt-32 pb-10 space-y-10 w-full'>
        <Overview id={'overview'} />
        <Authentication id={'authentication'} />
        <Endpoints id={'endpoints'}/>
        <Tutorial id={'tutorial'} />
        <CodeExample id={'code-example'} />
        <ApiPricing id={'api-pricing'}/>
      </div>
    </>
  )
}

export default App
