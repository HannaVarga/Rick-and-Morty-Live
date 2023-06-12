import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hompage from './pages/Hompage/Hompage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
<Header />
<Hompage />
<Footer />
    </div>
  )
}

export default App
