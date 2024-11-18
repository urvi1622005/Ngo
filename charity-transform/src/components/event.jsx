import React, { useState } from "react";

const Event = () => {
  const [openEventIndex, setOpenEventIndex] = useState(null);

  const events = [
    {
      date: "23 Sep",
      title: "Say No to Plastic Usage",
      summary:
        "Plastic waste is one of the biggest environmental concerns. Join our workshops, cleanup drives, and awareness campaigns to combat this issue.",
      image: "https://via.placeholder.com/600x400", // Replace with actual image URLs
    },
    {
      date: "25 Sep",
      title: "Weekly Cleaning Program",
      summary:
        "Help us clean our neighborhoods. Together, we can make a difference and ensure a clean and healthy community.",
      image: "https://via.placeholder.com/600x400", // Replace with actual image URLs
    },
    {
      date: "30 Sep",
      title: "Tree Plantation Drive",
      summary:
        "Be a part of our tree plantation initiative to combat climate change and increase green cover in urban areas.",
      image: "https://via.placeholder.com/600x400", // Replace with actual image URLs
    },
  ];

  const toggleEvent = (index) => {
    setOpenEventIndex(openEventIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Header */}
      <header className="text-center py-8 bg-white shadow-sm">
        <h2 className="text-3xl font-bold text-gray-900">Our Events</h2>
      </header>

      {/* Events Section */}
      <section className="container mx-auto mt-10 px-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative mb-10 mx-auto w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Event Header */}
            <div
              className={`flex items-center justify-between p-4 cursor-pointer ${
                openEventIndex === index ? "bg-gray-100" : "bg-gray-50"
              }`}
              onClick={() => toggleEvent(index)}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm">{event.date}</p>
              </div>
              <span className="text-gray-500">
                {openEventIndex === index ? "▲" : "▼"}
              </span>
            </div>

            {/* Event Content */}
            <div
              className={`transition-all duration-500 ease-in-out ${
                openEventIndex === index
                  ? "max-h-screen p-4"
                  : "max-h-0 overflow-hidden"
              }`}
            >
              <div className="flex gap-4">
                {/* Event Image */}
                <div
                  className="w-1/2 h-48 bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage: `url(${event.image})`,
                  }}
                ></div>

                {/* Event Summary */}
                <div className="w-1/2">
                  <p className="text-gray-700">{event.summary}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-12 bg-gray-800 text-white py-8 text-center">
        <img
          src="https://via.placeholder.com/100"
          alt="Kaladhara Group Logo"
          className="mx-auto mb-4"
        />
        <p className="text-sm">© Kaladhara Group. Empowering change.</p>
      </footer>
    </div>
  );
};

export default Event;
