import React from 'react';

const Story = () => {
  return (
    <div className="max-w-4xl mx-auto pt-20 px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
      
      <div className="prose prose-lg mx-auto">
        <div className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1508344928928-7165b67de128?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Baseball field at sunset"
            className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
          />
          
          <h3 className="text-2xl font-semibold mb-4">The Beginning</h3>
          <p className="text-gray-700 mb-6">
            Founded in 2010, our academy started with a simple mission: to provide quality baseball training to young athletes
            while instilling values of dedication, teamwork, and sportsmanship.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Our Growth</h3>
          <p className="text-gray-700 mb-6">
            Over the years, we've expanded our facilities and programs, helping hundreds of young players develop their skills
            and achieve their dreams of playing at higher levels.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-700 mb-6">
            Today, we continue our commitment to excellence in baseball training, focusing on individual player development
            while building strong character and leadership skills that last a lifetime.
          </p>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Our Achievements</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Over 100 players advanced to college baseball</li>
            <li>15 players drafted by MLB teams</li>
            <li>Regional Training Center of the Year 2022</li>
            <li>Community Impact Award 2023</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Story;