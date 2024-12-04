import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { stateDirectory } from '../data/companies';
import Logo from '../components/Logo';
import SEOHead from '../components/SEOHead';
import { MapPin, ChevronLeft } from 'lucide-react';

export default function StatePage() {
  const { state } = useParams();
  const navigate = useNavigate();
  
  const stateData = stateDirectory.find(
    s => s.name.toLowerCase() === state?.toLowerCase()
  );

  if (!stateData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Logo />
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">State not found</h1>
            <button
              onClick={() => navigate('/')}
              className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-500"
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              Return home
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${stateData.name} Trucking Authority Requirements & Services`}
        description={`Complete guide to obtaining trucking authority in ${stateData.name}. Find local service providers in major cities.`}
      />
      
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Logo />
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center text-gray-600 hover:text-gray-900"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Back to Home
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {stateData.name} Trucking Authority Services
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stateData.cities.map(city => (
              <div
                key={city.name}
                onClick={() => navigate(`/states/${state}/cities/${city.name.toLowerCase()}`)}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-900">{city.name}</h2>
                </div>
                <p className="mt-2 text-gray-600">
                  {city.companies.length} service provider{city.companies.length !== 1 ? 's' : ''} available
                </p>
                <p className="mt-4 text-sm text-blue-600">View providers →</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}