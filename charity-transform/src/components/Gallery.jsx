import React, { useState } from 'react';
import { PlusCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const galleryData = {
  2023: [
    { id: 1, src: '/src/assets/g1.png', alt: 'NGO Event 2023' },
    { id: 2, src: '/src/assets/g2.png', alt: 'Community Outreach 2023' },
    { id: 3, src: '/src/assets/b3.png', alt: 'Fundraiser 2023' },
  ],
  2022: [
    { id: 4, src: '/assets/group.png?height=300&width=400', alt: 'NGO Event 2022' },
    { id: 5, src: '/assets/group.png?height=300&width=400', alt: 'Community Outreach 2022' },
  ],
  2021: [
    { id: 6, src: '/assets/group.png?height=300&width=400', alt: 'NGO Event 2021' },
    { id: 7, src: '/assets/group.png?height=300&width=400', alt: 'Fundraiser 2021' },
  ],
};

export default function NGOGallery() {
  const [expandedYears, setExpandedYears] = useState(Object.keys(galleryData));
  const [showAddPhotoModal, setShowAddPhotoModal] = useState(false);
  const [newPhotoYear, setNewPhotoYear] = useState('');

  const toggleYear = (year) => {
    setExpandedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  const handleAddPhoto = (e) => {
    e.preventDefault();
    console.log('Adding photo for year:', newPhotoYear);
    setShowAddPhotoModal(false);
    setNewPhotoYear('');
  };

  return (
    <div className="container mx-auto  ">
      <nav className="absolute top-0 left-0 w-full bg-transparent text-white z-10">
        <ul className="flex justify-between lg:justify-center items-center space-x-4 lg:space-x-9 py-5 px-4 lg:px-0 border-b border-white/30">
          <li><Link to="/" className="hover:text-gray-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-500">About</Link></li>
          <li><Link to="/gallery" className="hover:text-gray-500">Gallery</Link></li>
          <li><Link to="/blog" className="hover:text-gray-500">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-gray-500">Contact</Link></li>
          <li><Link to="/donate" className="bg-white/25 px-4 py-6">Donate</Link></li>
          <li><Link to="/login" className="hover:text-gray-500">Login</Link></li>
        </ul>
      </nav>

      <main className="container mx-auto">
        <div className="relative mb-0">
          <img
            src="/src/assets/pic1.png"
            alt="Blog Header"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
          <motion.h1
            className="absolute inset-y-0 left-0 ml-8 mt-2 flex items-center text-7xl font-extrabold text-gray-300 pl-20"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Gallery
          </motion.h1>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-lg w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-4 rounded-xl border border-gray-400 bg-gray-100 text-black pl-8 shadow-md focus:outline-none focus:shadow-lg transition-shadow duration-200"
            />
          </div>
        </div>
      </main>

      <h1 className="text-4xl text-black-200 font-bold text-center mb-8">Our NGO Gallery</h1>

      <div className="mb-8">
        <button
          onClick={() => setShowAddPhotoModal(true)}
          className="flex items-center text-black-200 justify-center w-full md:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          <PlusCircle className="mr-2 text-black-200" />
          Add New Photo
        </button>
      </div>

      {Object.entries(galleryData)
        .sort((a, b) => b[0] - a[0])
        .map(([year, photos]) => (
          <div key={year} className="mb-8">
            <button
              onClick={() => toggleYear(year)}
              className="flex items-center justify-between w-full text-left text-2xl font-semibold mb-4 bg-muted p-4 rounded-lg"
            >
              <span>{year}</span>
              {expandedYears.includes(year) ? <ChevronUp /> : <ChevronDown />}
            </button>
            {expandedYears.includes(year) && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {photos.map((photo) => (
                  <div key={photo.id} className="relative group overflow-hidden rounded-lg">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-black-200 text-center p-4">{photo.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

      {showAddPhotoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Add New Photo</h2>
            <form onSubmit={handleAddPhoto}>
              <div className="mb-4">
                <label htmlFor="year" className="block text-sm font-medium mb-2">Year</label>
                <input
                  type="number"
                  id="year"
                  value={newPhotoYear}
                  onChange={(e) => setNewPhotoYear(e.target.value)}
                  className="w-full p-2 border border-muted rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="photo" className="block text-sm font-medium mb-2">Photo</label>
                <input
                  type="file"
                  id="photo"
                  accept="image/*"
                  className="w-full p-2 border border-muted rounded-md"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowAddPhotoModal(false)}
                  className="px-4 py-2 text-black-200 bg-muted text-muted-foreground rounded-md hover:bg-muted/90"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-black-200 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                >
                  Add Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
