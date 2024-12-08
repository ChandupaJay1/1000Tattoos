import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Transform Your Ideas Into Living Art</h1>
              <p className="text-xl mb-8">Experience the finest tattoo artistry at INK MASTER. Where passion meets precision.</p>
              <Link 
                to="/appointment" 
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-lg font-semibold"
              >
                Book Your Session <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Artists */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Master Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Rivers",
                specialty: "Black & Grey Realism",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
              },
              {
                name: "Sarah Chen",
                specialty: "Japanese Traditional",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
              },
              {
                name: "Marcus King",
                specialty: "Neo Traditional",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
              }
            ].map((artist) => (
              <div key={artist.name} className="bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{artist.name}</h3>
                  <p className="text-gray-400">{artist.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Works</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1590246814883-57c511e76523?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&q=80"
            ].map((image, index) => (
              <img 
                key={index}
                src={image}
                alt={`Gallery preview ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/gallery"
              className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
            >
              View Full Gallery <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}