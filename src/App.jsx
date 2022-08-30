import Home from './page/Home';
import Commands from './page/Commands';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import "./index.css"
import { Routes, Route } from "solid-app-router"
export default function App() {
  return (
    <div>
      <Navbar />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#9061F9" fill-opacity="1" d="M0,64L1440,288L1440,0L0,0Z"></path>
        </svg>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/commands' element={ <Commands /> } />
      </Routes>
      <Footer />
    </div>
  );
}
