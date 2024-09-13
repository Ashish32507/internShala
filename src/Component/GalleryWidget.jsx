import React, { useState } from "react";

const GalleryWidget = () => {
  const [images, setImages] = useState([]);

  // Function to handle the image upload
  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages([...images, imageUrl]);
    }
  };

  return (
    <div className="w-[760px] h-[330px] bg-[#363C43] p-6 rounded-lg space-y-4 relative shadow-custom">
      <div className="flex justify-between items-center w-[600px]">
        <h2 className="bg-black px-4 py-2 rounded-lg text-white cursor-pointer">
          Gallery
        </h2>
        <label className="bg-gray-700 px-4 py-2 rounded-lg text-white cursor-pointer shadow-large-custom">
          + Add Image
          <input
            type="file"
            accept="image/*"
            onChange={handleAddImage}
            className="hidden"
          />
        </label>
      </div>

      <div className="flex space-x-2 overflow-x-scroll">
        {images.length > 0 ? (
          images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index}`}
              className="w-1/3 h-52 object-cover rounded-lg shadow-custom"
            />
          ))
        ) : (
          <div className="w-full h-52 bg-gray-600 rounded-lg flex items-center justify-center text-gray-400">
            No images yet
          </div>
        )}
      </div>

      <div>
        <div className="flex justify-center space-x-4 absolute top-7 right-4">
          <button className="bg-black p-2 px-3 rounded-full text-white text-[12px]">
            <i className="fa-solid fa-arrow-left text-[#969696]"></i>
          </button>
          <button className="bg-black p-2 px-3 rounded-full text-white text-[12px]">
            <i className="fa-solid fa-arrow-right text-[#969696]"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryWidget;
