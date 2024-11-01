const AboutPage = () => {
    const volunteers = [
      { id: 1, name: "John Doe", role: "Volunteer", image: "/placeholder.svg?height=300&width=300" },
      { id: 2, name: "Jane Smith", role: "Coordinator", image: "/placeholder.svg?height=300&width=300" },
      { id: 3, name: "Mike Johnson", role: "Director", image: "/placeholder.svg?height=300&width=300" },
      { id: 4, name: "Sarah Williams", role: "Volunteer", image: "/placeholder.svg?height=300&width=300" },
    ];
  
    return (
      <div className="min-h-screen">
        <div className="relative h-[400px]">
          <img
            src="./src/assets/pic1.png "
            alt="Children playing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl text-white font-bold">About Us</h1>
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
      </div>
    );
  };
export default AboutPage;  