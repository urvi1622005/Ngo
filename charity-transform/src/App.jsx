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
import Event from './components/event';
import Hero from './components/hero';
import Contact from './components/Contact';

// import Contact from './components/Contact';


function App() {
  return (
    <div className='bg-gray-100 min-h-screen'>
    <Router>
      
      <Routes>
        {/* Home route with additional homepage components */}
        <Route path="/" element={
          <>
            <Hero/>

            <Ngo />

            <HomePage />
            <Recent />
            <Mission />
            <President />
            <Content />
            {/* <Donation /> */}
            <Feature />
            <Event />
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
    </div>
  );
}

export default App;
