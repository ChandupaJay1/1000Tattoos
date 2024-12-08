import { Instagram } from 'lucide-react';

const artists = [
  {
    id: 1,
    name: 'Alex Rivers',
    specialty: 'Black & Grey Realism',
    experience: '10+ years',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
    bio: 'Specializing in hyper-realistic portraits and black & grey work. Alex brings photographs to life on skin with incredible detail and precision.',
    instagram: '@alexrivers_ink'
  },
  {
    id: 2,
    name: 'Sarah Chen',
    specialty: 'Japanese Traditional',
    experience: '8 years',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    bio: 'With deep respect for Japanese tattoo traditions, Sarah creates stunning large-scale pieces that tell stories through art.',
    instagram: '@sarahchen_tattoo'
  },
  {
    id: 3,
    name: 'Marcus King',
    specialty: 'Neo Traditional',
    experience: '6 years',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    bio: 'Marcus combines traditional tattoo elements with modern design for unique, bold pieces that stand the test of time.',
    instagram: '@kingofink'
  }
];

export function Artists() {
  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Meet Our Artists</h1>
        
        <div className="grid grid-cols-1 gap-12">
          {artists.map((artist) => (
            <div key={artist.id} className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-96 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="uppercase tracking-wide text-red-600 font-semibold">
                    {artist.specialty}
                  </div>
                  <h2 className="text-3xl font-bold mt-2">{artist.name}</h2>
                  <p className="text-gray-600 mt-2">Experience: {artist.experience}</p>
                  
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {artist.bio}
                  </p>
                  
                  <div className="mt-6 flex items-center">
                    <Instagram className="text-gray-600 mr-2" size={20} />
                    <a
                      href="#"
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      {artist.instagram}
                    </a>
                  </div>
                  
                  <div className="mt-8">
                    <a
                      href={`/appointment?artist=${encodeURIComponent(artist.name)}`}
                      className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Book with {artist.name.split(' ')[0]}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}