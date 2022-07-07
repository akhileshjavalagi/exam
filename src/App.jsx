import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Fetch from './components/Fetch'
import ShowAnswer from './components/ShowAnswer'
import { globleData } from './context/Contexts'
import { BrowserRouter } from 'react-router-dom'
import Routers from './components/Routers'
function App() {
  const [data, setData] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [store, setStore] = useState([])
  return (
    <div className="App">
      <BrowserRouter>
      {/* here I defined useContext */}
      <globleData.Provider value={{data, setData, answer, setAnswer, store, setStore}}>
       <Routers/>
      </globleData.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
