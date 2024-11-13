import React from "react";

import { motion } from 'framer-motion';
import heroImg from '/assets/pic1.png';
import Volunteer from './volunteer';

const AboutPage = () => {
    const objectives = [
        "Organize free service camps for the underprivileged.",
        "Celebrate auspicious days of spiritual leaders, gurus, and saints.",
        "Encourage academic excellence by supporting talented students.",
        "Commemorate martyrs through memorial gatherings.",
        "Provide educational support for underprivileged children.",
        "Celebrate national festivals like January 26th and August 15th.",
        "Offer free services for public welfare.",
        "Promote cultural and artistic activities.",
        "Raise awareness and protect rights of new artists."
    ];

    const coreActivities = [
        {
            title: "Theatre and Performing Arts",
            description: "We conduct workshops, performances, and events that encourage artistic expression through traditional and contemporary theatre, street plays, and dance."
        },
        {
            title: "Community Outreach",
            description: "Kaladhara actively engages in food drives, clothing distributions, and educational programs to assist those in need."
        },
        {
            title: "Cultural Awareness",
            description: "Our events foster dialogue and understanding among diverse communities, celebrating cultural heritage."
        },
        {
            title: "Workshops and Training",
            description: "We offer workshops in acting, painting, and music to help participants express themselves creatively."
        },
        {
            title: "Youth Engagement",
            description: "We provide platforms for youth to showcase talents and engage in social activities, nurturing leadership and social awareness."
        }
    ];

    const timelineEvents = [
        { year: "2021", description: "Kaladhara Theatre and Art Group was founded to bring artistic awareness and social engagement to the community." },
        { year: "2022", description: "Launched multiple street play campaigns focused on environmental awareness and social issues, with over 50 performances across local communities." },
        { year: "2023", description: "Organized a series of youth art workshops and cultural festivals, reaching an audience of over 5,000 people." },
        { year: "2024", description: "Expanded to digital platforms with online art tutorials and live-streamed performances to connect with a global audience." },
    ];

    return (
        <div className="min-h-screen">
            <div className="relative h-[400px]">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    src={heroImg}
                    alt="Children playing"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <motion.h1
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-6xl text-white font-bold"
                    >
                        About Us
                    </motion.h1>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="container mx-auto px-4 py-12"
            >
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <motion.h2
                        className="text-3xl font-bold mb-4"
                        whileHover={{ scale: 1.1 }}
                    >
                        Help today, lead tomorrow
                    </motion.h2>
                    <p className="text-gray-600">
                        Kaladhara Group is a dynamic theatre and art collective committed to creating social change through the power of performance and community engagement. Founded with the mission to raise awareness on critical issues through street plays (nukkad nataks), Kaladhara has evolved into a multifaceted organization that actively supports and empowers marginalized communities.
                    </p>
                    <p className="text-gray-600">
                        In response to the COVID-19 pandemic, the group expanded its efforts to provide relief to those most affected. Through initiatives such as food and clothing drives, ration distribution, and support for vulnerable groups like the elderly, Kaladhara worked to ensure basic needs were met during these challenging times. Alongside this, Kaladhara has been dedicated to empowering youth and underprivileged students by providing educational resources, organizing skill-building workshops, and promoting cultural heritage.
                    </p>
                    <p className="text-gray-600">
                        The group recognizes the vital role of preserving and celebrating cultural traditions, which is why a significant portion of its initiatives also focuses on reviving and promoting cultural awareness through events like the Bhagvat and other performances. Through these diverse efforts, Kaladhara continues to inspire and unite people from all walks of life, working to bridge gaps in education, culture, and opportunity.
                    </p>
                    <p className="text-gray-600">
                        With a strong foundation in community-driven initiatives, Kaladhara is committed to making a lasting impact, spreading compassion, and fostering a sense of unity through culture, education, and action.
                    </p>

                    <h2 className="text-black font-bold text-lg font-poppins mt-8 mb-4">Aims and Objectives of Kaladhara Theatre and Art Group</h2>
                    <ul className="list-disc list-inside text-left mx-auto max-w-xl">
                        {objectives.map((objective, index) => (
                            <motion.li
                                key={index}
                                className="text-gray-700 mb-2"
                                whileHover={{ scale: 1.05, color: '#111827' }}
                            >
                                {objective}
                            </motion.li>
                        ))}
                    </ul>

                    <h2 className="text-black font-bold text-lg font-poppins mt-8 mb-4">Core Activities</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {coreActivities.map((activity, index) => (
                            <motion.div
                                key={index}
                                className="p-6 rounded-lg shadow-lg transform transition-transform duration-300"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                style={{
                                    background: `linear-gradient(135deg, hsl(${index * 40}, 80%, 70%), hsl(${(index * 40) + 40}, 80%, 60%))`,
                                }}
                            >
                                <h3 className="text-white text-xl font-semibold mb-2">{activity.title}</h3>
                                <p className="text-white">{activity.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <h2 className="text-black font-bold text-lg font-poppins mt-12 mb-4">Our Journey</h2>
                    <div className="relative">
                        <div className="border-l-2 border-blue-500 ml-6">
                            {timelineEvents.map((event, index) => (
                                <motion.div
                                    key={index}
                                    className="mb-10 ml-10"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.3 }}
                                >
                                    <h4 className="text-lg font-semibold">{event.year}</h4>
                                    <p className="text-gray-700">{event.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <Volunteer />
                </div>
            </motion.div>
        </div>
    );

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutPage = () => {
  const volunteers = [
    { id: 1, name: "John Doe", role: "Volunteer", image: "/placeholder.svg?height=300&width=300" },
    { id: 2, name: "Jane Smith", role: "Coordinator", image: "/placeholder.svg?height=300&width=300" },
    { id: 3, name: "Mike Johnson", role: "Director", image: "/placeholder.svg?height=300&width=300" },
    { id: 4, name: "Sarah Williams", role: "Volunteer", image: "/placeholder.svg?height=300&width=300" },
  ];

  return (
    <>
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
      {/* Main Content */}
      <main className="container mx-auto">
        {/* Header Section */}
        <div className="relative mb-0">
          <img
            src="/src/assets/pic1.png" // Placeholder path for the header image
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
            About
          </motion.h1>

          {/* Search Bar */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-lg w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-4 rounded-xl border border-gray-400 bg-gray-100 text-black pl-8 shadow-md focus:outline-none focus:shadow-lg transition-shadow duration-200"
            />
          </div>
        </div>

        

          <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Help today, lead tomorrow</h2>
              <p className="text-gray-600">
                We are dedicated to making a positive impact in our community through education,
                support, and sustainable development initiatives.
              </p>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">Meet our Volunteers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {volunteers.map((volunteer) => (
                  <div key={volunteer.id} className="text-center">
                    <img
                      src={volunteer.image}
                      alt={volunteer.name}
                      className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h4 className="font-semibold">{volunteer.name}</h4>
                    <p className="text-gray-600">{volunteer.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        
      </main>
    </>
  );

};

export default AboutPage;
