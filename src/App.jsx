import { useState } from 'react'
import Home from './page/Home';
import Commands from './page/Commands';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  return (
    <Router>
      <div className="App">
      <Navbar />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#9061F9" fillOpacity="1" d="M0,64L1440,288L1440,0L0,0Z"></path>
        </svg>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/commands' element={ <Commands /> } />
      </Routes>
      <Footer />
    </div>
    </Router>
  )
}

export default App


