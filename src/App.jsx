import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/templates/Header'
import Footer from './components/templates/Footer';
import National from './pages/Awards/National';
import International from './pages/Awards/International';
import Quiz from './pages/Quiz';
import ScrollToTop from './components/Molecules/ScrollToTop';
import Article from './pages/Article';
import PagesNotFound from './pages/PagesNotFound';
import Province from './pages/Province';
import CalenderEvents from './pages/CalenderEvents';


function App() {
  return(
    <Router>
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/award/national" element={<National />} />
        <Route path="/award/international" element={<International />} />
        <Route path="/features/quiz" element={<Quiz />} />
        <Route path="/features/calender-events" element={<CalenderEvents />} />
        <Route path="/province" element={<Province />} />
        <Route path="/article" element={<Article/>}/>
        <Route path="*" element={<PagesNotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
