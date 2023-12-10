
import { useEffect, useState } from 'react'
import './App.css'
import ToggleBtn from './Component/ToggleBtn'
import { ToggleContextProvider } from './ToggleContext/ToggaleContext'
import Card from './Component/Card'


function App() {

  const [defaultTheme, setDefaultTheme] = useState('light')

  const lightTheme = () => {
    setDefaultTheme('light')
  }

  const darkTheme = () => {
    setDefaultTheme('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(defaultTheme)
  }, [defaultTheme])

  return (

    <ToggleContextProvider value={{ defaultTheme, lightTheme, darkTheme }}>
      <ToggleBtn />
      <Card />
    </ToggleContextProvider>
  )
}

export default App
