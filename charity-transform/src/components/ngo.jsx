import { Link } from 'react-router-dom';

const Ngo = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full bg-transparent text-white z-10">
        <ul className="flex justify-around lg:justify-center items-center space-x-4 lg:space-x-9 py-5 px-4 lg:px-0 border-b border-white/30">
          <li><Link to="/" className="hover:text-gray-400 transition duration-200">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-400 transition duration-200">About</Link></li>
          <li><Link to="/gallery" className="hover:text-gray-400 transition duration-200">Gallery</Link></li>
          <li><Link to="/blog" className="hover:text-gray-400 transition duration-200">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400 transition duration-200">Contact</Link></li>
          <li>
            <Link 
              to="/donate" 
              className="bg-white/20 text-white px-6 py-6 rounded-sm font-semibold hover:bg-white/40 hover:text-gray-800 transition duration-300"
            >
              Donate
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Ngo;
