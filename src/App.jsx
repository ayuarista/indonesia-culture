import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/templates/Header'
import Footer from './components/templates/Footer';
import National from './pages/Awards/National';
import International from './pages/Awards/International';
import Quiz from './pages/Quiz';


function App() {
  return(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/award/national" element={<National />} />
        <Route path="/award/international" element={<International />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
