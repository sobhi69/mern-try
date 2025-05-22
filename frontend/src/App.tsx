import { Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Home from './pages/Home'
import Items from './pages/Items'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/items' element={<Items />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
