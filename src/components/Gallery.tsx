import React, { useEffect, useState } from 'react';
import { storage } from '../config/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

const Gallery = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;

  useEffect(() => {
    const fetchImages = async () => {
      const imagesRef = ref(storage, 'images');
      const imagesList = await listAll(imagesRef);
      const urls = await Promise.all(
        imagesList.items.map(item => getDownloadURL(item))
      );
      setImages(urls);
    };

    fetchImages();
  }, []);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(images.length / imagesPerPage);

  return (
    <div className="max-w-7xl mx-auto pt-20 px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentImages.map((url, index) => (
          <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md">
            <img
              src={url}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === i + 1
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;