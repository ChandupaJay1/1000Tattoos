import { Award, Users, Clock, Shield } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1598371839519-741c3d290832?auto=format&fit=crop&q=80")'
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About INK MASTER</h1>
            <p className="text-xl text-gray-200">Crafting Stories Through Ink Since 2010</p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80"
                alt="Studio interior"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, INK MASTER has been at the forefront of tattoo artistry, 
                pushing boundaries and setting new standards in the industry. Our journey 
                began with a simple vision: to create a space where art meets skin in perfect harmony.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we've grown into a community of passionate artists and devoted 
                clients, each contributing to our rich tapestry of stories and experiences. 
                Our commitment to excellence, safety, and artistic innovation has made us one 
                of the most trusted names in the industry.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-xl mb-2">1000+</h3>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">12+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Artists</h3>
              <p className="text-gray-600">Skilled professionals with years of experience</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Safe & Sterile</h3>
              <p className="text-gray-600">Highest standards of safety and hygiene</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Custom Designs</h3>
              <p className="text-gray-600">Unique artwork tailored to your vision</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Modern Studio</h3>
              <p className="text-gray-600">State-of-the-art facilities and equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Artistry</h3>
              <p className="text-gray-600">
                We believe in pushing creative boundaries while respecting traditional techniques.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Safety</h3>
              <p className="text-gray-600">
                Your health and safety are our top priorities, with strict adherence to hygiene protocols.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-gray-600">
                We foster a welcoming environment where creativity and individuality thrive.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}