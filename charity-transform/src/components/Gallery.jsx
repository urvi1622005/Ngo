import  { useState } from "react";
import { PlusCircle, ChevronDown, ChevronUp } from "lucide-react";

const galleryData = {
  2023: [
    { id: 1, src: "/src/assets/g1.png ", alt: "NGO Event 2023" },
    { id: 2, src: "/src/assets/g2.png ", alt: "Community Outreach 2023" },
    { id: 3, src: "/src/assets/b3.png", alt: "Fundraiser 2023" },
  ],
  2022: [
    {
      id: 4,
      src: "/assets/group.png?height=300&width=400",
      alt: "NGO Event 2022",
    },
    {
      id: 5,
      src: "/assets/group.png?height=300&width=400",
      alt: "Community Outreach 2022",
    },
  ],
  2021: [
    {
      id: 6,
      src: "/assets/group.png?height=300&width=400",
      alt: "NGO Event 2021",
    },
    {
      id: 7,
      src: "/assets/group.png?height=300&width=400",
      alt: "Fundraiser 2021",
    },
  ],
};

export default function NGOGallery() {
  const [expandedYears, setExpandedYears] = useState(Object.keys(galleryData));
  const [showAddPhotoModal, setShowAddPhotoModal] = useState(false);
  const [newPhotoYear, setNewPhotoYear] = useState("");

  const toggleYear = (year) => {
    setExpandedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  const handleAddPhoto = (e) => {
    e.preventDefault();
    // Here you would typically handle the file upload and add the new photo to the gallery
    console.log("Adding photo for year:", newPhotoYear);
    setShowAddPhotoModal(false);
    setNewPhotoYear("");
  };

  return (
    <div>
      <div className="relative h-[300px]">
        <img
          src="./src/assets/pic1.png "
          alt="Children playing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-2xl md:text-5xl ml-10 mr-10 text-gray-100 font-bold">
            Media Center
          </h1>
          <input
            type="text"
            placeholder="Search"
            className="w-[30vw] p-3 rounded-lg border border-transparent bg-white/30 backdrop-blur-sm text-gray-100 placeholder-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition ease-in-out duration-200"
          />
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our NGO Gallery</h1>

        <div className="mb-8">
          <button
            onClick={() => setShowAddPhotoModal(true)}
            className="flex items-center justify-center w-full md:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <PlusCircle className="mr-2" />
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
                    <div
                      key={photo.id}
                      className="relative group overflow-hidden rounded-lg"
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-center p-4">
                          {photo.alt}
                        </p>
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
                  <label
                    htmlFor="year"
                    className="block text-sm font-medium mb-2"
                  >
                    Year
                  </label>
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
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium mb-2"
                  >
                    Photo
                  </label>
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
                    className="px-4 py-2 bg-muted text-muted-foreground rounded-md hover:bg-muted/90"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                  >
                    Add Photo
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
