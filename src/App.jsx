import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainHeader from './Components/Header/MainHeader'
import Banner from './Components/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <MainHeader/>
       <Banner/>
    </>
  )
}

export default App
