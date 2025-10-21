import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects'
import Layout from './components/Layout/Layout';

function App() {
  return (
     <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App
