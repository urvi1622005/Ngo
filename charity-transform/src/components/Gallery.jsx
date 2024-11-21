// import React, { useState } from "react";
// import { PlusCircle, ChevronDown, ChevronUp } from "lucide-react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import heroImg from "../assets/pic1.png";

// const galleryData = {
//   2023: [
//     { id: 1, src: "/src/assets/g1.png", alt: "NGO Event 2023" },
//     { id: 2, src: "/src/assets/g2.png", alt: "Community Outreach 2023" },
//     { id: 3, src: "/src/assets/b3.png", alt: "Fundraiser 2023" },
//   ],
//   2022: [
//     { id: 4, src: "/assets/group.png", alt: "NGO Event 2022" },
//     { id: 5, src: "/assets/group.png", alt: "Community Outreach 2022" },
//   ],
//   2021: [
//     { id: 6, src: "/assets/group.png", alt: "NGO Event 2021" },
//     { id: 7, src: "/assets/group.png", alt: "Fundraiser 2021" },
//   ],
// };

// export default function NGOGallery() {
//   const [expandedYears, setExpandedYears] = useState(Object.keys(galleryData));
//   const [showAddPhotoModal, setShowAddPhotoModal] = useState(false);
//   const [newPhotoYear, setNewPhotoYear] = useState("");

//   const toggleYear = (year) => {
//     setExpandedYears((prev) =>
//       prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
//     );
//   };

//   const handleAddPhoto = (e) => {
//     e.preventDefault();
//     console.log("Adding photo for year:", newPhotoYear);
//     setShowAddPhotoModal(false);
//     setNewPhotoYear("");
//   };

//   return (
//     <div className="container mx-auto">
//       <nav className="absolute top-0 left-0 w-full bg-transparent text-white z-10">
//         <ul className="flex justify-between lg:justify-center items-center space-x-4 lg:space-x-9 py-5 px-4 lg:px-0 border-b border-white/30">
//           <li><Link to="/" className="hover:text-gray-500">Home</Link></li>
//           <li><Link to="/about" className="hover:text-gray-500">About</Link></li>
//           <li><Link to="/gallery" className="hover:text-gray-500">Gallery</Link></li>
//           <li><Link to="/blog" className="hover:text-gray-500">Blog</Link></li>
//           <li><Link to="/contact" className="hover:text-gray-500">Contact</Link></li>
//           <li><Link to="/donate" className="bg-white/25 px-4 py-6">Donate</Link></li>
//           <li><Link to="/login" className="hover:text-gray-500">Login</Link></li>
//         </ul>
//       </nav>

//       <main className="container mx-auto">
//         <div className="relative h-64 sm:h-80 lg:h-96 mb-8">
//           <img src={heroImg} alt="Blog Header" className="w-full h-full object-cover rounded-lg shadow-md" />
//           <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//             <motion.h1
//               className="text-2xl md:text-5xl text-gray-100 font-bold"
//               initial={{ opacity: 0, y: -30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               Gallery
//             </motion.h1>
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-1/3 p-3 rounded-lg bg-white/30 backdrop-blur-sm text-gray-100 placeholder-gray-200 focus:ring-2 focus:ring-blue-300"
//             />
//           </div>
//         </div>
//       </main>

//       <h1 className="text-4xl text-center font-bold text-black-200 mb-8">Our NGO Gallery</h1>
      
//       <button
//         onClick={() => setShowAddPhotoModal(true)}
//         className="flex items-center justify-center w-full md:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors mb-8"
//       >
//         <PlusCircle className="mr-2" /> Add New Photo
//       </button>

//       {Object.entries(galleryData)
//         .sort((a, b) => b[0] - a[0])
//         .map(([year, photos]) => (
//           <div key={year} className="mb-8">
//             <button
//               onClick={() => toggleYear(year)}
//               className="flex items-center justify-between w-full text-left text-2xl font-semibold mb-4 bg-muted p-4 rounded-lg"
//             >
//               <span>{year}</span>
//               {expandedYears.includes(year) ? <ChevronUp /> : <ChevronDown />}
//             </button>
//             {expandedYears.includes(year) && (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {photos.map((photo) => (
//                   <div key={photo.id} className="relative group overflow-hidden rounded-lg">
//                     <img src={photo.src} alt={photo.alt} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
//                     <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                       <p className="text-white text-center p-4">{photo.alt}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
      
//       {showAddPhotoModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-background rounded-lg p-6 w-full max-w-md">
//             <h2 className="text-2xl font-bold mb-4">Add New Photo</h2>
//             <form onSubmit={handleAddPhoto}>
//               <div className="mb-4">
//                 <label htmlFor="year" className="block text-sm font-medium mb-2">Year</label>
//                 <input
//                   type="number"
//                   id="year"
//                   value={newPhotoYear}
//                   onChange={(e) => setNewPhotoYear(e.target.value)}
//                   className="w-full p-2 border border-muted rounded-md"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="photo" className="block text-sm font-medium mb-2">Photo</label>
//                 <input
//                   type="file"
//                   id="photo"
//                   accept="image/*"
//                   className="w-full p-2 border border-muted rounded-md"
//                   required
//                 />
//               </div>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   type="button"
//                   onClick={() => setShowAddPhotoModal(false)}
//                   className="px-4 py-2 bg-muted text-muted-foreground rounded-md hover:bg-muted/90"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
//                 >
//                   Add Photo
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const categories = ['All', 'Events', 'Workshops', 'Community'];
  const images = [
    { src: './src/assets/g1.png', category: 'Events', caption: 'Event 1' },
    { src: './src/assets/g2.png', category: 'Workshops', caption: 'Workshop 1' },
    { src: './src/assets/b1.png', category: 'Community', caption: 'Community Work 1' },
    { src: './src/assets/b2.png', category: 'Events', caption: 'Event 2' },
    { src: './src/assets/b3.png', category: 'Workshops', caption: 'Workshop 2' },
    { src: './src/assets/b4.png', category: 'Community', caption: 'Community Work 2' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(image => image.category === selectedCategory);

  // Internal CSS
  const styles = {
    galleryContainer: {
      padding: '20px',
      backgroundColor: '#f4f4f9',
      fontFamily: 'Arial, sans-serif',
    },
    filterButtons: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    filterButton: {
      margin: '0 10px',
      padding: '10px 20px',
      background: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background 0.3s',
    },
    filterButtonActive: {
      background: '#0056b3',
    },
    galleryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '15px',
    },
    galleryItem: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '10px',
      cursor: 'pointer',
    },
    galleryImage: {
      width: '100%',
      height: 'auto',
      display: 'block',
      transition: 'transform 0.3s ease-in-out',
    },
    galleryCaption: {
      position: 'absolute',
      bottom: '10px',
      left: '10px',
      color: '#fff',
      background: 'rgba(0, 0, 0, 0.5)',
      padding: '5px 10px',
      borderRadius: '5px',
      fontSize: '0.9rem',
    },
    lightbox: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0, 0, 0, 0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      cursor: 'pointer',
    },
    lightboxImage: {
      maxWidth: '90%',
      maxHeight: '80%',
      borderRadius: '10px',
    },
    lightboxCaption: {
      marginTop: '10px',
      color: '#fff',
      fontSize: '1rem',
    },
  };

  return (
    <div style={styles.galleryContainer}>
      {/* Filter Buttons */}
      <div style={styles.filterButtons}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              ...styles.filterButton,
              ...(selectedCategory === category ? styles.filterButtonActive : {}),
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Gallery */}
      <div style={styles.galleryGrid}>
        {filteredImages.map((image, index) => (
          <motion.div
            key={index}
            style={styles.galleryItem}
            whileHover={{ scale: 1.05 }}
            onClick={() => setLightboxImage(image)}
          >
            <img src={image.src} alt={image.caption} style={styles.galleryImage} />
            <div style={styles.galleryCaption}>{image.caption}</div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div style={styles.lightbox} onClick={() => setLightboxImage(null)}>
          <motion.img
            src={lightboxImage.src}
            alt={lightboxImage.caption}
            style={styles.lightboxImage}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <span style={styles.lightboxCaption}>{lightboxImage.caption}</span>
        </div>
      )}
    </div>
  );
};

export default Gallery;

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const Gallery = () => {
//   const images = [
//     { src: './src/assets/g1.png', year: '2019' },
//     { src: './src/assets/g2.png', year: '2020' },
//     { src: './src/assets/b1.png', year: '2021' },
//     { src: './src/assets/b2.png', year: '2022' },
//     { src: './src/assets/b3.png', year: '2023' },
//     { src: './src/assets/b4.png', year: '2024' },
//   ];

//   const [startPhoneAnimation, setStartPhoneAnimation] = useState(false);
//   const [showGallery, setShowGallery] = useState(false);
//   const [selectedImages, setSelectedImages] = useState([]);

//   React.useEffect(() => {
//     const timer = setTimeout(() => {
//       setStartPhoneAnimation(true);
//     }, 5000);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleImageClick = (image) => {
//     setSelectedImages([image]);
//     setShowGallery(true);
//   };

//   const styles = {
//     container: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       flexDirection: 'column',
//       position: 'relative',
//       width: '100%',
//       height: '100vh',
//       backgroundColor: '#f8f9fa',
//       overflow: 'hidden',
//     },
//     circle: {
//       position: 'absolute',
//       width: '400px',
//       height: '400px',
//       borderRadius: '50%',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     imageContainer: {
//       position: 'absolute',
//       width: '120px',
//       height: '120px',
//       perspective: '1000px',
//       cursor: 'pointer',
//       borderRadius: '15px',
//       boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
//     },
//     image: {
//       width: '100%',
//       height: '100%',
//       objectFit: 'cover',
//       borderRadius: '15px',
//       transform: 'rotateY(20deg)',
//       transition: 'transform 0.3s',
//     },
//     galleryText: {
//       position: 'absolute',
//       fontSize: '2rem',
//       fontWeight: 'bold',
//       color: '#333',
//       textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
//     },
//     phone: {
//       position: 'absolute',
//       bottom: '10%',
//       width: '350px',
//       height: '650px',
//       borderRadius: '40px',
//       backgroundColor: '#222',
//       boxShadow: '0 25px 45px rgba(0, 0, 0, 0.6)',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       padding: '10px',
//     },
//     phoneScreen: {
//       width: '100%',
//       height: '90%',
//       backgroundColor: '#fff',
//       borderRadius: '30px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       boxShadow: '0 15px 25px rgba(0, 0, 0, 0.4)',
//       overflow: 'hidden',
//     },
//     carouselImage: {
//       width: '200px',
//       height: 'auto',
//       margin: '0 15px',
//       borderRadius: '15px',
//       boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
//       cursor: 'pointer',
//       transform: 'perspective(1000px) rotateY(20deg)',
//       transition: 'transform 0.3s',
//     },
//     galleryOverlay: {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       width: '100vw',
//       height: '100vh',
//       backgroundColor: 'rgba(0, 0, 0, 0.8)',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       flexDirection: 'column',
//       zIndex: 1000,
//     },
//     galleryOverlayImage: {
//       width: '250px',
//       height: 'auto',
//       margin: '10px',
//       borderRadius: '15px',
//       boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
//     },
//     closeButton: {
//       position: 'absolute',
//       top: '20px',
//       right: '20px',
//       fontSize: '1.5rem',
//       color: '#fff',
//       cursor: 'pointer',
//     },
//     heading: {
//       textAlign: 'center',
//       fontSize: '1.2rem',
//       fontWeight: 'bold',
//       color: '#333',
//       marginTop: '10px',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       {/* Rotating images */}
//       {!startPhoneAnimation && (
//         <motion.div
//           style={styles.circle}
//           animate={{ rotate: 360 }}
//           transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
//         >
//           {images.map((image, index) => (
//             <div
//               key={index}
//               style={{
//                 ...styles.imageContainer,
//                 transform: `rotate(${index * 60}deg) translate(200px) rotate(-${index * 60}deg)`,
//               }}
//             >
//               <img
//                 src={image.src}
//                 alt={`Gallery ${index}`}
//                 style={styles.image}
//               />
//               <div style={styles.heading}>{image.year}</div>
//             </div>
//           ))}
//           <div style={styles.galleryText}>Gallery</div>
//         </motion.div>
//       )}

//       {/* Phone with carousel */}
//       {startPhoneAnimation && (
//         <div style={styles.phone}>
//           <motion.div
//             style={styles.phoneScreen}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <motion.div
//               style={{
//                 display: 'flex',
//                 overflowX: 'auto',
//                 padding: '10px',
//               }}
//             >
//               {images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image.src}
//                   alt={`Phone Gallery ${index}`}
//                   style={styles.carouselImage}
//                   onClick={() => handleImageClick(image)}
//                 />
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>
//       )}

//       {/* Full gallery overlay */}
//       {showGallery && (
//         <div style={styles.galleryOverlay}>
//           <span
//             style={styles.closeButton}
//             onClick={() => setShowGallery(false)}
//           >
//             ✖
//           </span>
//           <motion.div
//             style={{
//               display: 'flex',
//               overflowX: 'auto',
//               marginTop: '20px',
//               padding: '10px',
//             }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             {selectedImages.map((image, index) => (
//               <img
//                 key={index}
//                 src={image.src}
//                 alt={`Selected Gallery ${index}`}
//                 style={styles.galleryOverlayImage}
//               />
//             ))}
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;
