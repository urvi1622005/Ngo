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
};

export default AboutPage;
