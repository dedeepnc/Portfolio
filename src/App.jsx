// Import npm packages
import { Router, Routes, Route } from 'react-router-dom';


// Import pages 
import Home from '../src/components/home/Home';
import About from '../src/components/about/About';
import Layout from '../src/components/layout/Layout';
import Portfolio from './components/portfolio/PortfolioBlock';
import ContactForm from './components/contact/Contact';
import NotFound from './pages/NotFound';




function App() {
  return (
    <Routes>
      {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
      <Route path="/" element={<Layout />}>
        {/* MAIN PAGES */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<ContactForm/>} />
        {/* ERROR 404 PAGE */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}



export default App;