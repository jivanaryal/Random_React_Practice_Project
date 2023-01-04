import React from 'react'
import Navbar from './NavbarUseState/Navbar'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './NavbarUseState/Home'
import About from './NavbarUseState/About'
// import Login from './Page/Login'
// import Tour from './Projects/Tour'
// import ImagePost from './SearchKey/ImagePost'
// import Practice from './Components/Practice'
// import SearchKey from './SearchKey/SearchKey'
// import Practice from './Components/Practice'
// import ShowHide from './Components/ShowHide'
// import SearchBox from './searchbox/SearchBox'
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home /> } />
          <Route path='/about' exact element={<About /> } />
        </Routes>
      </Router>
    </div>
  )
}


export default App