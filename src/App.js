import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Weather from './pages/Weather'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState(null)

  return (
    <>
      <Header></Header>
      <Navbar user={user}></Navbar>
      <div className='container'>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser}/>} />
          <Route path="/logout" element={<Logout setUser={setUser}/>} />
          <Route path="/weather" element={<Weather/>} />
          <Route path="/about" element={<About user={user}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
