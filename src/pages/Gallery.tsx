import { useState } from 'react';
import { cn } from '../lib/utils';

const categories = ['All', 'Traditional', 'Japanese', 'Black & Grey', 'Color', 'Neo Traditional'];

const galleryItems = [
  {
    id: 1,
    category: 'Traditional',
    image: 'https://images.unsplash.com/photo-1590246814883-57c511e76523?auto=format&fit=crop&q=80',
    title: 'Traditional Rose'
  },
  {
    id: 2,
    category: 'Japanese',
    image: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&q=80',
    title: 'Dragon Sleeve'
  },
  {
    id: 3,
    category: 'Black & Grey',
    image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80',
    title: 'Realistic Portrait'
  },
  {
    id: 4,
    category: 'Neo Traditional',
    image: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&q=80',
    title: 'Neo Traditional Fox'
  },
  {
    id: 5,
    category: 'Color',
    image: 'https://images.unsplash.com/photo-1612459284970-e8f027596582?auto=format&fit=crop&q=80',
    title: 'Watercolor Abstract'
  },
  {
    id: 6,
    category: 'Japanese',
    image: 'https://images.unsplash.com/photo-1579321866281-1f8c0b8ed865?auto=format&fit=crop&q=80',
    title: 'Koi Fish'
  }
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredGallery = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Gallery</h1>
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full transition-all",
                activeCategory === category
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all rounded-lg flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Selected artwork"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}