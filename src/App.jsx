import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/templates/Header'
import Footer from './components/templates/Footer';
import National from './pages/Awards/National';
import International from './pages/Awards/International';
import Quiz from './pages/Features/Quiz';
import ScrollToTop from './components/Molecules/ScrollToTop';
import Article from './pages/Article';
import PagesNotFound from './pages/PagesNotFound';
import Province from './pages/Province/Province';
import CalenderEvents from './pages/Features/CalenderEvents';
import DetailCalenderEvents from './pages/Features/DetailCalenderEvents';
import Kalimantan from './pages/Province/Islands/Kalimantan';
import Sumatra from './pages/Province/Islands/Sumatra';
import Java from './pages/Province/Islands/Java';
import Sulawesi from './pages/Province/Islands/Sulawesi';
import BaliNusa from './pages/Province/Islands/BaliNusa';
import MalukuPapua from './pages/Province/Islands/MalukuPapua';

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
        <Route path="/features/calender-events/:id" element={<DetailCalenderEvents />} />
        <Route path="/province" element={<Province />} />
        <Route path="/province/kalimantan" element={<Kalimantan />} />
        <Route path="/province/sumatra" element={<Sumatra />} />
        <Route path="/province/java" element={<Java />} />
        <Route path="/province/sulawesi" element={<Sulawesi />} />
        <Route path="/province/bali-nusa-tenggara" element={<BaliNusa />} />
        <Route path="/province/maluku-papua" element={<MalukuPapua />} />
        <Route path="/article" element={<Article/>}/>
        <Route path="*" element={<PagesNotFound />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
