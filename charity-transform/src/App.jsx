import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ngo from './components/ngo';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Page from './components/Page';
import Feature from './components/Feature';
import Mission from './components/Mission';
import Volunteer from './components/Volunteer';
import Recent from './components/recent';
import President from './components/President';
import Content from './components/Content';
import Donation from './components/Donation';

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Ngo />

      {/* Main Content */}
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage>
              {/* Adding HomePage sections as children components */}
              <Recent />
              <President />
              <Content />
              <Donation />
              <Mission />
              <Feature />
              <Volunteer />
            </HomePage>
          } 
        />
        <Route path="/about" element={<Page />} />
        {/* Add other routes here if needed */}
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
