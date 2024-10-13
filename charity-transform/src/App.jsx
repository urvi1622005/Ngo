import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ngo from './components/ngo';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Page from './components/Page';
import Feature from './components/feature'
import Volunteer from './components/volunteer';

function App() {
  return (
    <Router>
      <Ngo />
      
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Page />} />
        
      </Routes>
      <Feature/>
      <Volunteer/>
      <Footer />
    </Router>
  );
}

export default App;
