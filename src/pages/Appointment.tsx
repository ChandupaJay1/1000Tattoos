import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

const services = [
  { id: 'custom', name: 'Custom Design', duration: '3-5 hours', price: 'From $350' },
  { id: 'small', name: 'Small Tattoo', duration: '1-2 hours', price: 'From $150' },
  { id: 'large', name: 'Large Piece', duration: '5+ hours', price: 'From $500' },
  { id: 'coverup', name: 'Cover Up', duration: '3-4 hours', price: 'From $400' }
];

const timeSlots = [
  '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM',
  '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
];

export function Appointment() {
  const [searchParams] = useSearchParams();
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  
  // Get the artist from URL params if available
  const preselectedArtist = searchParams.get('artist') || '';

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Book Your Appointment</h1>
            
            <form className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Appointment Details</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Artist
                  </label>
                  <select
                    defaultValue={preselectedArtist}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">Choose an artist</option>
                    <option value="Alex Rivers">Alex Rivers - Black & Grey Realism</option>
                    <option value="Sarah Chen">Sarah Chen - Japanese Traditional</option>
                    <option value="Marcus King">Marcus King - Neo Traditional</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Service
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${
                          selectedService === service.id
                            ? 'border-red-500 bg-red-50'
                            : 'border-gray-300 hover:border-red-300'
                        }`}
                        onClick={() => setSelectedService(service.id)}
                      >
                        <h3 className="font-semibold">{service.name}</h3>
                        <p className="text-sm text-gray-600">{service.duration}</p>
                        <p className="text-sm text-gray-600">{service.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                        min={new Date().toISOString().split('T')[0]}
                      />
                      <Calendar className="absolute right-3 top-2.5 text-gray-400" size={20} />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Time
                    </label>
                    <div className="relative">
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                      >
                        <option value="">Choose a time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                      <Clock className="absolute right-3 top-2.5 text-gray-400" size={20} />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tattoo Description
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                    placeholder="Please describe your tattoo idea, size, and placement..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Book Appointment
              </button>

              <p className="text-sm text-gray-600 text-center">
                * A deposit may be required to secure your appointment
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}