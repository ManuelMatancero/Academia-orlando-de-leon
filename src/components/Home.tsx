import React, { useEffect, useState } from 'react';
import { storage } from '../config/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  const [recentImages, setRecentImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchRecentImages = async () => {
      const imagesRef = ref(storage, 'images');
      const imagesList = await listAll(imagesRef);
      const urls = await Promise.all(
        imagesList.items.slice(-5).map(item => getDownloadURL(item))
      );
      setRecentImages(urls);
    };

    fetchRecentImages();
  }, []);

  return (
    <div className="max-w-7xl mx-auto pt-20 px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Bienvenido a Nuestra Academia de Beisbol</h1>
        <p className="text-xl text-gray-600">El desarrollo del beisbol de mañana comienza hoy</p>
      </div>

      <div className="mb-12">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="h-96 rounded-lg shadow-xl"
        >
          {recentImages.map((url, index) => (
            <SwiperSlide key={index}>
              <img src={url} alt={`Recent activity ${index + 1}`} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Professional Coaching</h3>
          <p className="text-gray-600">Learn from experienced coaches who have played at the highest levels.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">State-of-the-art Facilities</h3>
          <p className="text-gray-600">Train in our modern facilities with the latest equipment and technology.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Comprehensive Training</h3>
          <p className="text-gray-600">From basics to advanced techniques, we cover all aspects of baseball.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;