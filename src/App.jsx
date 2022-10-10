import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Category from './components/Category'
import Home from "./components/Home"
import Navbar from './components/Navbar'
import Action from './components/Action'


function App() {

  return (
    <Router >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/category/:id" element={<Category />}/>
        <Route path="/action" element={<Action />}/>
      </Routes>
    </Router>
  )
}

export default App
