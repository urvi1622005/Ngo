import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ngo from './components/ngo';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import GalleryPage from './components/Gallery';
import BlogPage from './components/Blog';
import Recent from './components/recent';
import President from './components/President';
import Content from './components/Content';
// import Donation from './components/Donation';
import Mission from './components/Mission';
import Feature from './components/feature';
import Volunteer from './components/volunteer';
import LoginPage from './components/Login';
import Hero from './components/hero';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <Ngo />
      <Routes>
        {/* Home route with additional homepage components */}
        <Route path="/" element={
          <>
            <Hero/>
            <HomePage />
            <Recent />
            <Mission />
            <President />
            <Content />
            {/* <Donation /> */}
            <Feature />
            <Volunteer />
          </>
        } />
        
        {/* Other routes with their exclusive components */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
