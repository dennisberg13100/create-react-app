import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  return(
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home /> } exact />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact/> }/>
      </Routes>
    </div>
  )
}

export default App;
